import { Box, Button } from "@mui/material";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "/src/App.css";
import "regenerator-runtime/runtime";

const SpeechText = () => {
  const startListening = () =>
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-IN",
    });

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <Box>
      <Box className="main-content">{transcript}</Box>
      <Box
        className="btn-style"
        sx={{
          mt: "1rem",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Button>Copy</Button>
        <Button onClick={startListening}>Start Listening</Button>
        <Button onClick={SpeechRecognition.stopListening}>
          Stop Listening
        </Button>
      </Box>
    </Box>
  );
};

export default SpeechText;
