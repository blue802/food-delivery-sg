import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import bgSession from "../../asset/images/bg-session.jpeg";

function SessionDownload({ isMobile, id }) {
    return (
        <Box
            id={id}
            pos="relative"
            h="560px"
            bgImage={!isMobile && `url(${bgSession})`}
            bgColor="blue.800"
            _before={{
                content: "''",
                pos: "absolute",
                top: "0",
                left: "0",
                w: "100%",
                h: "100%",
                bgColor: "rgba(23, 16, 16, 0.6)",
            }}
        >
            <Box
                pos="relative"
                zIndex="100"
                mx="auto"
                top="50%"
                transform="translateY(-50%)"
                textAlign="center"
                color="white"
                w={["100vw", "80vw", "60vw", "60vw"]}
            >
                <Heading mb="1rem" fontSize={["2xl", "3xl", "5xl", "6xl"]}>
                    Download the app now
                </Heading>
                <Text mb="2rem" fontSize={["sm", "md", "xl", "xl"]}>
                    Available on your favorite store. Start your premium
                    experience now.
                </Text>
                <Flex justifyContent="center" alignItems="center">
                    <CustomButton
                        title="Play Store"
                        bgColor="tomato.400"
                        color="white"
                        borderRadius="8px"
                    />
                    <CustomButton
                        title="App Store"
                        bgColor="transparent"
                        borderRadius="8px"
                    />
                </Flex>
            </Box>
        </Box>
    );
}

export default SessionDownload;
