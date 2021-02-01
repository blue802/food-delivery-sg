import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";

import bgHeader from "../../asset/images/bg-header.jpeg";

function Header({ isMobile }) {
    return (
        <Box
            pos="relative"
            bgImage={!isMobile && `url(${bgHeader})`}
            w="100vw"
            h={["55vh", "80vh", "80vh", "80vh"]}
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPos="center"
            textAlign="center"
            _before={
                !isMobile && {
                    content: "''",
                    pos: "absolute",
                    top: "0",
                    left: "0",
                    w: "100%",
                    h: "100%",
                    bgColor: "rgba(23, 16, 16, 0.6)",
                }
            }
        >
            <Box
                mx={["2rem", "3rem", "5rem", "15rem"]}
                pos="relative"
                zIndex="100"
                color={isMobile ? "black" : "white"}
                top={["2rem", "3rem", "8rem", "8rem"]}
            >
                <Text
                    fontSize={["md", "xl", "xl", "xl"]}
                    fontWeight="700"
                    mb={[2, 4, 4, 4]}
                    color={isMobile && "silver.400"}
                >
                    Food App
                </Text>
                <Text
                    fontSize={["2xl", "3xl", "5xl", "6xl"]}
                    fontWeight="700"
                    mb={[2, 4, 4, 4]}
                >
                    Why stay hungry when you can order from Bella Onojie
                </Text>
                <Text
                    fontSize={["md", "xl", "xl", "xl"]}
                    fontWeight="400"
                    mb={[2, 4, 8, 12]}
                    color={isMobile && "silver.400"}
                >
                    Download the bella onojie's food app now on
                </Text>
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    flexDir={isMobile && "column"}
                >
                    <CustomButton
                        title="Play Store"
                        bgColor="tomato.400"
                        color="white"
                    />
                    <CustomButton
                        title="App Store"
                        bgColor="transparent"
                        color={isMobile ? "tomato.400" : "white"}
                    />
                </Flex>
            </Box>
        </Box>
    );
}

export default Header;
