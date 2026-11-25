export function LogoMark({ size = 40 }: { size?: number }) {
  // Recreation of the Smartstorey diamond-tile mark. Replace with the client's vector when supplied.
  const tiles = [
    { x: 40, y: 62, c: "var(--orange)" },
    { x: 66, y: 88, c: "var(--orange)" },
    { x: 92, y: 62, c: "var(--tile)" },
    { x: 118, y: 36, c: "var(--orange)" },
    { x: 144, y: 62, c: "var(--orange)" },
  ];
  const dots = [[14,62],[40,36],[40,88],[66,62],[66,114],[92,88],[92,36],[118,10],[118,62],[144,36],[144,88],[170,62]];
  return (
    <svg width={size} height={size * 0.75} viewBox="0 0 184 124" aria-hidden="true">
      {tiles.map((t, i) => (
        <rect key={i} x={t.x - 16} y={t.y - 16} width="32" height="32" fill={t.c} transform={`rotate(45 ${t.x} ${t.y})`} />
      ))}
      {dots.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="3.2" fill="var(--orange)" />)}
    </svg>
  );
}
export function Logo() {
  return (
    <span className="logo"><LogoMark size={38} /><span className="logo-word">SMART<b>STOREY</b></span></span>
  );
}
