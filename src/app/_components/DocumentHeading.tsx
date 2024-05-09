import Image from "next/image";
import { useAppContext } from "../Context/state";

export function DocumentHeading({
  text,
  isPreview,
}: {
  text: string;
  isPreview: boolean;
}) {
  const { setIsFullScreen, isFullScreen } = useAppContext();

  const toggleFullScreen = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsFullScreen(!isFullScreen);
  };
  return (
    <div className="  flex  flex-row items-center justify-between bg-secondary-50 px-4 py-1.5">
      <p className=" text-xs  font-[500]  capitalize tracking-widest text-secondary-150">
        {text}
      </p>
      {isPreview && (
        <a href="" onClick={toggleFullScreen}>
          <Image
            src={
              isFullScreen ? "/icon-hide-preview.svg" : "/icon-show-preview.svg"
            }
            alt="edit"
            width={16}
            height={16}
            className="w-auto cursor-pointer "
          />
        </a>
      )}
    </div>
  );
}
