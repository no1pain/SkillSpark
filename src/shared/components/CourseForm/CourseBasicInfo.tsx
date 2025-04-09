import { Box, Typography, Button } from "@mui/material";
import { CourseType } from "@/shared/types/course";
import { COLORS } from "@/shared/constants/colors";
import NumberedBadge from "./NumberedBadge";
import ModernTextField from "./ModernTextField";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState, useEffect } from "react";

interface CourseBasicInfoProps {
  title: string;
  description: string;
  type: CourseType;
  imageUrl?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onImageChange: (file: File | null) => void;
}

const CourseBasicInfo = ({
  title,
  description,
  type,
  imageUrl,
  onChange,
  onImageChange,
}: CourseBasicInfoProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(imageUrl || null);

  useEffect(() => {
    setPreviewUrl(imageUrl || null);
  }, [imageUrl]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onImageChange(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
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
        <NumberedBadge number={4} />
        Basic Information
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <ModernTextField
          name="title"
          label="Title *"
          value={title}
          onChange={onChange}
          fullWidth
          required
          variant="outlined"
          placeholder={`Enter ${type} title`}
        />

        <ModernTextField
          name="description"
          label="Description *"
          value={description}
          onChange={onChange}
          fullWidth
          required
          multiline
          rows={4}
          variant="outlined"
          placeholder={`Provide a detailed description of your ${type}...`}
        />

        <Box>
          <Typography
            variant="subtitle2"
            sx={{ mb: 1, color: COLORS.text.secondary }}
          >
            Cover Image
          </Typography>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="cover-image-upload"
            type="file"
            onChange={handleImageUpload}
          />
          <label htmlFor="cover-image-upload">
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
              {previewUrl ? "Change Cover Image" : "Upload Cover Image"}
            </Button>
          </label>
          {previewUrl && (
            <Box sx={{ mt: 2, position: "relative" }}>
              <Box
                component="img"
                src={previewUrl}
                alt="Cover preview"
                sx={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                  borderRadius: 1,
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  mt: 1,
                  display: "block",
                  color: COLORS.text.secondary,
                  textAlign: "center",
                }}
              >
                Preview
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CourseBasicInfo;
