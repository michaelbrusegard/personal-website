function Neovim({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 256 256'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M22.486,55.043l54.518,-55.043l-0,255.932l-54.518,-54.407l-0,-146.482Z'
        fill='url(#_Linear21)'
      />
      <path
        d='M233.141,55.563l-55.265,-55.533l1.12,255.902l54.518,-54.407l-0.373,-145.962Z'
        fill='url(#_Linear22)'
      />
      <path
        d='M76.968,0.044l141.742,216.293l-39.664,39.663l-141.816,-215.815l39.738,-40.141Z'
        fill='url(#_Linear23)'
      />
      <path
        d='M77.016,100.366l-0.075,8.52l-43.764,-64.61l4.053,-4.128l39.786,60.218Z'
        fillOpacity='0.13'
      />
      <defs>
        <linearGradient
          id='_Linear21'
          x1='0'
          y1='0'
          x2='1'
          y2='0'
          gradientUnits='userSpaceOnUse'
          gradientTransform='matrix(1.56713e-14,255.932,-255.932,1.56713e-14,49.7448,1.11022e-16)'
        >
          <stop offset='0' stopColor='#16b0ed' stopOpacity='0.8' />
          <stop offset='1' stopColor='#0f59b2' stopOpacity='0.84' />
        </linearGradient>
        <linearGradient
          id='_Linear22'
          x1='0'
          y1='0'
          x2='1'
          y2='0'
          gradientUnits='userSpaceOnUse'
          gradientTransform='matrix(-1.56695e-14,255.903,255.903,1.56695e-14,205.695,0.0297271)'
        >
          <stop offset='0' stopColor='#7db643' />
          <stop offset='1' stopColor='#367533' />
        </linearGradient>
        <linearGradient
          id='_Linear23'
          x1='0'
          y1='0'
          x2='1'
          y2='0'
          gradientUnits='userSpaceOnUse'
          gradientTransform='matrix(1.56728e-14,255.956,-255.956,1.56728e-14,127.97,0.0437847)'
        >
          <stop offset='0' stopColor='#88c649' stopOpacity='0.8' />
          <stop offset='1' stopColor='#439240' stopOpacity='0.84' />
        </linearGradient>
      </defs>
    </svg>
  );
}

export { Neovim };
