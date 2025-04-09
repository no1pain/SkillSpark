import React from "react";
import { Box, BoxProps } from "@mui/material";
import { ICON } from "../../constants/colors";
import { IconName } from "../../types";

interface IconProps extends Omit<BoxProps, "color"> {
  name: IconName;
  size?: number | string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = ICON.default,
  sx = {},
  ...rest
}) => {
  return (
    <Box
      component="svg"
      width={size}
      height={size}
      sx={{
        fill: color,
        color: color,
        ...sx,
      }}
      aria-hidden="true"
      {...rest}
    >
      <use xlinkHref={`#icon-${name}`} />
    </Box>
  );
};

export { Icon };
