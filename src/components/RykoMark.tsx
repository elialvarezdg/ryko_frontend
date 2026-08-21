interface RykoMarkProps {
  label?: string
  number?: string
  className?: string
}

function RykoMark({
  label = "RYKO",
  number = "01",
  className = "",
}: RykoMarkProps) {
  return (
    <div
      className={`pointer-events-none relative h-32 w-32 select-none ${className}`}
      aria-hidden="true"
    >
      {/* Circle */}
      <div className="absolute inset-2 rounded-full border border-white/15" />

      {/* Main frame */}
      <div className="absolute inset-5 rotate-6 border border-[#E53935]" />

      {/* Diagonal line */}
      <div className="absolute left-0 top-1/2 h-px w-full -rotate-12 bg-white/20" />

      {/* Brand */}
      <span className="ryko-display absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl uppercase italic text-white/20">
        {label}
      </span>

      {/* Number */}
      <span className="absolute -bottom-1 -right-2 border border-white/30 bg-[#0A0A0A] px-2 py-1 text-[8px] font-black tracking-[0.2em] text-white/60">
        {number}
      </span>
    </div>
  )
}

export default RykoMark