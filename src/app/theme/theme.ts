import { createTheme } from "@mui/material";
import { COLORS } from "@/shared/constants/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary,
      light: COLORS.primaryLight,
      dark: COLORS.primaryDark,
    },
    text: {
      primary: COLORS.text.primary,
      secondary: COLORS.text.secondary,
    },
    background: {
      default: COLORS.background.main,
      paper: COLORS.background.light,
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
      color: COLORS.text.primary,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      color: COLORS.text.primary,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      color: COLORS.text.primary,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: COLORS.text.primary,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
      color: COLORS.text.primary,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
      color: COLORS.text.primary,
    },
    body1: {
      fontSize: "1rem",
      color: COLORS.text.primary,
    },
    body2: {
      fontSize: "0.875rem",
      color: COLORS.text.secondary,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          padding: "8px 16px",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: `0 4px 12px ${COLORS.paper.shadow}`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: `0 6px 16px ${COLORS.card.shadow}`,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          color: COLORS.chip.text,
          backgroundColor: COLORS.chip.background,
        },
      },
    },
  },
});
