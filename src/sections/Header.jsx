import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../components/Button";
const Header = () => {
    const navItems = ["About", "Features", "Customers", "Updates", "Help"];
    return (
        <header className="sticky top-0 backdrop-blur-md z-50">
            <div
                id="header"
                className="flex justify-center items-center gap-4 bg-black text-white py-3"
            >
                <p className="md:block md:text-white/60 hidden">
                    Streamline your workflow and boost your productivity.
                </p>
                <div className="flex justify-center items-center gap-2">
                    <p>Get started for free</p>
                    <FaArrowRightLong className="w-4 h-4 inline-flex" />
                </div>
            </div>
            <div className="py-5">
                <div className="flex items-center justify-between container">
                    <img
                        src="/images/logosaas.png"
                        alt="image of the SaaS logo"
                        className="w-10 h-10"
                    />
                    <img
                        src="/images/menu.svg"
                        alt="image of the menu bar"
                        className="w-5 h-5 cursor-pointer md:hidden"
                    />
                    <nav className="hidden md:block">
                        <ul className="flex justify-center items-center gap-6">
                            {navItems.map((nav, index) => {
                                return (
                                    <li key={index}>
                                        <a
                                            href={`#${nav}`}
                                            className="text-black/70"
                                        >
                                            {nav}
                                        </a>
                                    </li>
                                );
                            })}
                            <Button />
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
