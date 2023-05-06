import { cn } from "@/services";
import { Bebas_Neue, DynaPuff } from "next/font/google";

const dynaPuff = DynaPuff({ weight: "400", subsets: ["latin"] });
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

const Heading = () => {
    return (
        <div className="my-auto flex h-screen w-full flex-col justify-center text-center">
            <h1
                className={cn(
                    "pt-24 w-fit bg-gradient-to-br from-blue-500 to-green-500 bg-clip-text pb-12 pl-24 pr-8 text-left text-[15rem] font-black leading-none tracking-tighter text-transparent drop-shadow-lg",
                    dynaPuff.className
                )}
            >
                bradley
            </h1>
            <h1
                className={cn(
                    "ml-auto w-fit bg-gradient-to-br from-gray-300 to-gray-700 bg-clip-text pr-24 text-right text-[18rem] font-black leading-none text-transparent drop-shadow-lg",
                    bebasNeue.className
                )}
            >
                kenny
            </h1>
        </div>
    );
};

export default Heading;
