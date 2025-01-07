function Tailwind({ ...props }: React.SVGProps<SVGSVGElement>) {
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
        d='M64,102.4c8.533,-34.133 29.867,-51.2 64,-51.2c51.2,-0 57.6,38.4 83.2,44.8c17.067,4.267 32,-2.133 44.8,-19.2c-8.533,34.133 -29.867,51.2 -64,51.2c-51.2,0 -57.6,-38.4 -83.2,-44.8c-17.067,-4.267 -32,2.133 -44.8,19.2Zm-64,76.8c8.533,-34.133 29.867,-51.2 64,-51.2c51.2,0 57.6,38.4 83.2,44.8c17.067,4.267 32,-2.133 44.8,-19.2c-8.533,34.133 -29.867,51.2 -64,51.2c-51.2,-0 -57.6,-38.4 -83.2,-44.8c-17.067,-4.267 -32,2.133 -44.8,19.2Z'
        fill='url(#_Linear6)'
      />
      <defs>
        <linearGradient
          id='_Linear6'
          x1='0'
          y1='0'
          x2='1'
          y2='0'
          gradientUnits='userSpaceOnUse'
          gradientTransform='matrix(256,426.664,-426.664,256,5.46153e-06,-85.3317)'
        >
          <stop offset='0' stopColor='#2383ae' />
          <stop offset='1' stopColor='#6dd7b9' />
        </linearGradient>
      </defs>
    </svg>
  );
}

export { Tailwind };
