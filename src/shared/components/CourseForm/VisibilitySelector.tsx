import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

interface VisibilitySelectorProps {
  isPublic: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const VisibilitySelector = ({
  isPublic,
  onChange,
}: VisibilitySelectorProps) => {
  return (
    <Box mb={6}>
      <Typography variant="h6" component="div" align="center" mb={2}>
        <Box
          component="span"
          sx={{ display: "inline-flex", alignItems: "center" }}
        >
          <Box
            component="span"
            sx={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              backgroundColor: "#4da3ff",
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1.5,
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            2
          </Box>
          Is this a Private or Public Course?
        </Box>
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <RadioGroup
          row
          name="visibility"
          value={isPublic ? "public" : "private"}
          onChange={onChange}
          sx={{
            "& .MuiRadio-root": { display: "none" },
          }}
        >
          <FormControlLabel
            value="private"
            control={<Radio />}
            label=""
            sx={{ margin: 0 }}
            componentsProps={{
              typography: {
                sx: { display: "none" },
              },
            }}
          />
          <Box
            sx={{
              display: "flex",
              overflow: "hidden",
              borderRadius: "30px",
              border: "1px solid #e0e0e0",
              width: 300,
              height: 50,
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
                backgroundColor: !isPublic ? "#4da3ff" : "#f5f5f5",
                color: !isPublic ? "white" : "#666",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontWeight: !isPublic ? 600 : 400,
              }}
            >
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
                backgroundColor: isPublic ? "#4da3ff" : "#f5f5f5",
                color: isPublic ? "white" : "#666",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontWeight: isPublic ? 600 : 400,
              }}
            >
              Public
            </Box>
          </Box>
          <FormControlLabel
            value="public"
            control={<Radio />}
            label=""
            sx={{ margin: 0 }}
            componentsProps={{
              typography: {
                sx: { display: "none" },
              },
            }}
          />
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default VisibilitySelector;
