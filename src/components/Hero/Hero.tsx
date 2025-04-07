import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box sx={{ textAlign: "center", mb: 6 }}>
      <Typography
        variant="h2"
        component="h1"
        color="#333333"
        fontWeight="bold"
        gutterBottom
      >
        All the skills you need in one place
      </Typography>
      <Typography variant="h6" color="rgba(0, 0, 0, 0.6)" fontWeight="normal">
        Learn any skill, anytime, anywhere
      </Typography>
    </Box>
  );
};

export default Hero;
