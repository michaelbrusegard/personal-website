function Next({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 256 256'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle cx='128' cy='128' r='128' />
      <path
        d='M212.634,224.028l-114.299,-147.228l-21.535,0l-0,102.357l17.228,0l0,-80.478l105.082,135.767c4.741,-3.173 9.258,-6.656 13.524,-10.418Z'
        fill='url(#_Linear1)'
      />
      <rect
        x='163.556'
        y='76.8'
        width='17.067'
        height='102.4'
        fill='url(#_Linear2)'
      />
      <defs>
        <linearGradient
          id='_Linear1'
          x1='0'
          y1='0'
          x2='1'
          y2='0'
          gradientUnits='userSpaceOnUse'
          gradientTransform='matrix(37.4838,62.5778,-62.5778,37.4838,152.368,165.689)'
        >
          <stop offset='0' stopColor='#ffffff' stopOpacity='1' />
          <stop offset='1' stopColor='#ffffff' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='_Linear2'
          x1='0'
          y1='0'
          x2='1'
          y2='0'
          gradientUnits='userSpaceOnUse'
          gradientTransform='matrix(-0.00794074,75.2,-75.2,-0.00794074,172.089,76.8)'
        >
          <stop offset='0' stopColor='#ffffff' stopOpacity='1' />
          <stop offset='1' stopColor='#ffffff' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
}

export { Next };
