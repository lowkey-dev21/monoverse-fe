import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "../../../public/assets/images/novapath.png";
const Logo = ({
  className,
  imgWidth,
  imgHeight,
}: {
  className?: string;
  imgWidth?: number;
  imgHeight?: number;
}) => {
  return (
    <div className="flex items-center">
      <Image
        src={logo}
        alt="Logo"
        width={imgWidth || 30}
        height={imgHeight || 30}
      />
      <span
        className={cn(
          `font-bold  font-montserrat text-xl text-gray-900`,
          className
        )}
      >
        MONOVERSE
      </span>
    </div>
  );
};
export default Logo;
