import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import logo from "../../asset/images/logo.png";

function Footer({ isMobile, id }) {
    return (
        <Flex
            id={id}
            justifyContent="space-around"
            alignItems="center"
            py={["2rem", "1rem", "1rem", "1rem"]}
            pos="relative"
            flexDir={isMobile && "column"}
        >
            {!isMobile && (
                <Box w={["10rem", "12rem", "14rem", "14rem"]}>
                    <Image src={logo} w="100%" />
                </Box>
            )}
            <HStack spacing="1rem" color="tomato.400" fontSize="2rem">
                <FaTwitter />
                <FaFacebookSquare />
                <AiFillInstagram fontSize="2.2rem" />
            </HStack>
            {!isMobile && (
                <Box color="gray.600" fontWeight="600">
                    Copyright <span>&#169;</span> 2020 bellaonojie.com
                </Box>
            )}
            {isMobile && (
                <Box color="gray.600" fontWeight="600" mt="1rem">
                    Just type what's on your mind and we'll
                </Box>
            )}
        </Flex>
    );
}

export default Footer;
