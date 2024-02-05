import { ReactNode } from "react";

interface PropsType {
  title: string;
  icon: ReactNode;
  desc: string;
}

const ServiceCard = ({ title, icon, desc }: PropsType) => {
  return (
    <div className="flex gap-4 item-center">
      <div className="text-[40px] text-primary">{icon}</div>
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm sm:text-[16px] text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
