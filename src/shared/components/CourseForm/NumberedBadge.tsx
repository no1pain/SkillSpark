import { Box } from "@mui/material";

interface NumberedBadgeProps {
  number: number;
}

const NumberedBadge = ({ number }: NumberedBadgeProps) => {
  return (
    <Box
      component="span"
      sx={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        backgroundColor: "#6200ee",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mr: 2,
        fontSize: 16,
        fontWeight: "bold",
        boxShadow: `0 4px 8px rgba(98, 0, 238, 0.25)`,
      }}
    >
      {number}
    </Box>
  );
};

export default NumberedBadge;
