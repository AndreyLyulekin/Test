const Logo = ({ isMenuOpen, footerTxtColor }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='291'
      height='24'
      viewBox='0 0 291 24'
      fill='none'>
      <path
        className={`${isMenuOpen ? 'footer__logo_opened' : ''}`}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M35.432 0.788717L23.1849 16.5487C19.6498 21.1025 16.8599 23.2011 10.9982 23.2011H4.54231V16.6098H12.1766C14.1909 16.6098 14.3622 15.7337 14.6039 15.4179L0 0.707217L10.6256 0.788717L18.9649 9.73329L25.9647 0.788717H35.432ZM209.893 13.7573C212.119 27.6021 249.152 27.7651 249.082 11.9949C249.152 -3.77526 212.119 -3.61226 209.893 10.2325H217.568C218.434 7.90974 223.812 6.27975 229.009 6.21863C234.206 6.1575 237.852 7.06418 239.997 9.12205H226.229V14.8678H239.997C237.862 16.9256 234.206 17.8323 229.009 17.7712C223.812 17.7101 218.434 16.0801 217.568 13.7573H209.893ZM148.96 23.2011V18.9937H163.07C177.603 18.9937 177.331 0.788717 163.07 0.788717H141.507V23.2011H148.95H148.96ZM163.09 7.14568C166.343 7.14568 166.464 12.6469 163.09 12.6469H148.96V7.1355H163.09V7.14568ZM291 13.7675C288.774 27.6123 251.741 27.7753 251.811 12.0051C251.741 -3.76507 288.774 -3.60207 291 10.2427H283.325C282.459 7.91993 277.917 6.30012 271.884 6.22881C265.851 6.1575 259.607 7.88937 259.607 12.0051C259.607 16.1208 265.861 17.8527 271.884 17.7814C277.917 17.7101 282.459 16.0903 283.325 13.7675H291ZM186.466 13.3091H196.186L191.331 5.92319L186.476 13.3091H186.466ZM200.335 19.6151H182.317L179.96 23.2011H170.966L185.993 0.788717H196.649L211.686 23.2011H202.692L200.335 19.6151ZM104.493 7.36981V0.788717H137.055V7.36981H124.516V23.2011H117.012V7.36981H104.483H104.493ZM79.1732 0.788717V4.99613H93.2836C107.817 4.99613 107.545 23.2011 93.2836 23.2011H71.7302V0.788717H79.1732ZM93.3037 16.8441C96.5568 16.8441 96.6777 11.3429 93.3037 11.3429H79.1732V16.8441H93.3037ZM66.3822 23.1909H58.9393V7.36981H45.4936L45.2318 11.8421C44.7987 19.1771 40.488 23.2011 33.9918 23.2011H31.0307V16.62H33.9515C36.6406 16.62 38.2722 14.9798 38.373 11.5263L38.6953 0.788717H66.3822V23.2011V23.1909Z'
        fill={footerTxtColor}
      />
    </svg>
  );
};
export default Logo;
