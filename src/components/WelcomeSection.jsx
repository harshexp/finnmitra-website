import { useState, useEffect } from "react";
import welcomeBackground from "../assets/images/homepagebg.webp";

const WelcomeSection = () => {
    const texts = ["FinnMitra", "Spending se pehle 'Mitra' dekha kya?"];
    const [displayText, setDisplayText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseTime = 2000;
    const switchTextDelay = 1000; // Delay before typing new text

    useEffect(() => {
        const currentText = texts[textIndex];

        if (!isDeleting && charIndex === currentText.length) {
            // Pause before starting deletion
            setTimeout(() => setIsDeleting(true), pauseTime);
            return;
        }

        if (isDeleting && charIndex === 0) {
            // Wait before switching to next text
            setTimeout(() => {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }, switchTextDelay);
            return;
        }

        const timeout = setTimeout(() => {
            setDisplayText(currentText.slice(0, isDeleting ? charIndex - 1 : charIndex + 1));
            setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex]);





    return (
        <section
            className="welcome-section position-relative text-center text-white d-flex align-items-center justify-content-center"
            style={{
                backgroundImage: `url(${welcomeBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
            }}
        >
            <div className="overlay position-absolute w-100 h-100 bg-black opacity-50"></div>
            <div className="content position-relative">
                <h3 className="welcome-text">
                    <span className="animate-left">Welcome to</span>
                </h3>
                <h1 className="welcome-finnmitra">
                    <span>{displayText}</span>
                    <span className="cursor">|</span>
                </h1>
            </div>
        </section>
    );
};

export default WelcomeSection;
