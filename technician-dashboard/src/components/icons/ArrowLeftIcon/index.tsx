interface ArrowLeftIconProps {
  fillColor?: string;
  startColor?: string;
  endColor?: string;
}

const ArrowLeftIcon = ({
  fillColor = '#222',
  startColor = '#f8d9af',
  endColor = '#fbd199',
}: ArrowLeftIconProps) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40' fill='none'>
    <circle cx='20' cy='20' r='20' fill='url(#paint0_linear_0_28)' />
    <path
      d='M17.5826 20.5119C17.5826 20.5119 22.8268 15.2677 23.2445 14.8499C23.6623 14.4322 23.7246 13.8172 23.2445 13.3371C22.7644 12.857 22.1494 12.9194 21.7317 13.3371C21.3139 13.7549 15.3133 19.7555 15.3133 19.7555C14.8956 20.1732 14.8956 20.8506 15.3133 21.2683L21.7317 27.6867C22.1494 28.1044 22.8268 28.1044 23.2445 27.6867C23.6623 27.2689 23.6623 26.5916 23.2445 26.1739L17.5826 20.5119Z'
      fill={fillColor}
      stroke={fillColor}
      strokeWidth='0.5'
    />
    <defs>
      <linearGradient
        id='paint0_linear_0_28'
        x1='0'
        y1='0'
        x2='0'
        y2='40'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor={startColor} />
        <stop offset='1' stopColor={endColor} />
      </linearGradient>
    </defs>
  </svg>
);

export default ArrowLeftIcon;
