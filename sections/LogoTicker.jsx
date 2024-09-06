import { motion } from "framer-motion";

const LogoTicker = () => {
    const logos = [
        "/images/logo-acme.png",
        "/images/logo-apex.png",
        "/images/logo-celestial.png",
        "/images/logo-echo.png",
        "/images/logo-pulse.png",
        "/images/logo-quantum.png"
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
