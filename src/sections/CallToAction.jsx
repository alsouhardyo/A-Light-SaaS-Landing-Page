import Button from "../components/Button";
import { useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";

const CallToAction = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
    return (
        <section
            ref={sectionRef}
            className="bg-gradient-to-b from-white to-[#D2DcFF] overflow-x-clip"
        >
            <div className="container pb-24 relative">
                <div className="flex justify-center items-center flex-col gap-8">
                    <h1 className="text-3xl md:text-[54px] md:leading-[60px] font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text text-center tracking-tight">
                        Sign Up For Free Today
                    </h1>
                    <p className="text-[#010D3E] text-[22px] leading-[30px] tracking-tight text-center max-w-[425px]">
                        Celebrate the joy of accomplishment with an app designed
                        to track your progress and motivate your efforts
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
                <div>
                    <motion.img
                        src="./src/assets/images/spring.png"
                        alt="image of the 3D spring"
                        className="hidden md:block absolute w-[360px] h-auto -right-[231px] lg:-right-[80px] -top-[19px]"
                        style={{
                            translateY
                        }}
                    />
                    <motion.img
                        src="./src/assets/images/star.png"
                        alt="image of the 3D star"
                        className="hidden md:block absolute w-[360px] h-auto -left-[250px] lg:-left-[90px] -top-[137px]"
                        style={{
                            translateY
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
