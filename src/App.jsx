import { Box } from "@mui/material";
import "./App.css";
import SpeechText from "./components/SpeechText";


function App() {
  return (
    <>
      <Box className="container">
        <h2>Speech to Text Convertor</h2>
        <p>
          This program converts your speech to text and can be furhter be used
          anywhere by coping it...
        </p>

        <SpeechText />
      </Box>
    </>
  );
}

export default App;
