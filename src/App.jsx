import Navbar from "./layout/navbar/navbar";
import Header from "./layout/header/header";
import SessionIntro from "./layout/sessions/sessionIntro";
import CustomSession from "./layout/sessions/customSession";
import SessionDownload from "./layout/sessions/sessionDownload";
import SessionForm from "./layout/sessions/sessionForm";
import "./App.scss";
import { useEffect, useState } from "react";

import cpLogin from "./asset/images/cp-login.png";
import cpHome from "./asset/images/cp-home.png";
import cpPayment from "./asset/images/cp-payment.png";
import Footer from "./layout/footer/footer";

const breakPoint = 480;

function App() {
    const [widthScreen, setWidthScreen] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidthScreen(window.innerWidth);
            console.log(window.innerWidth);
        });
    });

    const breaking = () => {
        return widthScreen < breakPoint ? true : false;
    };

    return (
        <div className="container">
            <Navbar breaking={breaking()} />
            <Header />
            <SessionIntro />
            <div id="product" className="product">
                <h2 className="product__heading">How does app work</h2>
                <CustomSession
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
                    textSide="right"
                    image={cpPayment}
                    content={{
                        title: "Checkout",
                        heading: "When you done checkout and get it delivered.",
                        description:
                            "When you done checkout and get it delivered with ease",
                    }}
                />
            </div>
            <SessionDownload id="download" />
            <SessionForm />
            <Footer id="contact" />
        </div>
    );
}

export default App;
