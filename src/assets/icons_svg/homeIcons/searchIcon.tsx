import { SvgXml } from 'react-native-svg'; 

const SearchIcon = () => {
  const searchXml = `
    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.1444 10L6.29444 6.5C5.98889 6.72222 5.6375 6.89815 5.24028 7.02778C4.84306 7.15741 4.42037 7.22222 3.97222 7.22222C2.86204 7.22222 1.92256 6.87259 1.15378 6.17333C0.385 5.47407 0.000407407 4.62 0 3.61111C0 2.60185 0.384593 1.74778 1.15378 1.04889C1.92296 0.35 2.86244 0.00037037 3.97222 0C5.08241 0 6.02189 0.34963 6.79067 1.04889C7.55944 1.74815 7.94404 2.60222 7.94444 3.61111C7.94444 4.01852 7.87315 4.40278 7.73056 4.76389C7.58796 5.125 7.39444 5.44444 7.15 5.72222L11 9.22222L10.1444 10ZM3.97222 6.11111C4.73611 6.11111 5.38552 5.86796 5.92044 5.38167C6.45537 4.89537 6.72263 4.30519 6.72222 3.61111C6.72222 2.91667 6.45476 2.3263 5.91983 1.84C5.38491 1.3537 4.7357 1.11074 3.97222 1.11111C3.20833 1.11111 2.55893 1.35426 2.024 1.84056C1.48907 2.32685 1.22181 2.91704 1.22222 3.61111C1.22222 4.30556 1.48969 4.89593 2.02461 5.38222C2.55954 5.86852 3.20874 6.11148 3.97222 6.11111Z" fill="#196440" fill-opacity="0.95"/>
    </svg>  
  `
  return(
    <SvgXml xml={searchXml} width={21} height={20}/> 
  );
}

export default SearchIcon;