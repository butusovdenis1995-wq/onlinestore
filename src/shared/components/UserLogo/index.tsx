import { useAppSelector } from "@/shared/config/hooks";
import { cn } from "@/shared/lib/cn";
import { IUserLogoProps } from "./interface";
import { initialsUser } from "@/shared/lib/initialsUser";

export function UserLogo(props: IUserLogoProps) {
  const { className } = props;
  const userLogo = useAppSelector((state) => state.userData.userData);
  if (!userLogo) return null;
  const { name, avatar } = userLogo;

  return (
    <div className={cn("rounded-full overflow-hidden", className)}>
      <img
        className="w-full h-full object-cover"
        src={avatar}
        alt={initialsUser(name)}
      />
    </div>
  );
}
