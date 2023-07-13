interface FeatureProps {
  title: string;
  description: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
}

const Feature: React.FC<FeatureProps> = ({ title, description, Icon }) => {
  return (
    <div className="flex flex-col gap-2 max-w-[400px]">
      <div className="flex items-center gap-2">
        <Icon className="h-8 w-8 md:h-12 md:w-12 text-sky-500" />
        <p className="text-base sm:text-lg font-bold tracking-widest text-[#1e3264]">
          {title}
        </p>
      </div>
      <div>
        <p className="source md:ml-14 text-xs sm:text-sm font-medium text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Feature;
