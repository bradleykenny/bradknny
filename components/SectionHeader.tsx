import { cn } from "@/services";
import { Handlee } from "next/font/google";

const handlee = Handlee({ weight: "400", subsets: ["latin"] });

interface Props {
    title: string;
}

const SectionHeader = (props: Props) => {
    return (
        <h1 className={cn("ml-6 py-8 text-5xl", handlee.className)}>
            {props.title}
        </h1>
    );
};

export default SectionHeader;
