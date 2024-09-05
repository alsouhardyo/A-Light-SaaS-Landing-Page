import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const navItems = ["About", "Features", "Customers", "Updates", "Help"];
    return (
        <section className="py-12 bg-black">
            <div className="container">
                <div className="flex justify-center items-center space-y-8 flex-col">
                    <div
                        className="relative"
                        style={{
                            width: "fit-content"
                        }}
                    >
                        <img
                            src="./src/assets/images/logoSaaS.png"
                            alt="image of the saas icon"
                            className="h-[40px]"
                            style={{
                                position: "relative",
                                zIndex: 1
                            }}
                        />
                        <div
                            className="absolute top-0 bottom-0 h-full w-full blur"
                            style={{
                                backgroundImage:
                                    "linear-gradient(to right, #F87BFF, #FB92CF, #FFDD9B, #C2F0B1, #2FD8FE)",
                            }}
                        ></div>
                    </div>
                    <ul className="flex justify-start items-center flex-col md:flex-row gap-6 lg:gap-8">
                        {navItems.map((nav, index) => {
                            return (
                                <li key={index} className="text-white/50">
                                    {nav}
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex justify-center items-center gap-4">
                        <FaInstagram className="text-white/50 text-2xl" />
                        <FaLinkedin className="text-white/50 text-2xl" />
                        <FaPinterest className="text-white/50 text-2xl" />
                        <FaYoutube className="text-white/50 text-2xl" />
                        <BsTwitterX className="text-white/50 text-2xl" />
                    </div>
                    <p className="text-white/50 text-center">
                        &copy; 2024 Your Company.Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Footer;
