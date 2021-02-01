import {
    Box,
    Checkbox,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Heading,
    Input,
    Stack,
    Text,
} from "@chakra-ui/react";
import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";

function SessionForm({ isMobile }) {
    return (
        <Box
            px={["1rem", "3rem", "8rem", "15rem"]}
            py="5rem"
            bgColor="rgba(231, 238, 245, 0.25)"
        >
            <Heading
                fontSize={["2xl", "3xl", "4xl", "5xl"]}
                textAlign="center"
                mb="3rem"
            >
                Sign Up Form
            </Heading>
            <Heading fontSize="xl" mb="1rem">
                Attention
            </Heading>
            <Text mb="3rem">
                The theme object is where you define your application's color
                palette, type scale, font stacks, breakpoints, border radius
                values, and more.
            </Text>
            <form action="">
                <Grid
                    templateColumns={
                        isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"
                    }
                    gap="2rem"
                    mb="2rem"
                >
                    <GridItem colSpan={1}>
                        <FormControl isRequired>
                            <FormLabel>Full Name</FormLabel>
                            <Input type="text" size="lg" bgColor="white" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl isRequired>
                            <FormLabel>Phone Number</FormLabel>
                            <Input type="number" size="lg" bgColor="white" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input type="text" size="lg" bgColor="white" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Address</FormLabel>
                            <Input type="text" size="lg" bgColor="white" />
                        </FormControl>
                    </GridItem>
                </Grid>
                <Stack pl={6} mt={1} spacing={1} mb="2rem">
                    <Checkbox>Checkbox 1</Checkbox>
                    <Checkbox>Checkbox 2</Checkbox>
                </Stack>
                <Box textAlign="center">
                    <CustomButton
                        title="Submit"
                        bgColor="tomato.400"
                        borderRadius="8px"
                        color="white"
                        type="submit"
                    />
                </Box>
            </form>
        </Box>
    );
}

export default SessionForm;
