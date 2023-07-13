import Image from "next/image";

interface ImageTextCardProps {
  url: string;
  subtitle: string;
  title: string;
  description: string;
  reverse?: boolean;
}

const ImageTextCard: React.FC<ImageTextCardProps> = ({
  url,
  subtitle,
  title,
  description,
  reverse = false,
}) => {
  return (
    <div
      className={`w-full flex flex-col justify-between items-center gap-6 max-w-[900px] ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div>
        <Image
          src={url}
          alt={title}
          width={350}
          height={350}
          className="sm:min-w-[350px]"
        />
      </div>
      <div className="max-w-[350px]">
        <p className="text-xs sm:text-sm font-bold tracking-widest text-gray-500">
          {subtitle}
        </p>
        <p className="text-2xl sm:text-3xl my-4 sm:my-6 font-medium text-[#1e3264]">
          {title}
        </p>
        <p className="text-sm sm:text-base text-gray-500 whitespace-pre-wrap source">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ImageTextCard;
