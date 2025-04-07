import { Box, InputBase, InputBaseProps, SxProps, Theme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchInputProps extends Omit<InputBaseProps, "sx"> {
  placeholder?: string;
  width?: string | number;
  maxWidth?: string | number;
  sx?: SxProps<Theme>;
}

export const SearchInput = ({
  placeholder = "Search for anything",
  width = "100%",
  maxWidth = "600px",
  sx = {},
  ...props
}: SearchInputProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width,
        maxWidth,
        height: "44px",
        backgroundColor: "#f1f1f1",
        borderRadius: "50px",
        padding: "0 16px",
        border: "1px solid #e0e0e0",
        transition: "all 0.2s ease",
        "&:hover": {
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        },
        "&:focus-within": {
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          border: "1px solid #d0d0d0",
        },
        ...sx,
      }}
    >
      <SearchIcon
        sx={{
          color: "#606060",
          marginRight: 1,
          fontSize: "20px",
        }}
      />
      <InputBase
        placeholder={placeholder}
        fullWidth
        sx={{
          fontSize: "14px",
          color: "#303030",
          "& .MuiInputBase-input": {
            padding: "0",
            height: "42px",
            "&::placeholder": {
              color: "#909090",
              opacity: 1,
            },
          },
        }}
        {...props}
      />
    </Box>
  );
};
