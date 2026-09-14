const items = [
  { text: "Greatly LLC DBA Greatly Brands" },
  { text: "U.S. nationwide service area" },
  { text: "Nine consumer product categories" },
  { text: "918-321-0104" },
  { text: "Repeat purchasing focus" },
];

export function TrustBar() {
  return (
    <div className="border-y border-[#e2e0da] bg-[#f0efeb] py-8" aria-label="Company overview">
      <div className="container-site">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-xs font-medium">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo"
                aria-hidden="true"
              />
              <span className="text-navy">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
