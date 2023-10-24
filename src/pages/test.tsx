import { useState, type FC } from "react";
import { Box, Button } from "@chakra-ui/react";

const Test: FC = () => {
  const [color, setColor] = useState("blue");

  return (
    <Box>
      <Button onClick={() => setColor("red")} color={color}>
        Big button please press!
      </Button>
    </Box>
  );
};

export default Test;
