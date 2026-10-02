import { Logo } from "@/shared/components/Logo";
import { headerNav, loginButtons } from "./constants";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { ShoppingCart } from "lucide-react";
import { AppRoute } from "@/shared/config/route";
import { ProductCounter } from "@/shared/components/ProductCounter";
import { UserDropDown } from "@/shared/components/UserDropDown";
import { useHandelButtonAuth } from "@/shared/hooks/useHandelButtonAuth";
import { useAppSelector } from "@/shared/config/hooks";

export function Header() {
  const navigate = useNavigate();

  const { userData, authStatus } = useAppSelector((state) => state.userData);

  console.log(userData);
  console.log(authStatus);

  function isHiddenButton(isAuth: boolean) {
    return !!userData === isAuth;
  }

  const handelButtonAuth = useHandelButtonAuth();

  return (
    <header className="content-px flex items-center py-6 fixed top-0 left-0 right-0 bg-white z-100">
      <Logo />
      <nav className="mr-auto ml-10">
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

      <div className="flex items-center gap-2.5">
        {userData && <UserDropDown {...userData} />}

        <Button
          className="relative mr-5"
          onClick={() => navigate(AppRoute.Basket)}
          variant={"outline"}
        >
          <ProductCounter className="absolute bottom-5 left-12" />
          <ShoppingCart />
        </Button>
      </div>

      {isHiddenButton(loginButtons.isAuth) && (
        <Button
          onClick={() => handelButtonAuth(loginButtons.isAuth)}
          variant={"default"}
          size={"xs"}
        >
          {loginButtons.label}
        </Button>
      )}
    </header>
  );
}
