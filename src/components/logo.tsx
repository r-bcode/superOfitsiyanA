// RBLogo.tsx
interface RBLogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

const RBLogo = ({ className = "", width = 45, height = 45 }: RBLogoProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}           // ← mana bu joyda
    >
      <rect width="200" height="200" rx="20" fill="#000000" />
      <text
        x="50%"
        y="55%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="100"
        fontWeight="bold"
        fill="white"
      >
        <tspan fill="white">R</tspan>
        <tspan fill="#800020">B</tspan>
      </text>
    </svg>
  );
};

export default RBLogo;