import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function gridSVG(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_22_33)" fill="#fff">
        <Path d="M4.14 12.025H.52v3.62h3.62v-3.62zM4.14 6.336H.52v3.62h3.62v-3.62zM4.14.645H.52v3.621h3.62V.646zM9.831 12.025h-3.62v3.62h3.62v-3.62zM9.831 6.336h-3.62v3.62h3.62v-3.62zM9.831.645h-3.62v3.621h3.62V.646zM15.52 12.025H11.9v3.62h3.62v-3.62zM15.52 6.336H11.9v3.62h3.62v-3.62zM15.52.645H11.9v3.621h3.62V.646z" />
      </G>
      <Defs>
        <ClipPath id="clip0_22_33">
          <Path fill="#fff" transform="translate(.52 .645)" d="M0 0H15V15H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default gridSVG
