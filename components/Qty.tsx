"use client";
export default function Qty({ value, onChange, label = "Quantity" }: { value: number; onChange: (n: number) => void; label?: string }) {
  return (
    <div className="qty" role="group" aria-label={label}>
      <button type="button" aria-label="Decrease" onClick={() => onChange(Math.max(1, value - 1))}>−</button>
      <input inputMode="numeric" aria-label={label} value={value} onChange={(e) => onChange(Math.max(1, Math.min(9999, parseInt(e.target.value.replace(/\D/g, "")) || 1)))} />
      <button type="button" aria-label="Increase" onClick={() => onChange(Math.min(9999, value + 1))}>+</button>
    </div>
  );
}
