function Logo({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='256'
      height='160'
      viewBox='0 0 256 160'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M8,154.966l0,-128.931l97.87,64.375l-14.199,9.673l-67.656,-43.347l-0,98.23l-16.015,0Z'
        fill='currentColor'
      />
      <path
        d='M206.682,5l-0,149.926l-16.593,-0l0,-119.166l-25.584,16.147l-14.194,-9.78l56.371,-37.127Z'
        fill='currentColor'
      />
      <path
        d='M49.492,5.113l114.982,75.536l-0.082,19.193l-114.692,-75.734l-0.208,-18.995Z'
        fill='currentColor'
      />
      <path
        d='M232.215,154.968l-0.046,-118.262l15.831,-10.562l0,128.824l-15.785,0Z'
        fill='currentColor'
      />
      <path
        d='M49.492,155l-0,-53.299l16.685,10.996l0.071,42.303l-16.756,-0Z'
        fill='currentColor'
      />
    </svg>
  );
}

export { Logo };
