import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, Image, Link, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../asset/images/logo.png";

function Navbar({ isMobile }) {
    const [active, setActive] = useState("Home");
    const [isShowingMenu, setIsShowingMenu] = useState(false);

    const navigationConfig = [
        { title: "Home", link: "#home" },
        { title: "Product", link: "#product" },
        { title: "Download", link: "#download" },
        { title: "Contact", link: "#contact" },
    ];

    const listNavigationItem = navigationConfig.map((item) => (
        <Box px="3rem" py="1.5rem" fontSize="inherit">
            <Link
                href={item.link}
                textDecoration="none"
                color={active === item.title ? "tomato.400" : "inherit"}
                fontWeight="600"
                fontSize="inherit"
                onClick={() => {
                    setActive(item.title);
                    setIsShowingMenu(false);
                }}
                _hover={{
                    textDecoration: "none",
                    color: "tomato.400",
                }}
                styleConfig={{ outline: "none" }}
            >
                {item.title}
            </Link>
        </Box>
    ));

    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            pos="relative"
            px="1rem"
        >
            <Box w={["10rem", "12rem", "14rem", "14rem"]}>
                <Image src={logo} w="100%" />
            </Box>
            {isMobile ? (
                <HamburgerIcon
                    cursor="pointer"
                    fontSize="2rem"
                    color="silver.400"
                    onClick={() => setIsShowingMenu(true)}
                />
            ) : (
                <HStack>{listNavigationItem}</HStack>
            )}
            <Box
                pos="absolute"
                left="0"
                top={isShowingMenu ? "0" : "-100vh"}
                zIndex="1000"
                w="100vw"
                h="100vh"
                bgColor="black"
                fontSize="2rem"
                textAlign="right"
                transition="0.4s"
            >
                <CloseIcon
                    m="2rem"
                    color="white"
                    cursor="pointer"
                    fontSize="1.2rem"
                    onClick={() => setIsShowingMenu(false)}
                />
                <VStack alignItems="center" color="white">
                    {listNavigationItem}
                </VStack>
            </Box>
        </Flex>
    );
}

export default Navbar;
