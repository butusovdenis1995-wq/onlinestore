import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { UserMenu } from "../UserMenu";
import { UserLogo } from "../UserLogo";
import { IUserData } from "@/entities/UserProfile/model/interface";
import { UserDropDownContent } from "./constants";
import { useHandelButtonAuth } from "@/shared/hooks/useHandelButtonAuth";
import { useAppSelector } from "@/shared/config/hooks";
import { useState } from "react";

export function UserDropDown(props: IUserData) {
  const { email, name } = props;
  const [open, setOpen] = useState(false);
  const handelButtonAuth = useHandelButtonAuth();
  const user = useAppSelector((state) => state.userData.userData);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          className="p-6 focus:outline-none"
          size={"xs"}
          variant={"transparent"}
        >
          <UserMenu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-85 z-100 px-0">
        <DropdownMenuLabel className="flex gap-x-4 p-5">
          <UserLogo className="size-12 my-auto" />
          <div className="flex flex-col gap-y-1">
            <p className="text-lg text-black font-semibold ">{name}</p>
            <p className="text-base text-gray-400">{email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {UserDropDownContent.buttonLink.map((link) => {
          if (link.label === "Управление товарами" && user?.role !== "admin") {
            return null;
          }
          return (
            <DropdownMenuItem
              asChild
              className="p-5 rounded-none text-base text-gray-500 hover:bg-gray-100"
            >
              <Link
                className="flex items-center gap-x-4 w-full"
                to={link.link}
                onClick={() => setOpen(false)}
              >
                <link.logo />
                {link.label}
              </Link>
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="p-5 rounded-none">
          <Button
            onClick={() => handelButtonAuth(true)}
            variant={"destructive"}
            size={"sm"}
            className="w-full justify-start text-base mb-2"
          >
            <UserDropDownContent.buttonLogOut.logo className="mr-2" />
            {UserDropDownContent.buttonLogOut.label}
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
