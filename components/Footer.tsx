import { cn } from "@/services";
import { Handlee } from "next/font/google";

const handlee = Handlee({ weight: "400", subsets: ["latin"] });

const Footer = () => {
    return (
        <h2
            className={cn(
                "border-t-2 border-gray-500 pt-16 text-center text-xl text-gray-300",
                handlee.className
            )}
        >
            that's all folks 👋
        </h2>
    );
};

export default Footer;
