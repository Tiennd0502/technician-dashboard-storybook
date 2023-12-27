interface ServiceIconProps {
  fillColor?: string;
}

const ServiceIcon = ({ fillColor = '#fff' }: ServiceIconProps) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='38' height='49' viewBox='0 0 38 49' fill='none'>
    <path
      d='M30.4066 25.1577L29.5104 25.6764V35L37.5809 30.3403V21.0166L30.4066 25.1577Z'
      fill={fillColor}
    />
    <path
      d='M31.8672 16.7967L28.7635 15L20.4689 19.7884L23.5768 21.5851L31.8672 16.7967Z'
      fill={fillColor}
    />
    <path
      d='M37.0539 19.7883L33.4772 17.751L25.1867 22.5394L25.6597 22.7842L28.7635 24.5767L31.8506 22.7966L37.0539 19.7883Z'
      fill={fillColor}
    />
    <path
      d='M24.5602 25.9668L23.0747 25.2033V22.8299L20.0125 21.0664V30.3237L28.0249 34.9502V25.693L24.5602 23.6971V25.9668Z'
      fill={fillColor}
    />
  </svg>
);

export default ServiceIcon;
