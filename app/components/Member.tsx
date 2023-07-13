import Image from "next/image";

interface MemberProps {
  index: number;
  name: string;
  url: string;
  testimonial: string;
  position: string;
}

const Member: React.FC<MemberProps> = ({
  index,
  name,
  url,
  testimonial,
  position,
}) => {
  return (
    <div
      className={`flex justify-start text-[#1e3264] gap-4 sm:gap-[50px] md:gap-4 col-span-2 md:col-span-1 ${
        index % 2 && "md:justify-end"
      } `}
    >
      <div className="w-[150px] h-[150px] flex items-center overflow-hidden">
        <Image
          src={url}
          alt="member"
          className="object-center"
          width={150}
          height={150}
        />
      </div>
      <div>
        <p className="text-sm whitespace-pre-wrap source max-w-[150px]">
          {testimonial}
        </p>
        <p className="mt-4 text-sm font-bold tracking-widest ">{name}</p>
        <p className="text-xs whitespace-pre-wrap source">{position}</p>
      </div>
    </div>
  );
};

export default Member;
