import React from "react";

interface PawIconProps {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

const PawIcon: React.FC<PawIconProps> = ({
  size = 24,
  color = "#000",
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={size}
    height={size}
    style={style}
    fill="none"
    stroke={color}
    strokeWidth="7"
    strokeMiterlimit="10"
  >
    <path d="M324.5,282.26c-11.49-19.8-36.22-33.5-64.9-33.5s-53.41,13.7-64.9,33.5c-20.53,9.58-33.5,23.62-33.5,39.28,0,28.87,44.05,52.27,98.4,52.27s98.4-23.4,98.4-52.27c0-15.66-12.97-29.7-33.5-39.28Z" />
    <ellipse
      cx="295.77"
      cy="176.77"
      rx="38.75"
      ry="29.72"
      transform="rotate(-76.66 295.77 176.77)"
    />
    <ellipse
      cx="212.93"
      cy="176.77"
      rx="29.72"
      ry="38.75"
      transform="rotate(-13.34 212.93 176.77)"
    />
    <ellipse
      cx="148.91"
      cy="240.32"
      rx="26.12"
      ry="34.05"
      transform="rotate(-30 148.91 240.32)"
    />
    <ellipse
      cx="363.09"
      cy="231.51"
      rx="34.05"
      ry="26.12"
      transform="rotate(-60 363.09 231.51)"
    />
  </svg>
);

export default PawIcon;
