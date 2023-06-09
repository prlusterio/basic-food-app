import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CartIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color}
      d="M18.919 28.25a1.875 1.875 0 1 1-1.875-1.875 1.885 1.885 0 0 1 1.875 1.875Zm7.875-1.875a1.875 1.875 0 1 0 1.875 1.875 1.885 1.885 0 0 0-1.875-1.875Zm4.622-11.316-2.269 7.913a2.634 2.634 0 0 1-2.522 1.903h-9.412a2.634 2.634 0 0 1-2.522-1.903l-2.26-7.894c0-.01-.009-.028-.009-.037l-.834-2.916h-.92a1.125 1.125 0 1 1 0-2.25h1.2a1.903 1.903 0 0 1 1.81 1.36l.675 2.39h15.975a1.134 1.134 0 0 1 1.088 1.434Zm-2.578.816H15l1.847 6.478a.384.384 0 0 0 .366.272h9.412a.385.385 0 0 0 .366-.272l1.847-6.478Z"
    />
  </Svg>
)
export default CartIcon
