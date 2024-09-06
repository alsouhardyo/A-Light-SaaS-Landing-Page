import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProductShowcase = () => {
    const sectionRef = useRef(null);
    // Correct the typo in the destructured object from useScroll
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Ensure scrollYProgress is correctly used
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-12 bg-gradient-to-b from-[#ffff] to-[#D2DCFF] overflow-x-clip"
        >
            <div className="container">
                <div className="space-y-6">
                    <div className="flex justify-center items-center flex-col gap-6 max-w-[540px] mx-auto">
                        <button className="border border-[#222]/20 px-2 py-1 rounded-lg inline-block text-sm tracking-tight">
                            Boost your Productivity
                        </button>
                        <h1 className="text-3xl md:text-[54px] md:leading-[60px] font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text text-center tracking-tight">
                            A more effective way to track progress
                        </h1>
                        <p className="text-[#010D3E] text-[22px] leading-[30px] tracking-tight text-center max-w-[425px]">
                            Effortlessly turn your ideas into a fully
                            functional, responsive, SaaS website in just minutes
                            with this template.
                        </p>
                    </div>
                    <div className="relative">
                        <img
                            src="/images/product-image.png"
                            alt="image of the product"
                        />
                        <motion.img
                            src="/images/tube.png"
                            alt="image of the tube"
                            className="hidden md:block absolute bottom-24 -left-36 h-[248px]"
                            style={{
                                translateY
                            }}
                        />
                        <motion.img
                            src="/images/pyramid.png"
                            alt="image of the pyramid"
                            className="hidden md:block absolute -right-36 -top-32 h-[262px] w-[262px]"
                            style={{
                                translateY
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
