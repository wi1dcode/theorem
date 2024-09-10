export default function LinkArrow({ className, fill, right, down, up }) {
  const rotation = right
    ? "rotate(180deg)"
    : down
    ? "rotate(90deg)"
    : up
    ? "rotate(-90deg)"
    : "rotate(0deg)"

  return (
    <svg
      width="8"
      height="13"
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: rotation }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.96028 6.14231C7.17996 6.36199 7.17996 6.71809 6.96028 6.93776L1.22541 12.6726C1.00573 12.8923 0.649631 12.8923 0.429956 12.6726L0.164756 12.4075C-0.0549187 12.1878 -0.0549187 11.8316 0.164756 11.612L5.23671 6.54004L0.164756 1.46809C-0.0549186 1.24841 -0.0549186 0.89231 0.164756 0.672636L0.429956 0.407436C0.649631 0.187761 1.00573 0.187761 1.22541 0.407436L6.96028 6.14231Z"
        fill={fill ? fill : "#333333"}
      />
    </svg>
  )
}
