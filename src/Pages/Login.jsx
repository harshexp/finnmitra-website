import { useState } from "react";
import "../assets/css/login.css";
import img from '../assets/images/login.png';

const Login = () => {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (index, e) => {
        if (isNaN(e.target.value)) return;
        let newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);

        // Move to the next box
        if (e.target.value && index < 5) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };

    return (
        <div className="login-container">
            {/* Left Section - Form with 3D Card Effect */}
            <div className="login-form">
                <div className="login-card">
                    <h2>Welcome Back</h2>
                    <small>Login to continue</small>
                    <input
                        type="text"
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        maxLength={10}
                    />
                    <button className="send-otp">Send OTP</button>
                    <div className="otp-container">
                        {otp.map((_, index) => (
                            <input
                                key={index}
                                id={`otp-${index}`}
                                type="text"
                                maxLength="1"
                                value={otp[index]}
                                onChange={(e) => handleChange(index, e)}
                            />
                        ))}
                    </div>
                    <button className="login-btn">Login</button>
                </div>
            </div>

            {/* Right Section - Image */}
            <div className="login-image">
                <img src={img} alt="Login" />
            </div>
        </div>
    );
};

export default Login;
