import { Box, Typography, Button } from "@mui/material";
import { CourseType } from "./CourseTypeSelector";
import { COLORS } from "@/shared/constants/colors";
import NumberedBadge from "./NumberedBadge";
import ModernTextField from "./ModernTextField";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

interface PricingInfoProps {
  price: string;
  duration: string;
  type: CourseType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFileChange?: (file: File | null) => void;
}

const PricingInfo = ({
  price,
  duration,
  type,
  onChange,
  onFileChange,
}: PricingInfoProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (onFileChange) {
      onFileChange(file);
    }
  };

  return (
    <Box
      sx={{
        background: "#fff",
        borderRadius: 4,
        p: 3,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
        mt: 3,
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontSize: "1.1rem",
          fontWeight: 600,
          color: COLORS.text.primary,
          mb: 3,
          display: "flex",
          alignItems: "center",
        }}
      >
        <NumberedBadge number={5} />
        Pricing Information
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <ModernTextField
          name="price"
          label="Price (USD) *"
          value={price}
          onChange={onChange}
          fullWidth
          required
          type="number"
          variant="outlined"
          placeholder="e.g., 49.99"
          InputProps={{ inputProps: { min: 0, step: 0.01 } }}
        />

        <ModernTextField
          name="duration"
          label={`${type === "course" ? "Duration (in hours)" : "Pages"} *`}
          value={duration}
          onChange={onChange}
          fullWidth
          required
          type="number"
          variant="outlined"
          placeholder={type === "course" ? "e.g., 8" : "e.g., 350"}
          InputProps={{ inputProps: { min: 1 } }}
        />

        {type === "book" && (
          <Box
            sx={{
              mt: 2,
              p: 3,
              border: "2px dashed #e0e0e0",
              borderRadius: 2,
              backgroundColor: "#f8f8f8",
              textAlign: "center",
            }}
          >
            <input
              type="file"
              accept=".pdf,.epub,.mobi"
              onChange={handleFileChange}
              style={{ display: "none" }}
              id="book-content-upload"
            />
            <label htmlFor="book-content-upload">
              <Button
                component="span"
                variant="outlined"
                startIcon={<CloudUploadIcon />}
                sx={{
                  color: COLORS.primary,
                  borderColor: COLORS.primary,
                  "&:hover": {
                    borderColor: COLORS.primary,
                    backgroundColor: "rgba(98, 0, 238, 0.04)",
                  },
                }}
              >
                Upload Book Content
              </Button>
            </label>
            <Typography
              variant="caption"
              sx={{
                display: "block",
                mt: 1,
                color: "text.secondary",
              }}
            >
              Supported formats: PDF, EPUB, MOBI
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PricingInfo;
