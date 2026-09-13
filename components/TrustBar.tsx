const items = [
  { icon: "✓", text: "U.S.-Incorporated Entity" },
  { icon: "✓", text: "Verifiable Business Address" },
  { icon: "✓", text: "Direct Phone Line" },
  { icon: "✓", text: "Amazon & Walmart.com Channels" },
  { icon: "✓", text: "Repeat Purchasing Focus" },
];

export function TrustBar() {
  return (
    <div className="border-y border-[#e2e0da] bg-[#f0efeb] py-8" aria-label="Verified business facts">
      <div className="container-site">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-xs font-medium">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo text-[10px] font-bold text-white">
                {item.icon}
              </span>
              <span className="text-navy">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
