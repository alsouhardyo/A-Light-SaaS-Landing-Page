import { motion } from "framer-motion";

const testimonials = [
    {
        text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
        imageSrc: "./src/assets/images/avatar-1.png",
        name: "Jamie Rivera",
        username: "@jamietechguru00"
    },
    {
        text: "Our team's productivity has skyrocketed since we started using this tool. ",
        imageSrc: "./src/assets/images/avatar-2.png",
        name: "Josh Smith",
        username: "@jjsmith"
    },
    {
        text: "This app has completely transformed how I manage my projects and deadlines.",
        imageSrc: "./src/assets/images/avatar-3.png",
        name: "Morgan Lee",
        username: "@morganleewhiz"
    },
    {
        text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
        imageSrc: "./src/assets/images/avatar-4.png",
        name: "Casey Jordan",
        username: "@caseyj"
    },
    {
        text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
        imageSrc: "./src/assets/images/avatar-5.png",
        name: "Taylor Kim",
        username: "@taylorkimm"
    },
    {
        text: "The customizability and integration capabilities of this app are top-notch.",
        imageSrc: "./src/assets/images/avatar-6.png",
        name: "Riley Smith",
        username: "@rileysmith1"
    },
    {
        text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
        imageSrc: "./src/assets/images/avatar-7.png",
        name: "Jordan Patels",
        username: "@jpatelsdesign"
    },
    {
        text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
        imageSrc: "./src/assets/images/avatar-8.png",
        name: "Sam Dawson",
        username: "@dawsontechtips"
    },
    {
        text: "Its user-friendly interface and robust features support our diverse needs.",
        imageSrc: "./src/assets/images/avatar-9.png",
        name: "Casey Harper",
        username: "@casey09"
    },
    {
        text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
        imageSrc: "./src/assets/images/avatar-1.png",
        name: "Jamie Rivera",
        username: "@jamietechguru00"
    },
    {
        text: "Our team's productivity has skyrocketed since we started using this tool. ",
        imageSrc: "./src/assets/images/avatar-2.png",
        name: "Josh Smith",
        username: "@jjsmith"
    },
    {
        text: "This app has completely transformed how I manage my projects and deadlines.",
        imageSrc: "./src/assets/images/avatar-3.png",
        name: "Morgan Lee",
        username: "@morganleewhiz"
    },
    {
        text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
        imageSrc: "./src/assets/images/avatar-4.png",
        name: "Casey Jordan",
        username: "@caseyj"
    },
    {
        text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
        imageSrc: "./src/assets/images/avatar-5.png",
        name: "Taylor Kim",
        username: "@taylorkimm"
    },
    {
        text: "The customizability and integration capabilities of this app are top-notch.",
        imageSrc: "./src/assets/images/avatar-6.png",
        name: "Riley Smith",
        username: "@rileysmith1"
    },
    {
        text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
        imageSrc: "./src/assets/images/avatar-7.png",
        name: "Jordan Patels",
        username: "@jpatelsdesign"
    },
    {
        text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
        imageSrc: "./src/assets/images/avatar-8.png",
        name: "Sam Dawson",
        username: "@dawsontechtips"
    },
    {
        text: "Its user-friendly interface and robust features support our diverse needs.",
        imageSrc: "./src/assets/images/avatar-9.png",
        name: "Casey Harper",
        username: "@casey09"
    }
];

const Testimonials = () => {
    return (
        <section className="bg-white pb-24">
            <div className="container space-y-8">
                <div className="flex justify-center items-center flex-col space-y-6">
                    <div className="border border-[#222]/20 inline-block px-3 py-1 rounded-lg text-sm tracking-tight">
                        Version 2.0 is here
                    </div>
                    <h2 className="text-3xl md:text-[54px] md:leading-[60px] font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text text-center tracking-tight">
                        What our users say
                    </h2>
                    <p className="text-[#010D3E] text-[22px] leading-[30px] tracking-tight text-center max-w-[425px]">
                        From intuitive design to powerful features, our app has
                        become an essential tool for users around the world
                    </p>
                </div>
                <div
                    className="relative overflow-y-hidden max-h-[760px] md:max-h-[800px] lg:max-h-[822px] pb-6"
                    style={{
                        maskImage:
                            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)"
                    }}
                >
                    <div>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center mx-auto gap-6"
                            initial={{ y: 0 }} // Start position
                            animate={{ translateY: "-50%" }} // Animate from start to end
                            transition={{
                                duration: 30, // Longer duration for smoother movement
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "linear"
                            }}
                        >
                            {testimonials.map(
                                ({ text, imageSrc, name, username }, index) => (
                                    <div
                                        className="bg-white p-10 rounded-3xl border border-[#F1F1F1] space-y-6 max-w-[325px] mx-auto"
                                        key={index}
                                        style={{
                                            boxShadow: "0px 7px 14px #EAEAEA"
                                        }}
                                    >
                                        <p className="font-medium">{text}</p>
                                        <div className="flex justify-start items-center gap-4">
                                            <img
                                                src={imageSrc}
                                                alt="image of the client"
                                                className="h-10 w-10 rounded-full"
                                            />
                                            <div>
                                                <p className="font-semibold tracking-tight leading-5">
                                                    {name}
                                                </p>
                                                <p className="font-medium tracking-tight leading-5">
                                                    {username}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
