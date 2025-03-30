import React from "react";
import { Box, BoxProps } from "@mui/material";
import { ICON } from "../../styles/colors";

export type IconName = "logo" | "visibility" | "visibility-off" | "apple";

interface IconProps extends Omit<BoxProps, "color"> {
  name: IconName;
  size?: number | string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = ICON.DEFAULT,
  sx = {},
  ...rest
}) => {
  return (
    <Box
      component="svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      sx={{
        fill: color,
        ...sx,
      }}
      aria-hidden="true"
      {...rest}
    >
      <use xlinkHref={`#icon-${name}`} />
    </Box>
  );
};

export default Icon;
