import Card from "@/components/Card";
import { ICard } from "@/model/Card";
import Image from "next/image";

interface Props {
  data: ICard;
}

const ProjectCard = (props: Props) => {
  const { data } = props;

  return (
    <div className="overflow-hidden col-span-2 flex h-full" style={{
        gridColumn: `span ${data.colSpan}`
    }}>
      <Card>
        <div className="p-8 pb-0">
          <h2 className="w-fit bg-gray-50/80 px-2 text-slate-700 text-3xl font-bold leading-tight">
            {data.title}
          </h2>
          <p className="mb-6 mt-4">{data.description}</p>
          {!data.image && (
            <div className="-mb-10 mt-4 rounded-lg bg-gradient-to-br from-gray-200 to-gray-400 p-1 shadow-2xl">
              <Image src={data.image} alt="screenshot" className="rounded-md" />
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
