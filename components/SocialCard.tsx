import Card from "@/components/Card";

interface Props {
    image: string;
    link: string;
    title: string;
    username: string;
}

function SocialCard(props: Props) {
    const { image, link, title, username } = props;

    return (
        <Card>
            <a href={link}>
                <div className="group relative h-full w-full">
                    <div className="flex h-full flex-col justify-center pl-10">
                        <h1 className="mb-1 text-3xl font-bold">{title}</h1>
                        <h1 className="text-lg font-bold text-slate-400">
                            {username}
                        </h1>
                    </div>
                    <img
                        src={image}
                        className="absolute top-12 right-6 w-2/5 opacity-20 drop-shadow-xl transition-all ease-in-out group-hover:scale-110 group-hover:opacity-50"
                        style={{
                            filter: "brightness(0) invert(1)",
                        }}
                    />
                </div>
            </a>
        </Card>
    );
}

export default SocialCard;
