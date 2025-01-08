function Kotlin({ ...props }: React.SVGProps<SVGSVGElement>) {
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
        d='M0,256l128.427,-128.427l127.573,128.427l-256,0Z'
        fill='url(#_Linear8)'
      />
      <path
        d='M0,0l128.427,0l-128.427,138.667l0,-138.667Z'
        fill='url(#_Linear9)'
      />
      <path
        d='M128.427,0l-128.427,135.253l0,120.747l256,-256l-127.573,0Z'
        fill='url(#_Linear10)'
      />
      <defs>
        <linearGradient
          id='_Linear8'
          x1='0'
          y1='0'
          x2='1'
          y2='0'
          gradientUnits='userSpaceOnUse'
          gradientTransform='matrix(120.949,-120.949,120.949,120.949,68.0934,315.794)'
        >
          <stop offset='0' stopColor='#0095d5' />
          <stop offset='0.1' stopColor='#0095d5' />
          <stop offset='0.3' stopColor='#238ad9' />
          <stop offset='0.62' stopColor='#557bde' />
          <stop offset='0.86' stopColor='#7472e2' />
          <stop offset='1' stopColor='#806ee3' />
        </linearGradient>
        <linearGradient
          id='_Linear9'
          x1='0'
          y1='0'
          x2='1'
          y2='0'
          gradientUnits='userSpaceOnUse'
          gradientTransform='matrix(70.2473,-70.2468,70.2468,70.2473,17.9593,51.4522)'
        >
          <stop offset='0' stopColor='#0095d5' />
          <stop offset='0.12' stopColor='#0095d5' />
          <stop offset='0.42' stopColor='#3c83dc' />
          <stop offset='0.7' stopColor='#6d74e1' />
          <stop offset='0.83' stopColor='#806ee3' />
          <stop offset='1' stopColor='#806ee3' />
        </linearGradient>
        <linearGradient
          id='_Linear10'
          x1='0'
          y1='0'
          x2='1'
          y2='0'
          gradientUnits='userSpaceOnUse'
          gradientTransform='matrix(238.222,-238.222,238.222,238.222,-43.1006,235.366)'
        >
          <stop offset='0' stopColor='#c757bc' />
          <stop offset='0.11' stopColor='#c757bc' />
          <stop offset='0.21' stopColor='#d0609a' />
          <stop offset='0.43' stopColor='#e1725c' />
          <stop offset='0.6' stopColor='#ee7e2f' />
          <stop offset='0.74' stopColor='#f58613' />
          <stop offset='0.82' stopColor='#f88909' />
          <stop offset='1' stopColor='#f88909' />
        </linearGradient>
      </defs>
    </svg>
  );
}

export { Kotlin };
