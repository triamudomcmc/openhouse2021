import React from 'react'
import { motion } from 'framer-motion'

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1
    }
  }
}

export const Home = ({ ...restProps }) => (
  <motion.svg
    width="100%"
    viewBox="0 0 380 198"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    className="block"
    initial="hidden"
    animate="visible"
  >
    <motion.path
      d="M379.893 189.946C379.893 85.0419 294.851 0 189.946 0C85.0419 0 0 85.0419 0 189.946C0 189.947 0 189.946 0 189.946H379.893Z"
      fill="white"
      variants={pathVariants}
    />
    <g clipPath="url(#clip0)">
      <motion.path
        d="M364.238 189.171H363.472C363.472 179.567 359.683 170.357 352.939 163.566C346.194 156.775 337.046 152.96 327.508 152.96C317.97 152.96 308.822 156.775 302.078 163.566C295.333 170.357 291.544 179.567 291.544 189.171H290.779C290.779 179.363 294.648 169.957 301.537 163.021C308.425 156.086 317.767 152.19 327.508 152.19C337.249 152.19 346.592 156.086 353.48 163.021C360.368 169.957 364.238 179.363 364.238 189.171V189.171Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M97.8878 189.171H97.1243C97.1243 179.567 93.3437 170.357 86.6142 163.566C79.8846 156.775 70.7573 152.96 61.2403 152.96C51.7233 152.96 42.596 156.775 35.8665 163.566C29.1369 170.357 25.3563 179.567 25.3563 189.171H24.5928C24.5928 179.363 28.4538 169.957 35.3266 163.021C42.1993 156.086 51.5208 152.19 61.2403 152.19C70.9598 152.19 80.2813 156.086 87.154 163.021C94.0268 169.957 97.8878 179.363 97.8878 189.171V189.171Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M306.244 130.163H299.677V152.724H306.244V130.163Z"
        fill="#748FB7"
        variants={pathVariants}
      />
      <motion.path
        d="M311.298 151.43L294.951 131.927H263.126L243.677 150.727L244.07 150.978H243.929V190.084H311.116V150.978L311.298 151.43Z"
        fill="#748FB7"
        variants={pathVariants}
      />
      <motion.path
        d="M295.203 131.676L275.249 154.894V190.084H311.115V150.477L295.203 131.676Z"
        fill="#DCEEFF"
        variants={pathVariants}
      />
      <motion.path
        d="M299.165 170.455H291.84V176.88H299.165V170.455Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M299.165 159.333H291.84V165.656H299.165V159.333Z"
        fill="#748FB7"
        variants={pathVariants}
      />
      <motion.path
        d="M207.732 120.073L178.762 85.8309H121.805L79.46 125.622V189.915H207.693V119.927L207.732 120.073Z"
        fill="#EEA9A9"
        variants={pathVariants}
      />
      <motion.path
        d="M172.494 46.7484L176.403 43.645C173.366 43.3125 172.118 44.9564 171.608 46.2576C169.235 45.2797 166.652 46.5612 166.652 46.5612L174.474 49.3796C174.08 48.3335 173.393 47.4208 172.494 46.7484Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M242.645 55.0092L246.554 51.9059C243.517 51.5733 242.269 53.2173 241.758 54.5184C239.386 53.5406 236.803 54.8221 236.803 54.8221L244.625 57.6405C244.23 56.5944 243.543 55.6816 242.645 55.0092V55.0092Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M225.877 78.6491L229.787 75.5458C226.75 75.2132 225.502 76.8571 224.991 78.1583C222.618 77.1805 220.035 78.462 220.035 78.462L227.857 81.2804C227.463 80.2343 226.776 79.3215 225.877 78.6491V78.6491Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M190.303 82.625H183.736V105.186H190.303V82.625Z"
        fill="#EEA9A9"
        variants={pathVariants}
      />
      <motion.path
        d="M256.732 109.448H250.165V132.009H256.732V109.448Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M256.732 107.192H250.165V129.753H256.732V107.192Z"
        fill="#A38BCC"
        variants={pathVariants}
      />
      <motion.path
        d="M266.655 135.967L244.239 109.543H200.257L173.38 135.525L173.923 135.872H173.729V189.915H266.579V135.872L266.655 135.967Z"
        fill="#A38BCC"
        variants={pathVariants}
      />
      <motion.path
        d="M244.587 109.197L217.012 141.283V189.916H266.578V135.18L244.587 109.197Z"
        fill="#E9DCFF"
        variants={pathVariants}
      />
      <motion.path
        d="M179.214 85.3822L143.503 126.935V189.915H207.693V119.03L179.214 85.3822Z"
        fill="#FFDCDC"
        variants={pathVariants}
      />
      <motion.path
        d="M114.605 188.769C114.605 188.769 114.762 185.504 117.982 185.883Z"
        fill="#E6E6E6"
        variants={pathVariants}
      />
      <motion.path
        d="M113.697 185.662C114.586 185.662 115.308 184.946 115.308 184.063C115.308 183.18 114.586 182.464 113.697 182.464C112.807 182.464 112.085 183.18 112.085 184.063C112.085 184.946 112.807 185.662 113.697 185.662Z"
        fill="#9CA3AF"
        variants={pathVariants}
      />
      <motion.path
        d="M113.889 186.755H113.434V189.915H113.889V186.755Z"
        fill="#E6E6E6"
        variants={pathVariants}
      />
      <motion.path
        d="M129.003 188.769C129.003 188.769 129.16 185.504 132.379 185.883Z"
        fill="#E6E6E6"
        variants={pathVariants}
      />
      <motion.path
        d="M128.094 185.662C128.983 185.662 129.705 184.946 129.705 184.063C129.705 183.18 128.983 182.464 128.094 182.464C127.204 182.464 126.482 183.18 126.482 184.063C126.482 184.946 127.204 185.662 128.094 185.662Z"
        fill="#9CA3AF"
        variants={pathVariants}
      />
      <motion.path
        d="M128.286 186.755H127.831V189.915H128.286V186.755Z"
        fill="#E6E6E6"
        variants={pathVariants}
      />
      <motion.path
        d="M211.596 188.769C211.596 188.769 211.753 185.504 214.972 185.883Z"
        fill="#E6E6E6"
        variants={pathVariants}
      />
      <motion.path
        d="M210.687 185.662C211.577 185.662 212.298 184.946 212.298 184.063C212.298 183.18 211.577 182.464 210.687 182.464C209.797 182.464 209.076 183.18 209.076 184.063C209.076 184.946 209.797 185.662 210.687 185.662Z"
        fill="#9CA3AF"
        variants={pathVariants}
      />
      <motion.path
        d="M210.881 186.755H210.426V189.915H210.881V186.755Z"
        fill="#E6E6E6"
        variants={pathVariants}
      />
      <motion.path
        d="M272.469 188.769C272.469 188.769 272.626 185.504 275.845 185.883Z"
        fill="#E6E6E6"
        variants={pathVariants}
      />
      <motion.path
        d="M271.559 185.662C272.449 185.662 273.17 184.946 273.17 184.063C273.17 183.18 272.449 182.464 271.559 182.464C270.67 182.464 269.948 183.18 269.948 184.063C269.948 184.946 270.67 185.662 271.559 185.662Z"
        fill="#9CA3AF"
        variants={pathVariants}
      />
      <motion.path
        d="M271.752 186.755H271.297V189.915H271.752V186.755Z"
        fill="#E6E6E6"
        variants={pathVariants}
      />
      <motion.path
        d="M94.9038 188.769C94.9038 188.769 95.0608 185.504 98.2799 185.883Z"
        fill="#E6E6E6"
        variants={pathVariants}
      />
      <motion.path
        d="M93.9944 185.662C94.8842 185.662 95.6055 184.946 95.6055 184.063C95.6055 183.18 94.8842 182.464 93.9944 182.464C93.1046 182.464 92.3833 183.18 92.3833 184.063C92.3833 184.946 93.1046 185.662 93.9944 185.662Z"
        fill="#9CA3AF"
        variants={pathVariants}
      />
      <motion.path
        d="M94.1882 186.755H93.7334V189.915H94.1882V186.755Z"
        fill="#E6E6E6"
        variants={pathVariants}
      />
      <motion.path
        d="M111.371 115.832L105.717 123.597L105.17 108.197L104.494 130.934L99.2827 123.778L104.447 132.505L102.736 189.998H108.074L105.777 125.286L111.371 115.832Z"
        fill="#7F7F7F"
        variants={pathVariants}
      />
      <motion.path
        d="M85.9888 92.8247L78.5803 102.998L77.8638 82.8215L76.9776 112.611L70.1504 103.236L76.9165 114.67L74.6757 189.997H81.669L78.6588 105.211L85.9888 92.8247Z"
        fill="#7F7F7F"
        variants={pathVariants}
      />
      <motion.path
        d="M164.864 135.181H151.755V148.484H164.864V135.181Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M164.864 153.283H151.755V166.586H164.864V153.283Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M182.995 135.181H169.885V148.484H182.995V135.181Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M182.995 153.283H169.885V166.586H182.995V153.283Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M201.124 135.181H188.015V148.484H201.124V135.181Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M201.124 153.283H188.015V166.586H201.124V153.283Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M240.044 162.175H229.921V171.901H240.044V162.175Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M240.044 147.651H229.921V157.377H240.044V147.651Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M254.85 162.175H244.728V171.901H254.85V162.175Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M254.85 147.651H244.728V157.377H254.85V147.651Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M299.166 170.455H291.841V176.88H299.166V170.455Z"
        fill="#748FB7"
        variants={pathVariants}
      />
      <motion.path
        d="M164.865 135.181H151.755V148.484H164.865V135.181Z"
        fill="#EEA9A9"
        variants={pathVariants}
      />
      <motion.path
        d="M164.864 153.283H151.755V166.586H164.864V153.283Z"
        fill="#EEA9A9"
        variants={pathVariants}
      />
      <motion.path
        d="M182.995 135.181H169.885V148.485H182.995V135.181Z"
        fill="#EEA9A9"
        variants={pathVariants}
      />
      <motion.path
        d="M182.995 153.283H169.885V166.586H182.995V153.283Z"
        fill="#EEA9A9"
        variants={pathVariants}
      />
      <motion.path
        d="M201.124 135.181H188.015V148.485H201.124V135.181Z"
        fill="#EEA9A9"
        variants={pathVariants}
      />
      <motion.path
        d="M201.124 153.283H188.015V166.586H201.124V153.283Z"
        fill="#EEA9A9"
        variants={pathVariants}
      />
      <motion.path
        d="M240.044 162.175H229.921V171.901H240.044V162.175Z"
        fill="#A38BCC"
        variants={pathVariants}
      />
      <motion.path
        d="M240.044 147.651H229.921V157.377H240.044V147.651Z"
        fill="#A38BCC"
        variants={pathVariants}
      />
      <motion.path
        d="M254.85 162.175H244.728V171.901H254.85V162.175Z"
        fill="#A38BCC"
        variants={pathVariants}
      />
      <motion.path
        d="M254.85 147.651H244.728V157.377H254.85V147.651Z"
        fill="#A38BCC"
        variants={pathVariants}
      />
      <motion.path
        d="M304.766 171.012C310.323 171.012 314.828 166.503 314.828 160.941C314.828 155.379 310.323 150.87 304.766 150.87C299.209 150.87 294.705 155.379 294.705 160.941C294.705 166.503 299.209 171.012 304.766 171.012Z"
        fill="#7F7F7F"
        variants={pathVariants}
      />
      <motion.path
        opacity="0.2"
        d="M312.281 154.337C313.219 156.521 313.346 158.967 312.64 161.236C311.933 163.506 310.44 165.451 308.425 166.725C306.411 167.999 304.007 168.518 301.644 168.19C299.28 167.862 297.111 166.708 295.523 164.934C296.096 166.268 296.954 167.463 298.037 168.435C299.12 169.407 300.402 170.133 301.795 170.563C303.187 170.992 304.657 171.115 306.102 170.923C307.547 170.731 308.933 170.229 310.164 169.45C311.394 168.672 312.44 167.637 313.229 166.416C314.018 165.195 314.531 163.819 314.732 162.381C314.934 160.943 314.819 159.479 314.395 158.09C313.972 156.701 313.25 155.42 312.281 154.337V154.337Z"
        fill="black"
        variants={pathVariants}
      />
      <motion.path
        d="M304.849 160.941H304.875L305.34 189.502H304.358L304.849 160.941Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M306.597 176.484L306.368 176.044L304.722 176.918L304.951 177.358L306.597 176.484Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M334.052 161.436C342.41 161.436 349.186 154.599 349.186 146.165C349.186 137.731 342.41 130.893 334.052 130.893C325.694 130.893 318.919 137.731 318.919 146.165C318.919 154.599 325.694 161.436 334.052 161.436Z"
        fill="#7F7F7F"
        variants={pathVariants}
      />
      <motion.path
        opacity="0.2"
        d="M345.199 136.011C346.606 139.342 346.797 143.071 345.738 146.532C344.678 149.992 342.438 152.958 339.416 154.901C336.394 156.843 332.789 157.635 329.244 157.134C325.698 156.634 322.445 154.874 320.063 152.169C320.923 154.204 322.209 156.026 323.834 157.508C325.458 158.99 327.381 160.097 329.47 160.752C331.559 161.407 333.764 161.594 335.931 161.302C338.099 161.009 340.178 160.242 342.024 159.056C343.87 157.869 345.439 156.291 346.622 154.429C347.806 152.568 348.575 150.469 348.877 148.277C349.179 146.085 349.007 143.852 348.371 141.734C347.736 139.617 346.654 137.664 345.199 136.011V136.011Z"
        fill="black"
        variants={pathVariants}
      />
      <motion.path
        d="M334.052 146.247H334.09L334.788 189.502H333.315L334.052 146.247Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M336.83 169.73L336.481 169.062L333.978 170.391L334.327 171.06L336.83 169.73Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M34.7367 170.681C40.2485 170.681 44.7167 166.172 44.7167 160.61C44.7167 155.048 40.2485 150.54 34.7367 150.54C29.225 150.54 24.7568 155.048 24.7568 160.61C24.7568 166.172 29.225 170.681 34.7367 170.681Z"
        fill="#7F7F7F"
        variants={pathVariants}
      />
      <motion.path
        d="M34.9 160.61H34.926L35.3908 189.172H34.4092L34.9 160.61Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M36.6288 176.098L36.3994 175.658L34.7534 176.533L34.9828 176.972L36.6288 176.098Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M79.7854 33.7232L83.3273 30.8857C80.5758 30.5816 79.4452 32.0847 78.9825 33.2744C76.8328 32.3803 74.4927 33.5521 74.4927 33.5521L81.5795 36.129C81.222 35.1725 80.5996 34.3379 79.7854 33.7232V33.7232Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M309.978 48.4165L313.52 45.579C310.768 45.275 309.638 46.7781 309.175 47.9678C307.025 47.0737 304.685 48.2454 304.685 48.2454L311.772 50.8223C311.414 49.8659 310.792 49.0313 309.978 48.4165V48.4165Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M65.168 180.917H41.4453V181.703H45.1449V189.172H45.9102V181.703H60.3206V189.172H61.0858V181.703H65.168V180.917Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M179.89 184.164C178.949 184.164 178.024 184.412 177.21 184.884C176.382 184.135 175.356 183.642 174.254 183.466C173.153 183.29 172.024 183.437 171.005 183.891C169.986 184.345 169.12 185.086 168.513 186.023C167.906 186.961 167.583 188.054 167.584 189.172H185.254C185.157 187.812 184.551 186.54 183.555 185.611C182.56 184.682 181.25 184.165 179.89 184.164V184.164Z"
        fill="#7F7F7F"
        variants={pathVariants}
      />
      <motion.path
        d="M239.164 184.164C238.232 184.164 237.316 184.412 236.509 184.884C235.689 184.135 234.672 183.642 233.581 183.466C232.489 183.29 231.371 183.437 230.361 183.891C229.352 184.345 228.494 185.086 227.892 186.023C227.291 186.961 226.971 188.054 226.973 189.172H244.478C244.383 187.812 243.782 186.54 242.796 185.611C241.81 184.682 240.512 184.165 239.164 184.164V184.164Z"
        fill="#7F7F7F"
        variants={pathVariants}
      />
      <motion.path
        d="M317.153 184.164C316.212 184.164 315.288 184.412 314.473 184.884C313.646 184.135 312.619 183.642 311.518 183.466C310.416 183.29 309.288 183.437 308.268 183.891C307.249 184.345 306.384 185.086 305.776 186.023C305.169 186.961 304.847 188.054 304.848 189.172H322.517C322.421 187.812 321.814 186.54 320.819 185.611C319.824 184.682 318.514 184.165 317.153 184.164V184.164Z"
        fill="#7F7F7F"
        variants={pathVariants}
      />
      <motion.path
        d="M354.506 184.164C353.573 184.164 352.658 184.412 351.85 184.884C351.031 184.135 350.014 183.642 348.922 183.466C347.831 183.29 346.713 183.437 345.703 183.891C344.693 184.345 343.836 185.086 343.234 186.023C342.633 186.961 342.313 188.054 342.314 189.172H359.82C359.725 187.812 359.123 186.54 358.137 185.611C357.151 184.682 355.854 184.165 354.506 184.164V184.164Z"
        fill="#7F7F7F"
        variants={pathVariants}
      />
      <motion.path
        d="M73.8381 162.096H67.7847V168.292H70.5908V189.171H71.3475V168.292H73.8381V162.096Z"
        fill="#7F7F7F"
        variants={pathVariants}
      />
      <motion.path
        d="M65.168 178.77H41.4453V179.431H65.168V178.77Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M65.168 176.79H41.4453V177.615H65.168V176.79Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        d="M65.168 174.808H41.4453V175.469H65.168V174.808Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
      <motion.path
        opacity="0.2"
        d="M42.1898 153.841C43.1199 156.047 43.2461 158.517 42.5458 160.809C41.8455 163.101 40.3644 165.066 38.3671 166.352C36.3698 167.638 33.9864 168.163 31.643 167.831C29.2995 167.5 27.1487 166.334 25.5747 164.543C26.1429 165.891 26.9933 167.097 28.0669 168.079C29.1406 169.06 30.4118 169.794 31.7927 170.227C33.1735 170.661 34.6308 170.786 36.0637 170.592C37.4965 170.398 38.8707 169.89 40.091 169.104C41.3112 168.318 42.3484 167.273 43.1305 166.04C43.9127 164.807 44.4213 163.417 44.6209 161.965C44.8206 160.513 44.7066 159.034 44.2868 157.632C43.867 156.229 43.1515 154.935 42.1899 153.841H42.1898Z"
        fill="black"
        variants={pathVariants}
      />
      <motion.path
        d="M365.211 189.19H25.73V190.015H365.211V189.19Z"
        fill="#3F3D56"
        variants={pathVariants}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="350.613"
          height="189.859"
          fill="white"
          transform="translate(13.6323 7.56787)"
        />
      </clipPath>
    </defs>
  </motion.svg>
)
