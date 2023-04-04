import { Box } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

// const questionBoxStyle = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   width: "50px",
//   height: "50px",
//   border: "1px solid black",
//   borderRadius: "5px",
// };

function QuestionBox() {
  const questionBoxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "180px",
    height: "50px",
    border: "4px solid black",
    borderRadius: "5px",
    backgroundColor: "#fff0b8",
  };
  return (
    <Box sx={questionBoxStyle}>
      <QuestionMarkIcon sx={{ color: "red" }} />
    </Box>
  );
};

export default QuestionBox;
