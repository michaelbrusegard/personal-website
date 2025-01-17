function Zedge({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 256 256'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle cx='128' cy='128' r='128' fill='#6835de' />
      <path
        d='M94.684,83.557c-1.114,0 -2.091,0.799 -2.387,1.953l-7.756,30.074l-25.959,0c-1.114,0 -2.091,0.799 -2.388,1.952l-3.957,15.478c-0.436,1.694 0.75,3.368 2.386,3.368l24.592,0l-8.408,32.696c-0.435,1.694 0.751,3.368 2.387,3.368l56.503,-0.002c39.694,0 55.761,-19.931 62.065,-44.443c6.303,-24.511 -7.057,-44.384 -29.845,-44.442l-67.233,-0.002Zm3.998,70.589l35.533,0c21.06,0 30.81,-11.726 34.271,-26.144c3.463,-14.417 1.003,-26.142 -19.178,-26.142l-37.546,-0l-13.08,52.286Z'
        fill='#f0f0f0'
      />
    </svg>
  );
}

export { Zedge };
