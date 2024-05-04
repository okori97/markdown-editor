import Image from "next/image";
import "../../../public/icon-menu.svg";
import { FileItem } from "./FileItem";
import { Button } from "./Button";

export function Navbar() {
  return (
    <div className="bg-primary-150 flex w-full items-center justify-between pr-3">
      <div className="flex items-center ">
        <a href="">
          <div className=" bg-primary-100 px-4 py-6">
            <Image src={"/icon-menu.svg"} alt="" width={24} height={24} />
          </div>
        </a>
        <div className="flex h-8 items-center  border-r px-8">
          <Image src={"/logo.svg"} alt="logo" width={128} height={32} />
        </div>
        <FileItem />
      </div>
      <div className="flex items-center">
        <a href="">
          <Image
            src="/icon-delete.svg"
            alt="trash can"
            width={16}
            height={16}
            className="h-[16px] w-auto px-4"
          />
        </a>
        <Button icon="save" text="Save Changes" />
      </div>
    </div>
  );
}
