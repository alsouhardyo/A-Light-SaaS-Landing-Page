import Button from "../components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"]
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
    return (
        <section
            ref={heroRef}
            className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
        >
            <div className="container">
                <div className="md:flex md:justify-center md:items-center">
                    <div className="space-y-7 md:w-[470px]">
                        <div className="border border-[#222]/20 inline-block px-3 py-1 rounded-lg text-sm tracking-tight">
                            Version 2.0 is here
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                            Pathway to productivity
                        </h1>
                        <p className="text-xl text-[#010D3E] tracking-tight">
                            Celebrate the joy of accomplishment with an app
                            designed to track your progress, motivate your
                            efforts, and celebrate your success.
                        </p>
                        <div className="flex justify-start items-center gap-4">
                            <Button />
                            <button className="flex justify-center items-center gap-2">
                                <p className="font-medium tracking-tight">
                                    Learn More
                                </p>
                                <FaArrowRightLong />
                            </button>
                        </div>
                    </div>
                    <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
                        <motion.img
                            src="/images/cog.png"
                            alt="image of the 3D cog"
                            className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
                            animate={{
                                y: [-30, 30]
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "mirror",
                                duration: 3,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.img
                            src="/images/cylinder.png"
                            alt="image of a 3d cylinder"
                            className="hidden md:block md:absolute w-[220px] h-[220px] -top-8 -left-32"
                            style={{
                                translateY: translateY
                            }}
                        />
                        <motion.img
                            src="/images/noodle.png"
                            alt="image of the 3D noodle"
                            className="hidden lg:block absolute top-[524px] left-[448px] w-[220px] rotate-[30deg]"
                            style={{
                                rotate: 30,
                                translateY: translateY
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
