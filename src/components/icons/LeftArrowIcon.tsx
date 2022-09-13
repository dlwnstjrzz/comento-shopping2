function LeftArrow({ onClick }) {
  return (
    <svg
      onClick={onClick}
      width="10"
      height="18"
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.07107 1.92893L1 9L8.07107 16.0711"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default LeftArrow;
