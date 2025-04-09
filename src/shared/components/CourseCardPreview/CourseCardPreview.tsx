import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Rating,
} from "@mui/material";
import { getGradientByCategory } from "@/shared/utils/gradientUtils";

interface CourseCardPreviewProps {
  title: string;
  category: string;
  level: string;
  price: number;
  type: string;
  author: string;
  description?: string;
  imageUrl?: string;
}

export const CourseCardPreview = ({
  title,
  category,
  level,
  price,
  type,
  author,
  description,
  imageUrl,
}: CourseCardPreviewProps) => {
  const displayImage = imageUrl || "";

  return (
    <Card
      sx={{
        backgroundColor: "rgba(40, 40, 40, 0.6)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        borderRadius: 2,
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{ position: "relative", paddingTop: "66.67%", overflow: "hidden" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: displayImage
              ? `url(${displayImage}) center/cover no-repeat`
              : getGradientByCategory(category),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!displayImage && (
            <Typography
              variant="h4"
              color="white"
              fontWeight="bold"
              align="center"
            >
              {type === "course" ? "📹" : "📚"}
            </Typography>
          )}
        </Box>
        <Chip
          label={category || "Other"}
          size="small"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            borderRadius: "4px",
            fontSize: "0.7rem",
          }}
        />
        <Chip
          label="Featured"
          size="small"
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            backgroundColor: "rgba(255, 180, 0, 0.9)",
            color: "black",
            borderRadius: "4px",
            fontSize: "0.7rem",
            fontWeight: "bold",
          }}
        />
      </Box>
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Box>
          <Typography
            variant="subtitle1"
            color="white"
            fontWeight="medium"
            gutterBottom
          >
            {title || `Your ${type === "course" ? "Course" : "Book"} Title`}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Typography
              variant="body2"
              color="rgba(255, 255, 255, 0.6)"
              fontSize="0.8rem"
              sx={{ mr: 1 }}
            >
              {author || "Your Name"}
            </Typography>
            {level && (
              <Chip
                label={level}
                size="small"
                sx={{
                  height: 18,
                  fontSize: "0.6rem",
                  backgroundColor:
                    level === "Beginner"
                      ? "rgba(77, 163, 255, 0.2)"
                      : level === "Intermediate"
                      ? "rgba(132, 94, 247, 0.2)"
                      : "rgba(255, 76, 96, 0.2)",
                  color:
                    level === "Beginner"
                      ? "#4da3ff"
                      : level === "Intermediate"
                      ? "#845ef7"
                      : "#ff4c60",
                }}
              />
            )}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Rating
              value={5}
              precision={0.5}
              readOnly
              size="small"
              sx={{
                color: "#FFD700",
                mr: 1,
              }}
            />
            <Typography
              variant="body2"
              color="rgba(255, 255, 255, 0.6)"
              fontSize="0.75rem"
            >
              5.0
            </Typography>
          </Box>

          {description && (
            <Typography
              variant="body2"
              color="rgba(255, 255, 255, 0.8)"
              sx={{
                mb: 1,
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: 1.2,
              }}
            >
              {description}
            </Typography>
          )}
        </Box>

        <Box>
          <Typography
            variant="h6"
            color="white"
            fontWeight="bold"
            sx={{ mb: 1 }}
          >
            ${price.toFixed(2)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
