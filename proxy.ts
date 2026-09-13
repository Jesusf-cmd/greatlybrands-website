import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.length > 1 && pathname.endsWith("/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/\/+$/, "");
    const redirect = NextResponse.redirect(url, 308);
    return withPreviewRobotHeaders(redirect, request);
  }

  return withPreviewRobotHeaders(NextResponse.next(), request);
}

function withPreviewRobotHeaders(response: NextResponse, request: NextRequest) {
  const host = (request.headers.get("host") ?? "").split(":")[0].toLowerCase();
  const isLiveDomain =
    host === "greatlybrands.com" || host === "www.greatlybrands.com";
  const vercelPreview = Boolean(process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production");

  if (!isLiveDomain || vercelPreview) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next|images|logo|api|favicon.ico|.*\\..*).*)"],
};
