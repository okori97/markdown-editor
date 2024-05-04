import { Button } from "./Button";
import { FileItem } from "./FileItem";

export function Sidebar() {
  return (
    <div className="bg-primary-200 h-lvh w-1/4  p-5">
      <div className=" text-secondary-150 text-sm font-normal tracking-widest">
        <p className="mb-5">MY DOCUMENTS</p>
        <Button icon="plus" text="New Document" isFullWidth={true} />
      </div>
      <div className="mt-5 flex flex-col gap-5">
        <FileItem />
        <FileItem />
      </div>
    </div>
  );
}
