import { Box, Typography, Fade } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import LockIcon from "@mui/icons-material/Lock";
import { COLORS } from "@/shared/constants/colors";

interface VisibilitySelectorProps {
  isPublic: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const VisibilitySelector = ({
  isPublic,
  onChange,
}: VisibilitySelectorProps) => {
  return (
    <Box
      mb={5}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" component="div" align="center" mb={3}>
        <Box
          component="span"
          sx={{ display: "inline-flex", alignItems: "center" }}
        >
          <Box
            component="span"
            sx={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              backgroundColor: COLORS.primary,
              color: COLORS.card.title,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1.5,
              fontSize: 15,
              fontWeight: "bold",
              boxShadow: `0 4px 8px rgba(98, 0, 238, 0.25)`,
            }}
          >
            2
          </Box>
          Is this a Private or Public Course?
        </Box>
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "400px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              overflow: "hidden",
              borderRadius: "16px",
              border: "1px solid rgba(0, 0, 0, 0.06)",
              width: "100%",
              height: 56,
              backgroundColor: "rgba(246, 246, 246, 0.8)",
              backdropFilter: "blur(8px)",
              boxShadow: `0 4px 10px ${COLORS.card.shadow}`,
              transition: "all 0.2s ease",
            }}
          >
            <Box
              onClick={() =>
                onChange({
                  target: { value: "private" },
                } as React.ChangeEvent<HTMLInputElement>)
              }
              sx={{
                flex: 1,
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.15s ease",
                fontWeight: !isPublic ? 600 : 400,
                color: !isPublic ? COLORS.card.title : COLORS.text.secondary,
                zIndex: 1,
                "&:active": {
                  transform: "scale(0.98)",
                },
              }}
            >
              {!isPublic && (
                <Fade in={!isPublic}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 3,
                      left: 3,
                      right: 3,
                      bottom: 3,
                      borderRadius: 12,
                      backgroundColor: COLORS.primary,
                      zIndex: -1,
                    }}
                  />
                </Fade>
              )}
              <Box sx={{ mr: 1, display: "flex" }}>
                <LockIcon sx={{ fontSize: 20 }} />
              </Box>
              Private
            </Box>
            <Box
              onClick={() =>
                onChange({
                  target: { value: "public" },
                } as React.ChangeEvent<HTMLInputElement>)
              }
              sx={{
                flex: 1,
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.15s ease",
                fontWeight: isPublic ? 600 : 400,
                color: isPublic ? COLORS.card.title : COLORS.text.secondary,
                zIndex: 1,
                "&:active": {
                  transform: "scale(0.98)",
                },
              }}
            >
              {isPublic && (
                <Fade in={isPublic}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 3,
                      left: 3,
                      right: 3,
                      bottom: 3,
                      borderRadius: 12,
                      backgroundColor: COLORS.primary,
                      zIndex: -1,
                    }}
                  />
                </Fade>
              )}
              <Box sx={{ mr: 1, display: "flex" }}>
                <PublicIcon sx={{ fontSize: 20 }} />
              </Box>
              Public
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VisibilitySelector;
