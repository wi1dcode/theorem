export default function CircleSvg({ className }) {
  return (
    <svg viewBox="0 0 88 88" className={` text-marron/20 ${className}`}>
      <circle fill="currentColor" cx="44" cy="44" r="15.5" />
      <circle fillOpacity="0.2" fill="currentColor" cx="44" cy="44" r="44" />
      <circle fillOpacity="0.2" fill="currentColor" cx="44" cy="44" r="37.5" />
      <circle fillOpacity="0.3" fill="currentColor" cx="44" cy="44" r="29.5" />
      <circle fillOpacity="0.3" fill="currentColor" cx="44" cy="44" r="22.5" />
    </svg>
  )
}
