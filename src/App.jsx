import { Box } from "@mui/material";
import "./App.css";

function App() {
  return (
    <>
      <Box
        className="container"
        sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}
      >
        <h2>Speech to Text Convertor</h2>
        <br />
        <p>
          This program converts your speech to text and can be furhter be used
          anywhere by coping it...
        </p>
      </Box>
    </>
  );
}

export default App;
