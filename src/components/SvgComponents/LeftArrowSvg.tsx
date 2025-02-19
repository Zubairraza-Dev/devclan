interface SvgArrowProps {
  color: string;
}

const LeftArrowSvg: React.FC<SvgArrowProps> = ({ color }) => {
  return (
    <svg
      width="12"
      height="22"
      viewBox="0 0 12 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 1L1 11L11 21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LeftArrowSvg;
