import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import { CategoryTabs } from "@/components/CategoryNavigation";
import { Box, Container } from "@mui/material";

const OverviewPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        bgcolor: "transparent",
      }}
    >
      <Header />

      <Box component="main" sx={{ flexGrow: 1, width: "100%" }}>
        <Container maxWidth="xl" sx={{ py: 6 }}>
          <Hero />

          <CategoryTabs />
        </Container>
      </Box>
    </Box>
  );
};

export default OverviewPage;
