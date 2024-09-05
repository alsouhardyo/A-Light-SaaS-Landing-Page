import { motion } from "framer-motion";

const LogoTicker = () => {
    const logos = [
        "./src/assets/images/logo-acme.png",
        "./src/assets/images/logo-apex.png",
        "./src/assets/images/logo-celestial.png",
        "./src/assets/images/logo-echo.png",
        "./src/assets/images/logo-pulse.png",
        "./src/assets/images/logo-quantum.png"
    ];
    return (
        <section className="py-8 bg-white md:py-12">
            <div className="container">
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <motion.div className="flex justify-between items-center gap-14 flex-none pr-14" animate={{
                        translateX: "-50%",
                    }} transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                    }}>
                        {logos.map((logo, index) => {
                            return (
                                <img
                                    key={index}
                                    src={logo}
                                    alt="image of the logo"
                                    className="h-8 w-auto"
                                />
                            );
                        })}
                        {logos.map((logo, index) => {
                            return (
                                <img
                                    key={index}
                                    src={logo}
                                    alt="image of the logo"
                                    className="h-8 w-auto"
                                />
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LogoTicker;
