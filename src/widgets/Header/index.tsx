import { Logo } from "@/shared/components/Logo";
import { headerNav, loginButtons } from "./constants";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { useState } from "react";
import { UserRound, ShoppingCart } from "lucide-react";
import { cn } from "@/shared/lib/cn";

export function Header() {
  const [isCookie, setIsCookie] = useState(true);

  const isHiddenButton = (isAuth: boolean) => {
    return isCookie !== isAuth;
  };
  return (
    <header className="content-px flex py-6">
      <Logo />
      <nav className="mr-auto">
        {headerNav.map((link) => (
          <Button
            variant={"transparent"}
            size={"default"}
            key={link.label}
            asChild
          >
            <Link to={link.link}>{link.label}</Link>
          </Button>
        ))}
      </nav>
      {isCookie ? (
        <div className="flex items-center gap-2.5">
          <div className="flex gap-2.5">
            <UserRound />
            Бутусов Денис
          </div>
          <Button variant={"outline"}>
            <ShoppingCart />
          </Button>
        </div>
      ) : null}
      {loginButtons.map((button) => (
        <Button
          key={button.label}
          variant={isCookie ? "transparent" : "default"}
          className={cn(isHiddenButton(button.isAuth) && "hidden")}
        >
          {button.icon && <button.icon className="mr-1.5" />}
          {button.label}
        </Button>
      ))}
    </header>
  );
}
