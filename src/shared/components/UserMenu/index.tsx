import { useAppSelector } from "@/shared/config/hooks";
import { cn } from "@/shared/lib/cn";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { UserLogo } from "../UserLogo";

export function UserMenu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleClick() {
    setIsOpenMenu((prev) => {
      if (prev) {
        return false;
      } else return true;
    });
  }

  const userData = useAppSelector((state) => state.userData.userData);
  return (
    <div onClick={handleClick} className="flex items-center gap-4">
      <UserLogo className="size-10" />
      <div>{userData?.name}</div>
      <ChevronDown
        className={cn(
          "ml-4 transition-transform duration-300 ease-in-out",
          isOpenMenu && "rotate-180",
        )}
      />
    </div>
  );
}
