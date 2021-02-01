import Navbar from "./layouts/navbar/navbar";
import Header from "./layouts/header/header";
import SessionIntro from "./layouts/sessions/sessionIntro";
import CustomSession from "./layouts/sessions/customSession";
import SessionDownload from "./layouts/sessions/sessionDownload";
import SessionForm from "./layouts/sessions/sessionForm";
import "./App.css";
import { useEffect, useState } from "react";

import cpLogin from "./asset/images/cp-login.png";
import cpHome from "./asset/images/cp-home.png";
import cpPayment from "./asset/images/cp-payment.png";
import { Box, Heading } from "@chakra-ui/react";
import Footer from "./layouts/footer/footer";

const breakPoint = 568;

function App() {
    const [widthScreen, setWidthScreen] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidthScreen(window.innerWidth);
        });
    });

    const isMobile = () => {
        return widthScreen < breakPoint ? true : false;
    };

    return (
        <div className="container">
            <Navbar isMobile={isMobile()} />
            <Header isMobile={isMobile()} />
            <SessionIntro />
            <Box mt="4rem" id="product">
                <Heading
                    fontSize={["2xl", "3xl", "5xl", "5xl"]}
                    textAlign="center"
                >
                    How does app work
                </Heading>
                <CustomSession
                    isMobile={isMobile()}
                    textSide="right"
                    image={cpLogin}
                    content={{
                        title: "Create an account",
                        heading:
                            "Create/login to an existing account to get started.",
                        description:
                            "An account is created with your email and desired password",
                    }}
                />
                <CustomSession
                    isMobile={isMobile()}
                    textSide="left"
                    image={cpHome}
                    content={{
                        title: "Explore varieties",
                        heading: "Shop for your favorite meals as e dey hot.",
                        description:
                            "Shop for your favorite meals or drinks and enjoy while doing it",
                    }}
                />
                <CustomSession
                    isMobile={isMobile()}
                    textSide="right"
                    image={cpPayment}
                    content={{
                        title: "Checkout",
                        heading: "When you done checkout and get it delivered.",
                        description:
                            "When you done checkout and get it delivered with ease",
                    }}
                />
            </Box>
            <SessionDownload id="download" isMobile={isMobile()} />
            <SessionForm isMobile={isMobile()} />
            <Footer id="contact" isMobile={isMobile()} />
        </div>
    );
}

export default App;
