function AffinityDesigner({ ...props }: React.SVGProps<SVGSVGElement>) {
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
        d='M256,24.999c0,-13.797 -11.202,-24.999 -25,-24.999l-205.998,0c-13.798,0 -25.002,11.202 -25.002,24.999l-0,205.999c-0,13.798 11.204,25.002 25.002,25.002l205.999,0c13.797,0 24.999,-11.204 24.999,-25.002l0,-205.999Z'
        fill='#134881'
      />
      <path
        d='M237.253,227.327c-0.044,5.482 -4.509,9.923 -10.001,9.923l-100.921,-0l-43.138,-74.718l154.06,-0l-0,64.795Zm-218.5,-0.078l-0,-43.871l95.047,-164.628l37.145,-0l-80.297,139.083l45.848,79.416l-87.744,-0c-5.519,-0 -9.999,-4.481 -9.999,-10Zm121.792,-73.239l-37.554,0c-4.194,0 -8.068,-2.199 -10.161,-5.832c-2.1,-3.629 -2.1,-8.104 -0,-11.734l18.785,-32.543l28.93,50.109Zm86.708,-135.26c5.492,-0 9.956,4.439 10.001,9.923l-0,125.337l-86.871,0l-33.851,-58.623l44.246,-76.637l66.475,-0Z'
        fill='url(#_Radial6)'
      />
      <defs>
        <radialGradient
          id='_Radial6'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='matrix(259.547,0,0,-259.547,185.854,-22.4529)'
        >
          <stop offset='0' stopColor='#6be1fb' stopOpacity='1' />
          <stop offset='1' stopColor='#134881' stopOpacity='1' />
        </radialGradient>
      </defs>
    </svg>
  );
}

export { AffinityDesigner };
