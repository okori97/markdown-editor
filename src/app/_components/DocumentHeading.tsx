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
    <div className={headingContClasses}>
      <p className="text-xs  font-[500]  capitalize tracking-widest text-secondary-150">
        {text}
      </p>

      <a href="" onClick={toggleFullScreen}>
        <div
          className={
            (isFullScreen ? "icon-eye off" : "icon-eye") +
            (isPreview ? " sm:block" : " block sm:hidden")
          }
        ></div>
      </a>
    </div>
  );
}
const headingContClasses =
  "flex  flex-row items-center justify-between bg-secondary-50 px-4 py-1.5 dark:bg-primary-150";
