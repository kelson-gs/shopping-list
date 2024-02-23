import { SvgXml } from 'react-native-svg'; 

const CarBuy = () => {
  const carXml = `
    <svg width="58" height="71" viewBox="0 0 58 71" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M49.174 70.9202C51.6429 70.9202 53.6443 68.5957 53.6443 65.7282C53.6443 62.8607 51.6429 60.5362 49.174 60.5362C46.7051 60.5362 44.7036 62.8607 44.7036 65.7282C44.7036 68.5957 46.7051 70.9202 49.174 70.9202Z" fill="white"/>
      <path d="M16.7638 70.9202C19.2327 70.9202 21.2342 68.5957 21.2342 65.7282C21.2342 62.8607 19.2327 60.5362 16.7638 60.5362C14.2949 60.5362 12.2935 62.8607 12.2935 65.7282C12.2935 68.5957 14.2949 70.9202 16.7638 70.9202Z" fill="white"/>
      <path d="M52.5267 54.0462H17.6255L18.3709 52.6417C18.6906 52.0394 18.7845 51.3113 18.6313 50.6259L17.9038 47.3731L50.2949 45.4183C51.5231 45.3456 52.5267 44.1164 52.5267 42.6886V25.49C52.5267 24.0622 51.5209 22.894 50.2915 22.894H12.4265L11.9895 20.9431C11.865 20.3867 11.585 19.894 11.1934 19.5423C10.8019 19.1907 10.3208 18.9999 9.82585 19H2.23518C1.64237 19 1.07385 19.2735 0.654669 19.7604C0.235492 20.2472 0 20.9075 0 21.596C0 22.2845 0.235492 22.9448 0.654669 23.4317C1.07385 23.9185 1.64237 24.192 2.23518 24.192H8.09806L14.066 50.8596L11.719 55.2793C11.5103 55.6725 11.3958 56.1234 11.3873 56.5853C11.3789 57.0471 11.4768 57.5033 11.671 57.9064C11.8644 58.3101 12.1472 58.6464 12.49 58.8806C12.8329 59.1147 13.2234 59.2382 13.6212 59.2382H52.5267C53.1195 59.2382 53.6881 58.9647 54.1072 58.4778C54.5264 57.991 54.7619 57.3307 54.7619 56.6422C54.7619 55.9537 54.5264 55.2934 54.1072 54.8065C53.6881 54.3197 53.1195 54.0462 52.5267 54.0462Z" fill="white"/>
      <path d="M47.4463 13.7949C50.7895 13.2801 53.9562 15.5095 53.9562 15.5095C52.7861 11.4541 49.9273 10.3934 47.6645 10.1782L47.7675 9.92508C50.0621 8.5218 52.9516 9.89217 52.9516 9.89217C51.5338 7.21555 49.4562 6.93034 47.9955 7.05438C47.9452 5.25282 47.6888 3.95754 47.6888 3.95754C46.7936 4.61742 46.032 5.33382 45.2704 6.05023C44.3763 4.78196 42.5771 3.42762 39.7171 4.29507C39.7171 4.29507 42.7918 5.59541 43.3867 8.36906C41.639 6.88815 38.8832 5.57431 35.2408 7.59443C35.2408 7.59443 39.0256 8.30493 41.0296 11.0811C37.6043 11.4127 34.1569 14.1088 32.4572 18.2857C30.191 23.8549 31.9462 29.9381 36.3577 31.8038C40.7692 33.6695 46.2328 30.6393 48.499 25.0701C50.1987 20.8931 49.6356 16.501 47.4463 13.7949ZM44.6309 26.1046C44.2912 26.5543 43.9515 27.0041 43.4781 27.3973L42.6367 24.0743L39.6014 25.7578L40.6587 29.3204C40.1546 29.4039 39.7842 29.544 39.2802 29.6276L38.4179 26.7408L35.8045 28.1576C35.4549 27.8614 35.1569 27.4387 35.044 26.9459L38.2646 25.1924L37.2894 21.8129L34.3056 23.3697C34.378 22.8069 34.3166 22.1875 34.3889 21.6247L37.1361 20.2645L36.3253 17.2512C36.665 16.8014 37.0047 16.3517 37.4781 15.9584L38.3195 19.2814L41.3549 17.598L40.2976 14.0353C40.8016 13.9518 41.172 13.8117 41.676 13.7282L42.5383 16.6149L45.1518 15.1981C45.5013 15.4943 45.7993 15.9171 45.9122 16.4099L42.6917 18.1633L43.6668 21.5429L46.6506 19.986C46.5783 20.5488 46.6396 21.1682 46.5673 21.731L43.8202 23.0913L44.6309 26.1046ZM41.5082 19.1464L42.4833 22.5259L39.448 24.2094L38.4729 20.8298L41.5082 19.1464Z" fill="white"/>
      <path d="M37.4286 22.9141C37.4286 26.3256 33.7458 29.0982 29.2143 29.0982C24.6827 29.0982 21 26.3256 21 22.9141C21 19.8221 23.7381 19.8221 23.7381 16.7301C23.7381 15.2459 24.7649 13.8648 26.4762 13.1227C27.0238 12.8856 27.5988 12.731 28.1875 12.6486V11.5767C28.1875 11.1953 28.078 10.9789 27.8863 10.8346C27.7083 10.6903 27.3387 10.546 26.4762 10.546V9C27.681 9 28.6667 9.23706 29.3375 9.74209C30.0083 10.2471 30.2411 10.9377 30.2411 11.5767V12.6486C30.8298 12.731 31.4185 12.8856 31.9524 13.1227C33.6637 13.8648 34.6905 15.2459 34.6905 16.7301C34.6905 19.8221 37.4286 19.8221 37.4286 22.9141Z" fill="white"/>
      <path d="M24.7777 16.7508C24.343 15.2659 22.8779 14.3854 21.2864 14.4624C21.359 13.9109 21.2859 13.3593 21.0735 12.8559C20.8611 12.3526 20.5159 11.913 20.0682 11.5758C19.6206 11.2386 19.0842 11.0141 18.5062 10.9221C17.9283 10.8301 17.3265 10.8734 16.7538 11.0482C16.252 11.2008 15.8165 11.4497 15.4464 11.7484C15.3335 10.5379 15.2883 8.69025 16.3451 7.91505L15.0362 6.91717C13.2931 8.34328 13.435 10.9991 13.6469 12.3308C13.1355 12.2769 12.6109 12.3085 12.0858 12.4683C11.5128 12.6421 10.9862 12.9421 10.5522 13.3419C10.1182 13.7418 9.79023 14.2292 9.59706 14.7614C9.40388 15.2936 9.35143 15.8541 9.44433 16.3938C9.53724 16.9335 9.77264 17.4358 10.1298 17.8565C8.74239 18.6742 8.00814 20.2471 8.43966 21.7213C8.8743 23.2061 10.3426 24.0973 11.9426 24.0061C11.8856 24.419 11.8994 24.8569 12.0244 25.2842C12.4591 26.7691 13.9157 27.6638 15.5158 27.5726C15.4431 28.1241 15.5162 28.6757 15.7286 29.1791C15.9411 29.6824 16.2863 30.122 16.7339 30.4592C17.1816 30.7964 17.718 31.0209 18.2959 31.1129C18.8738 31.2049 19.4756 31.1616 20.0483 30.9868C20.6213 30.813 21.148 30.513 21.5819 30.1132C22.0159 29.7133 22.3439 29.2259 22.5371 28.6937C22.7303 28.1616 22.7827 27.601 22.6898 27.0613C22.5969 26.5216 22.3615 26.0193 22.0043 25.5986C22.6949 25.1944 23.2355 24.5958 23.5413 23.8964C23.8472 23.1971 23.901 22.4365 23.6945 21.7339C23.5694 21.3066 23.3603 20.9397 23.0758 20.6191C23.7681 20.2152 24.3105 19.6165 24.6184 18.9167C24.9263 18.2168 24.9823 17.4552 24.7777 16.7508ZM20.9755 15.4411L20.9818 15.4625L20.9701 15.466L20.9755 15.4411ZM17.2229 12.6506C18.1915 12.3559 19.1829 12.8337 19.4424 13.7204C19.7019 14.607 19.1296 15.5606 18.1609 15.8553C17.1923 16.15 16.2009 15.6721 15.9414 14.7855C15.6819 13.8988 16.2542 12.9452 17.2229 12.6506ZM18.3592 18.7035C18.6187 19.5901 18.0463 20.5437 17.0777 20.8384C16.1091 21.1331 15.1177 20.6552 14.8582 19.7686C14.5986 18.8819 15.171 17.9283 16.1396 17.6336C17.1082 17.339 18.0996 17.8168 18.3592 18.7035ZM12.5548 14.0707C13.5235 13.776 14.5149 14.2539 14.7744 15.1405C15.0339 16.0272 14.4615 16.9808 13.4929 17.2755C12.5243 17.5701 11.5329 17.0923 11.2734 16.2056C11.0138 15.319 11.5862 14.3654 12.5548 14.0707ZM10.1902 21.1887C9.93062 20.3021 10.503 19.3485 11.4716 19.0538C12.4402 18.7591 13.4316 19.237 13.6912 20.1236C13.9507 21.0103 13.3783 21.9639 12.4097 22.2585C11.4411 22.5532 10.4497 22.0754 10.1902 21.1887ZM13.7749 24.7517C13.5154 23.865 14.0878 22.9114 15.0564 22.6167C16.025 22.322 17.0164 22.7999 17.276 23.6866C17.5355 24.5732 16.9631 25.5268 15.9945 25.8215C15.0259 26.1162 14.0345 25.6383 13.7749 24.7517ZM19.5793 29.3844C18.6107 29.6791 17.6193 29.2013 17.3597 28.3146C17.1002 27.428 17.6726 26.4744 18.6412 26.1797C19.6098 25.885 20.6012 26.3629 20.8607 27.2495C21.1203 28.1362 20.5479 29.0898 19.5793 29.3844ZM20.6625 24.4014C19.6939 24.696 18.7025 24.2182 18.443 23.3315C18.1834 22.4449 18.7558 21.4913 19.7244 21.1966C20.693 20.9019 21.6844 21.3798 21.944 22.2664C22.2035 23.1531 21.6311 24.1067 20.6625 24.4014ZM21.7457 19.4183C20.7771 19.7129 19.7857 19.2351 19.5262 18.3484C19.2666 17.4618 19.839 16.5082 20.8076 16.2135C21.7763 15.9188 22.7676 16.3967 23.0272 17.2833C23.2867 18.17 22.7143 19.1236 21.7457 19.4183Z" fill="white"/>
    </svg>
  `
  return(
    <SvgXml xml={carXml} width="100%" height="100%" /> 
  );
}

export default CarBuy;