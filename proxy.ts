import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.length > 1 && pathname.endsWith("/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/\/+$/, "");
    const redirect = NextResponse.redirect(url, 308);
    return withPreviewRobotHeaders(redirect);
  }

  return withPreviewRobotHeaders(NextResponse.next());
}

function withPreviewRobotHeaders(response: NextResponse) {
  const env = process.env.VERCEL_ENV;
  if (env && env !== "production") {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next|images|logo|api|favicon.ico|.*\\..*).*)"],
};
