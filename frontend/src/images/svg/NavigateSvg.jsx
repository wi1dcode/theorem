export default function NavigateSvg({ PathStroke }) {
  return (
    <svg
      width="28"
      height="36"
      viewBox="0 0 28 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.16663 14.1919C1.16663 23.0869 8.94816 30.4427 12.3925 33.2629C12.8854 33.6665 13.1348 33.8707 13.5026 33.9743C13.789 34.0549 14.2104 34.0549 14.4968 33.9743C14.8652 33.8705 15.1129 33.6683 15.6077 33.2632C19.052 30.443 26.8331 23.0877 26.8331 14.1927C26.8331 10.8265 25.4811 7.59776 23.0744 5.21749C20.6677 2.83722 17.4037 1.5 14.0001 1.5C10.5965 1.5 7.33214 2.83742 4.92542 5.21769C2.51871 7.59796 1.16663 10.8257 1.16663 14.1919Z"
        stroke={PathStroke ? PathStroke : "#828770"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3333 12.5C10.3333 14.525 11.9749 16.1667 14 16.1667C16.025 16.1667 17.6666 14.525 17.6666 12.5C17.6666 10.475 16.025 8.83333 14 8.83333C11.9749 8.83333 10.3333 10.475 10.3333 12.5Z"
        stroke={PathStroke ? PathStroke : "#828770"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
