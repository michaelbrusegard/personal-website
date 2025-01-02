import colors from '../utils/colors';
import heroPhoto from '../../public/photos/hero/hero.png';
import heroDraw from '../../public/photos/hero/draw.png';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useEffect } from 'react';

const HeroImage = () => {
  const drawVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 3,
        ease: 'easeInOut',
      },
    },
  };

  const heroCurveDone = () => {
    const heroCurve = document.querySelector('.hero-curve') as HTMLElement;
    const heroDraw = document.querySelector('.hero-draw') as HTMLElement;
    const heroImage = document.querySelector('.hero-image') as HTMLElement;
    heroDraw.classList.add('hero-opacity');
    heroImage.classList.add('hero-opacity');
    heroCurve.classList.add('hero-gradient');

    heroDraw.addEventListener(
      'transitionend',
      () => {
        heroDraw.classList.remove('hero-opacity');
        heroCurve.classList.remove('hero-gradient');
        heroCurve.classList.remove('hero-opacity');
        // webGLFluidEnhanced.splats();
      },
      { once: true },
    );
  };

  useEffect(() => {
    const updateGradientColors = () => {
      const linearGradient = document.getElementById('gradient');
      if (linearGradient) {
        linearGradient.querySelector('stop[offset="0%"]')?.setAttribute('stop-color', colors.accentColor);
        linearGradient.querySelector('stop[offset="100%"]')?.setAttribute('stop-color', colors.primaryColor);
      }
    };

    const handleColorsUpdated = () => {
      updateGradientColors();
    };

    window.addEventListener('colorsUpdated', handleColorsUpdated);
    return () => {
      window.removeEventListener('colorsUpdated', handleColorsUpdated);
    };
  }, []);

  return (
    <div className='relative left-0 h-full w-full overflow-hidden md:left-[100px] md:w-[calc(100%-100px)] xl:left-[200px] xl:w-[calc(100%-200px)] landscape-md:left-[400px] landscape-md:w-[calc(100%-400px)]'>
      <motion.svg
        width='100%'
        height='100%'
        viewBox='0 0 1813 2468'
        className='hero-curve hero-opacity absolute bottom-0 h-[60%] w-full fill-none stroke-[14px] object-contain xs:h-[75%]'
        initial='hidden'
        animate='visible'
        onAnimationComplete={() => heroCurveDone()}
      >
        <linearGradient id='gradient' x1='21%' y1='100%' x2='79%' y2='0%'>
          <stop offset='0%' stopColor={'rgba(0, 0, 0, 0)'} />
          <stop offset='100%' stopColor={'rgba(0, 0, 0, 0)'} />
        </linearGradient>
        <motion.path
          d='M841.047,2467.63C841.047,2467.63 1194.95,2467.53 1371.9,2467.4C1376.23,2447.86 1376.23,2447.86 1380.56,2428.31C1398.7,2434.73 1398.7,2434.73 1416.84,2441.14C1423.05,2432.85 1425.86,2420.14 1435.48,2416.27C1545.21,2372.15 1662.3,2347.06 1770.36,2298.98C1785.26,2292.35 1790.7,2272.31 1794.6,2256.48C1803.38,2220.89 1813.6,2183.49 1807.76,2147.3C1791.14,2044.22 1765.47,1941.86 1728.14,1844.35C1704.92,1783.72 1657.95,1734.9 1627.85,1677.37C1592.96,1610.68 1571,1537.49 1533.47,1472.24C1525.86,1459 1501.62,1460.8 1495.3,1446.9C1487.53,1429.81 1505.11,1407.18 1496.33,1390.59C1469.33,1339.57 1430.18,1295.7 1392.26,1252.19C1365.94,1221.98 1339.85,1188.75 1304.32,1170.24C1233.61,1133.39 1147.29,1130.74 1079.3,1089.1C1061.64,1078.28 1082.15,1045.11 1071.25,1027.49C1036.18,970.765 987.193,923.923 945.163,872.137C966.964,846.767 991.799,823.716 1010.57,796.025C1024.52,775.429 1037.54,752.935 1042.48,728.55C1058.7,648.401 1055.17,564.887 1073.5,485.194C1076.15,473.672 1096.43,475.328 1103,465.5C1132.22,421.812 1153.7,373.418 1179.05,327.377C1172.13,323.298 1172.13,323.298 1165.22,319.219C1171.02,302.102 1178.41,284.219 1176.69,266.228C1167.57,268.319 1167.57,268.319 1158.46,270.409C1166.4,263.25 1166.4,263.25 1174.34,256.091C1165.21,258.55 1165.21,258.55 1156.08,261.009C1156.48,245.223 1160.47,229.117 1157.29,213.65C1156.01,207.46 1148.18,204.883 1143.63,200.5C1129.53,212.92 1129.53,212.92 1115.43,225.341C1097.71,212.006 1076.47,202.376 1062.28,185.337C1054.24,175.693 1059.19,159.377 1051.94,149.125C1027.76,114.902 1003.4,78.902 969.588,54.15C953.174,42.134 929.396,47.85 909.3,44.7C908.2,38.267 910.705,29.924 906,25.4C895.535,15.338 882.075,6.627 867.688,4.687C847.178,1.923 826.579,9.512 806.025,11.925C805.474,6.165 805.474,6.165 804.923,0.405C799.024,8.121 799.024,8.121 793.125,15.838C782.483,10.525 772.843,-2.531 761.2,-0.1C738.258,4.69 717.869,19.581 700.394,35.198C689.559,44.881 689.579,63.157 679.125,73.25C665.804,86.111 647.342,92.258 631.45,101.762C631.931,95.681 631.931,95.681 632.413,89.6C632.128,98.674 632.128,98.674 631.844,107.747C625.279,102.71 625.279,102.71 618.713,97.672C616.09,106.985 616.09,106.985 613.467,116.297C592.896,109.312 573.477,95.575 551.753,95.343C538.274,95.198 521.536,102.732 516.559,115.259C508.95,134.412 523.504,156.851 519.3,177.027C516.508,190.428 504.142,199.825 496.563,211.225C500.832,216.418 509.649,220.086 509.37,226.803C508.793,240.696 499.323,252.734 494.3,265.7C502.15,265.65 502.15,265.65 510,265.6C509.633,279.567 504.099,294.379 508.9,307.5C511.689,315.123 528.542,311.884 529.864,319.893C539.104,375.853 543.384,433.252 539,489.8C538.177,500.418 519.806,501.419 515.052,510.948C510.168,520.735 510.328,532.845 512.141,543.631C518.138,579.317 520.56,617.437 538.255,649.002C547.419,665.349 579.784,659.777 586.956,677.091C603.854,717.882 610.632,764.716 604.289,808.411C597.638,854.228 584.262,905.551 549.375,935.987C490.166,987.644 411.993,1013.79 338.138,1040.61C325.212,1045.31 312.979,1027.67 299.254,1026.83C286.425,1026.05 274.278,1032.91 261.791,1035.95C273.641,1027.07 273.641,1027.07 285.491,1018.2C252.64,1028.67 217.235,1033.16 186.938,1049.62C154.158,1067.43 124.406,1091.66 99.375,1119.32C75.48,1145.73 52.297,1175.43 42.198,1209.58C19.301,1287.01 2.785,1367.72 2.047,1448.46C1.53,1505.12 36.956,1557.86 38.5,1614.5C39.864,1664.55 1.962,1712.78 10.595,1762.1C26.329,1851.99 68.294,1935.9 109.05,2017.55C175.826,2151.32 270.302,2270.53 332.304,2406.59C341.092,2425.87 320.168,2447.2 314.1,2467.5C489.749,2467.6 841.047,2467.63 841.047,2467.63Z'
          stroke='currentColor'
          fill='url(#gradient)'
          variants={drawVariants as Variants}
        />
      </motion.svg>
      <Image src={heroPhoto} alt='Michael' className='hero-image absolute bottom-0 h-[60%] w-full object-contain xs:h-[75%]' />
      <div
        className='hero-draw absolute bottom-0 h-[60%] w-full bg-foreground object-contain xs:h-[75%]'
        style={{
          maskImage: `url(${heroDraw.src})`,
          WebkitMaskImage: `url(${heroDraw.src})`,
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }}
      />
    </div>
  );
};

export default HeroImage;
