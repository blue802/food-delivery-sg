import { Box, Image } from "@chakra-ui/react";
import React from "react";

import cpLeftSide from "../../asset/images/cp-left-side.png";
import cpRightSide from "../../asset/images/cp-right-side.png";

function SessionIntro() {
    return (
        <Box
            mt={[8, 0, 0, 0]}
            w={["100vw", "55vw", "60vw", "65vw"]}
            h={["24rem", "32rem", "36rem", "38rem"]}
            mx="auto"
            borderBottom="4px solid"
            borderBottomColor="silver.300"
        >
            <Box
                pos="relative"
                w={["23rem", "24rem", "34.5rem", "34.5rem"]}
                h="100%"
                left="50%"
                bottom="0"
                transform="translateX(-50%)"
                bgGradient="radial-gradient(circle, rgba(242,242,242,1) 20%, rgba(255,255,255,1) 60%)"
            >
                <Image
                    src={cpLeftSide}
                    w={["12rem", "15rem", "18rem", "18rem"]}
                    pos="absolute"
                    left="0"
                    top="-8rem"
                />
                <Image
                    src={cpRightSide}
                    w={["12rem", "15rem", "18rem", "18rem"]}
                    pos="absolute"
                    right="0"
                    top="-3rem"
                />
            </Box>
        </Box>
    );
}

export default SessionIntro;
