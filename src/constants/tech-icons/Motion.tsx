function Motion({ ...props }: React.SVGProps<SVGSVGElement>) {
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
        d='M256,128c0,-70.648 -57.352,-128 -128,-128c-70.648,0 -128,57.352 -128,128c0,70.648 57.352,128 128,128c70.648,-0 128,-57.352 128,-128'
        fill='#f6eb20'
      />
      <path d='M99.688,87.32l-45.886,81.36l-41.802,0l35.829,-63.529c5.554,-9.848 19.414,-17.831 30.958,-17.831l20.901,-0Zm102.51,20.34c-0,-11.233 9.357,-20.34 20.901,-20.34c11.544,-0 20.901,9.107 20.901,20.34c-0,11.233 -9.357,20.34 -20.901,20.34c-11.544,0 -20.901,-9.107 -20.901,-20.34Zm-94.673,-20.34l41.802,-0l-45.884,81.36l-41.802,0l45.884,-81.36Zm49.372,-0l41.802,-0l-35.829,63.529c-5.554,9.849 -19.414,17.831 -30.957,17.831l-20.902,0l45.886,-81.36Z' />
    </svg>
  );
}

export { Motion };