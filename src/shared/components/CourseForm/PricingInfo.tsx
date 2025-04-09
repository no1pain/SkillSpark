import { Box, Typography, Button } from "@mui/material";
import { CourseType } from "@/shared/types/course";
import { COLORS } from "@/shared/constants/colors";
import NumberedBadge from "./NumberedBadge";
import ModernTextField from "./ModernTextField";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useState, useEffect, useMemo } from "react";

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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const pdfUrl = useMemo(() => {
    if (!selectedFile) return null;
    return URL.createObjectURL(selectedFile);
  }, [selectedFile]);

  useEffect(() => {
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
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
        Pricing & Content
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

        <Box>
          <Typography
            variant="subtitle2"
            sx={{ mb: 1, color: COLORS.text.secondary }}
          >
            Upload PDF *
          </Typography>
          <input
            accept="application/pdf"
            style={{ display: "none" }}
            id="pdf-upload"
            type="file"
            onChange={handleFileUpload}
          />
          <label htmlFor="pdf-upload">
            <Button
              variant="outlined"
              component="span"
              startIcon={<CloudUploadIcon />}
              sx={{
                width: "100%",
                py: 1.5,
                border: "1px dashed",
                borderColor: "rgba(0, 0, 0, 0.23)",
                "&:hover": {
                  borderColor: "primary.main",
                },
              }}
            >
              {selectedFile ? "Change PDF" : "Upload PDF"}
            </Button>
          </label>

          {selectedFile && pdfUrl && (
            <Box
              sx={{
                mt: 2,
                p: 2,
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: 1,
                backgroundColor: "rgba(0, 0, 0, 0.02)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <PictureAsPdfIcon sx={{ color: "#f40f02" }} />
                <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {selectedFile.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  mt: 2,
                  width: "100%",
                  height: "300px",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: 1,
                  overflow: "hidden",
                }}
              >
                <iframe
                  src={pdfUrl}
                  width="100%"
                  height="100%"
                  title="PDF Preview"
                  style={{ border: "none" }}
                />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default PricingInfo;
