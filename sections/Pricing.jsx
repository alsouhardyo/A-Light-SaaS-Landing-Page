import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

const pricingTiers = [
    {
        title: "Free",
        monthlyPrice: 0,
        buttonText: "Get started for free",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "2GB storage",
            "Integrations",
            "Basic support"
        ]
    },
    {
        title: "Pro",
        monthlyPrice: 9,
        buttonText: "Sign up now",
        popular: true,
        inverse: true,
        features: [
            "Up to 50 project members",
            "Unlimited tasks and projects",
            "50GB storage",
            "Integrations",
            "Priority support",
            "Advanced support",
            "Export support"
        ]
    },
    {
        title: "Business",
        monthlyPrice: 19,
        buttonText: "Sign up now",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "200GB storage",
            "Integrations",
            "Dedicated account manager",
            "Custom fields",
            "Advanced analytics",
            "Export capabilities",
            "API access",
            "Advanced security features"
        ]
    }
];

const Pricing = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="flex justify-center items-center flex-col gap-4 max-w-[540px] mx-auto">
                    <h2 className="text-3xl md:text-[54px] md:leading-[60px] font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text text-center tracking-tight">
                        Pricing
                    </h2>
                    <p className="text-[#010D3E] text-[22px] leading-[30px] tracking-tight text-center max-w-[425px]">
                        Free forever. Upgrade for unlimited tasks, better
                        security, and exclusive features.
                    </p>
                </div>
                <div className="lg:flex lg:justify-center lg:items-end gap-6 mt-10 sm:space-y-6">
                    {pricingTiers.map((tier, index) => {
                        return (
                            <div
                                key={index}
                                className={
                                    tier.inverse
                                        ? `bg-black text-white p-10 rounded-3xl shadow-[0_7_14_#EAEAEA] max-w-[325px] mx-auto`
                                        : `bg-white p-10 rounded-3xl shadow-[0_7_14_#EAEAEA] border border-[#F1F1F1] space-y-6 max-w-[325px] mx-auto`
                                }
                            >
                                <div className="space-y-6">
                                    <div
                                        className={
                                            tier.popular
                                                ? "flex justify-between items-center"
                                                : "block"
                                        }
                                    >
                                        <p
                                            className={
                                                tier.inverse
                                                    ? "text-lg font-bold text-white/50"
                                                    : "text-lg font-bold text-black/50"
                                            }
                                        >
                                            {tier.title}
                                        </p>
                                        <div
                                            className={
                                                tier.popular
                                                    ? "inline-flex text-sm px-4 py-2 rounded-lg border border-white/20"
                                                    : "hidden"
                                            }
                                        >
                                            <motion.span
                                                className="text-transparent bg-clip-text"
                                                style={{
                                                    backgroundImage:
                                                        "linear-gradient(to right, #DD7DDF, #E1CD86, #BBCB92, #71C2EF, #3BFFFF, #DD7DDF, #E1CD86, #BBCB92, #71C2EF, #3BFFFF)",
                                                    backgroundSize: "200%",
                                                }}
                                                animate={{
                                                    backgroundPositionX: "100%",
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    repeatType: "loop",
                                                    ease: "linear"
                                                }}
                                            >
                                                Most Popular
                                            </motion.span>
                                        </div>
                                    </div>
                                    <div className="flex justify-start items-end gap-1">
                                        <p className="text-4xl font-bold tracking-tighter leading-none">
                                            ${tier.monthlyPrice}
                                        </p>
                                        <span
                                            className={
                                                tier.inverse
                                                    ? "tracking-tight font-bold text-white/50"
                                                    : "tracking-tight font-bold text-black/50"
                                            }
                                        >
                                            /month
                                        </span>
                                    </div>
                                    <button
                                        className={
                                            tier.inverse
                                                ? "bg-white text-black px-4 py-2 rounded-md w-full"
                                                : "bg-black text-white px-4 py-2 rounded-md w-full"
                                        }
                                    >
                                        {tier.buttonText}
                                    </button>
                                </div>
                                <div className="mt-8">
                                    {tier.features.map((feature, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="flex justify-start items-baseline gap-4 space-y-4"
                                            >
                                                <FaCheck />
                                                <p>{feature}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
