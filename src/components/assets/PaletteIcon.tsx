function PaletteIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='15'
      height='15'
      viewBox='0 0 15 15'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      {...props}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M7.983,12.905c2.272,-0 3.788,-0.804 3.788,-1.992c0,-1.063 -0.906,-1.3 -0.906,-1.926c0,-0.864 3.135,-1.036 3.135,-3.255c0,-2.191 -2.261,-3.637 -5.618,-3.637c-4.408,0 -7.382,2.202 -7.382,5.499c0,3.173 2.822,5.311 6.983,5.311Zm0,-0.923c-3.654,-0 -6.06,-1.76 -6.06,-4.388c-0,-2.752 2.558,-4.576 6.459,-4.576c2.833,0 4.696,1.101 4.696,2.714c-0,1.884 -3.157,1.63 -3.157,3.26c-0,0.923 0.928,1.214 0.928,1.851c-0,0.685 -1.128,1.139 -2.866,1.139Zm-0.442,-1.274c0.82,0 1.494,-0.675 1.494,-1.5c0,-0.815 -0.674,-1.489 -1.494,-1.489c-0.82,-0 -1.495,0.674 -1.495,1.489c-0,0.825 0.675,1.5 1.495,1.5Zm-0,-0.626c-0.481,0 -0.869,-0.388 -0.869,-0.874c-0,-0.535 0.41,-0.853 0.858,-0.858c0.459,-0.005 0.879,0.307 0.879,0.858c0,0.486 -0.383,0.874 -0.868,0.874Z'
        fill='currentColor'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M3.725,8.334c0.497,-0 0.896,-0.41 0.896,-0.907c0,-0.496 -0.399,-0.896 -0.896,-0.896c-0.491,0 -0.895,0.4 -0.895,0.896c-0,0.497 0.404,0.907 0.895,0.907Z'
        fill='currentColor'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M5.695,6.607c0.626,-0 1.133,-0.502 1.133,-1.139c0,-0.621 -0.513,-1.117 -1.133,-1.117c-0.631,-0 -1.138,0.496 -1.138,1.117c-0,0.637 0.507,1.139 1.138,1.139Z'
        fill='currentColor'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M8.431,5.732c0.507,0 0.907,-0.404 0.907,-0.911c-0,-0.503 -0.4,-0.907 -0.907,-0.907c-0.496,-0 -0.912,0.404 -0.912,0.907c0,0.507 0.416,0.911 0.912,0.911Z'
        fill='currentColor'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M10.897,6.078c0.405,-0 0.729,-0.329 0.729,-0.74c0,-0.404 -0.324,-0.733 -0.729,-0.733c-0.41,-0 -0.744,0.329 -0.744,0.733c-0,0.411 0.334,0.74 0.744,0.74Z'
        fill='currentColor'
      />
    </svg>
  );
}

export { PaletteIcon };