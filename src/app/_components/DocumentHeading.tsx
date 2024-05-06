import Image from "next/image";

export function DocumentHeading({
  text,
  isPreview,
}: {
  text: string;
  isPreview: boolean;
}) {
  return (
    <div className="  bg-secondary-50  flex flex-row items-center justify-between px-4 py-1.5">
      <p className=" text-secondary-150  text-xs  font-[500] capitalize tracking-widest">
        {text}
      </p>
      {isPreview && (
        <a href="">
          <Image
            src="/icon-show-preview.svg"
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
