import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

function CustomSession(props) {
    const { isMobile, textSide = "right", image, content } = props;

    function _flexDirection() {
        if (isMobile) return "column";
        if (textSide === "left") return "row-reverse";
    }

    return (
        <Box m="auto" w={["100vw", "100vw", "100vw", "65vw"]}>
            <Flex
                flexDir={_flexDirection()}
                justifyContent="space-around"
                p="2rem"
            >
                <Box flex="1" py="2rem">
                    <Image
                        src={image}
                        w={["15rem", "18rem", "18rem", "18rem"]}
                        mx="auto"
                        borderRadius="30px"
                        bgColor="silver.200"
                        boxShadow="12px 0px 32px 22px #f3f3f3"
                    />
                </Box>
                <VStack
                    flex="1"
                    justifyContent="center"
                    alignItems="left"
                    spacing="1.5rem"
                    py="2rem"
                    px={[2, 6, 8, 8]}
                >
                    <Text
                        fontSize={["sm", "md", "xl", "xl"]}
                        color="tomato.400"
                        fontWeight="700"
                    >
                        {content.title}
                    </Text>
                    <Heading fontSize={["2xl", "3xl", "4xl", "5xl"]}>
                        {content.heading}
                    </Heading>
                    <Text
                        fontSize={["sm", "md", "xl", "xl"]}
                        color="silver.400"
                    >
                        {content.description}
                    </Text>
                </VStack>
            </Flex>
        </Box>
    );
}

export default CustomSession;
