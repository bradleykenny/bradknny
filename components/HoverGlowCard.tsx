import Card from "@/components/Card";

const HoverGlowCard = () => {
    return (
        <Card>
            <div className="h-full w-full bg-gradient-to-br from-slate-500/50 to-slate-500/20 p-4 shadow-xl">
                <p className="bg-transparent">
                    Some text here explaining who I am and some other words and
                    stuff
                </p>
            </div>
        </Card>
    );
};

export default HoverGlowCard;
