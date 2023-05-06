import Card from "@/components/Card";
import { ICard } from "@/model/Card";
import { cn } from "@/services";
import Image from "next/image";

interface Props {
  data: ICard;
}

function ProjectCard(props: Props) {
  const { data } = props;

  return (
    <div
      className="col-span-2 flex h-full overflow-hidden"
      style={{
        gridColumn: `span ${data.colSpan}`,
      }}
    >
      <Card>
        <div className="p-8 pb-0">
          <h2 className="w-fit rounded-lg bg-gray-50/80 px-2 text-3xl font-bold leading-snug text-slate-700">
            {data.title}
          </h2>
          <p className="mb-6 mt-4">{data.description}</p>
          {data.images && (
            <div className="relative -mb-10 mt-4 flex flex-row rounded-lg p-1 pl-4">
              {data.images.map((image, idx) => (
                <Image
                  src={image}
                  alt="screenshot"
                  className={cn(
                    "absolute rounded-md shadow-xl",
                    idx === 0 && "left-0",
                    idx === data.images!.length - 1 && "right-0"
                  )}
                  style={{
                    width: `${105 / data.images!.length || 1}%`,
                    transform: `scale(${1 - idx * 0.1})`,

                    zIndex: 100 + -idx,
                  }}
                  key={idx}
                />
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

export default ProjectCard;
