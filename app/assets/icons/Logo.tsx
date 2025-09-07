import * as React from "react";

const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Delivery Bag */}
    <rect x="12" y="14" width="24" height="20" rx="3" ry="3" fill="#E63946" />
    {/* Bag flap */}
    <path d="M12 14 L24 6 L36 14" stroke="white" strokeWidth="2" fill="none" />
    {/* Bag handle */}
    <line x1="18" y1="14" x2="18" y2="10" stroke="white" strokeWidth="2" />
    <line x1="30" y1="14" x2="30" y2="10" stroke="white" strokeWidth="2" />
    <path d="M18 10 Q24 4 30 10" stroke="white" strokeWidth="2" fill="none" />
    {/* Motion lines to indicate speed */}
    <line x1="6" y1="20" x2="12" y2="20" stroke="white" strokeWidth="2" />
    <line x1="6" y1="28" x2="12" y2="28" stroke="white" strokeWidth="2" />
  </svg>
);

export default Logo;
