import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Rating,
  SxProps,
  Theme,
} from "@mui/material";
import { TechLogo } from "../TechLogo";
import {
  getGradientByCategory,
  getLogoColor,
} from "@/shared/utils/categoryUtils";

interface Course {
  title: string;
  description?: string;
  category: string;
  isFeatured?: boolean;
  difficulty?: string;
  author?: string;
  price: number;
  rating?: number;
  instructor?: string;
  level?: string;
  progress?: number;
  imageUrl?: string;
}

interface CourseCardProps {
  course: Course;
  variant?: "enrolled" | "recommended" | "featured";
  onEnroll?: () => void;
  onContinue?: () => void;
}

export const CourseCard = ({
  course,
  variant = "recommended",
  onEnroll,
  onContinue,
}: CourseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const isEnrolled = variant === "enrolled";
  const isFeatured = variant === "featured" || course.isFeatured;

  let buttonText = "Explore Course";
  let buttonVariant: "outlined" | "contained" = "outlined";
  let buttonAction = onEnroll;

  if (isEnrolled) {
    buttonText = "Continue Learning";
    buttonVariant = "contained";
    buttonAction = onContinue;
  } else if (isFeatured) {
    buttonText = "View Course";
  }

  const getButtonStyles = (): SxProps<Theme> => {
    if (isEnrolled) {
      return {
        mt: 2,
        backgroundColor: "rgba(77, 163, 255, 0.8)",
        color: "white",
        "&:hover": {
          backgroundColor: "rgba(77, 163, 255, 1)",
        },
        textTransform: "none",
        borderRadius: "6px",
        boxShadow: "0 4px 10px rgba(77, 163, 255, 0.25)",
      };
    } else if (isFeatured) {
      return {
        mt: 2,
        borderColor: "rgba(255, 180, 0, 0.5)",
        color: "rgba(255, 180, 0, 0.9)",
        "&:hover": {
          borderColor: "rgba(255, 180, 0, 0.8)",
          backgroundColor: "rgba(255, 180, 0, 0.1)",
        },
        textTransform: "none",
        borderRadius: "6px",
      };
    } else {
      return {
        mt: 2,
        borderColor: "rgba(255, 255, 255, 0.2)",
        color: "white",
        "&:hover": {
          borderColor: "rgba(255, 255, 255, 0.3)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        },
        textTransform: "none",
        borderRadius: "6px",
      };
    }
  };

  const formatPrice = (price: number): string => {
    try {
      return price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      });
    } catch (error) {
      return "$0.00";
    }
  };

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
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
            background: course.imageUrl
              ? `url(${course.imageUrl}) center/cover no-repeat`
              : getGradientByCategory(course.category || ""),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.6s ease",
            ...(isHovered && {
              transform: "scale(1.05)",
            }),
          }}
        >
          {!course.imageUrl && (
            <TechLogo
              color={getLogoColor(course.category || "")}
              size={100}
              outerRingCount={3}
            />
          )}
        </Box>
        <Chip
          label={course.category || "Other"}
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
        {isFeatured && !isEnrolled && (
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
        )}
        {typeof course.progress === "number" && (
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "4px",
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: `${course.progress}%`,
                backgroundColor: "#4da3ff",
                transition: "width 0.3s ease",
              }}
            />
          </Box>
        )}
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
            sx={{
              fontSize: "1rem",
              lineHeight: 1.2,
              mb: 1,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              height: "2.4em",
            }}
          >
            {course.title || "Untitled Course"}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Typography
              variant="body2"
              color="rgba(255, 255, 255, 0.6)"
              fontSize="0.8rem"
              sx={{ mr: 1 }}
            >
              {course.instructor || course.author || "Unknown Instructor"}
            </Typography>
            {course.level && (
              <Chip
                label={course.level}
                size="small"
                sx={{
                  height: 18,
                  fontSize: "0.6rem",
                  backgroundColor:
                    course.level === "Beginner"
                      ? "rgba(77, 163, 255, 0.2)"
                      : course.level === "Intermediate"
                      ? "rgba(132, 94, 247, 0.2)"
                      : "rgba(255, 76, 96, 0.2)",
                  color:
                    course.level === "Beginner"
                      ? "#4da3ff"
                      : course.level === "Intermediate"
                      ? "#845ef7"
                      : "#ff4c60",
                }}
              />
            )}
          </Box>
          {course.rating && (
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Rating
                value={course.rating}
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
                {course.rating.toFixed(1)}
              </Typography>
            </Box>
          )}

          {course.description && variant === "featured" && (
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
              {course.description}
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
            {formatPrice(course.price)}
          </Typography>
          <Button
            fullWidth
            variant={buttonVariant}
            onClick={buttonAction}
            sx={getButtonStyles()}
          >
            {buttonText}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
