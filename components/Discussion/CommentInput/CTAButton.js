import {
  Button,
} from "@chakra-ui/react";

function CTAButton({ disabled, text }) {
  return (
    <Button
      disabled={disabled}
      _hover={{
        background: !disabled ? "#2ea44f" : "#376b39",
        color: "white",
      }}
      _disabled={{
        background: "#376b39",
        color: "white",
      }}
      bgColor={"#2ea44f"}
      color={"white"}
      mt={4}>
        {text}
    </Button>
  );
}

export default CTAButton;
