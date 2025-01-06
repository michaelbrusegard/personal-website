function Vite({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 410 404'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M405.411,59.795l-189.541,338.932c-3.913,6.997 -13.967,7.039 -17.939,0.075l-193.299,-338.974c-4.327,-7.589 2.162,-16.781 10.761,-15.243l189.744,33.915c1.21,0.216 2.449,0.214 3.66,-0.006l185.775,-33.861c8.571,-1.562 15.09,7.559 10.839,15.162Z'
        fill='url(#_Linear1)'
      />
      <path
        d='M295.522,0.099l-140.266,27.485c-2.305,0.452 -4.012,2.405 -4.151,4.75l-8.629,145.725c-0.203,3.432 2.949,6.096 6.299,5.324l39.052,-9.013c3.654,-0.843 6.956,2.376 6.205,6.05l-11.602,56.814c-0.781,3.824 2.809,7.094 6.543,5.96l24.12,-7.329c3.74,-1.135 7.333,2.144 6.542,5.971l-18.439,89.243c-1.153,5.582 6.272,8.626 9.368,3.84l2.069,-3.197l114.296,-228.098c1.914,-3.819 -1.386,-8.174 -5.581,-7.364l-40.198,7.758c-3.777,0.728 -6.991,-2.79 -5.925,-6.485l26.236,-90.951c1.068,-3.703 -2.158,-7.223 -5.939,-6.483Z'
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
          gradientTransform='matrix(235.898,320.368,-320.368,235.898,-0.0874948,32.4716)'
        >
          <stop offset='0' stopColor='#41d1ff' />
          <stop offset='1' stopColor='#bd34fe' />
        </linearGradient>
        <linearGradient
          id='_Linear2'
          x1='0'
          y1='0'
          x2='1'
          y2='0'
          gradientUnits='userSpaceOnUse'
          gradientTransform='matrix(42.6729,292.731,-292.731,42.6729,194.246,7.56145)'
        >
          <stop offset='0' stopColor='#ffea83' />
          <stop offset='0.08' stopColor='#ffdd35' />
          <stop offset='1' stopColor='#ffa800' />
        </linearGradient>
      </defs>
    </svg>
  );
}

export { Vite };
