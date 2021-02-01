import { Button } from "@chakra-ui/react";
import React from "react";

function CustomButton({
    title,
    bgColor,
    color,
    borderRadius = "1000px",
    type = "button",
}) {
    return (
        <Button
            type={type}
            w={["10rem", "12rem", "12rem", "12rem"]}
            bgColor={bgColor}
            color={color}
            px="3rem"
            py={["1rem", "1.5rem", "1.5rem", "1.5rem"]}
            m="0.5rem"
            fontSize={["1rem", "1.2rem", "1.2rem", "1.2rem"]}
            border="1px solid"
            borderColor="silver.400"
            borderRadius={borderRadius}
            _hover={{
                bgColor:
                    bgColor === "tomato.400" ? "transparent" : "tomato.400",
                color: bgColor === "tomato.400" ? "tomato.400" : "white",
            }}
        >
            {title}
        </Button>
    );
}

export default CustomButton;
