import { UserLogo } from "@/shared/components/UserLogo";
import { WrapperCard } from "@/shared/components/WrapperCard";
import { useAppSelector } from "@/shared/config/hooks";
import { Button } from "@/shared/ui/button";
import { Shield } from "lucide-react";
import {
  productPluralize,
  userEditProfile,
  userLogOut,
  userProfileButtonContent,
  userProfileContent,
} from "./constants";
import { Link, useNavigate } from "react-router-dom";
import { useHandelButtonAuth } from "@/shared/hooks/useHandelButtonAuth";
import { ProductCounter } from "@/shared/components/ProductCounter";
import { useCalcTotalQuantityItem } from "@/shared/hooks/useCalcTotalQuantityItem";
import { pluralize } from "@/shared/lib/pluralize";

export function UserProfile() {
  const userData = useAppSelector((state) => state.userData.userData);
  const handelButtonAuth = useHandelButtonAuth();
  const totalQuantityBasket = useCalcTotalQuantityItem();
  const navigate = useNavigate();

  function quantityProductInBasket() {
    const quantityProduct = pluralize(totalQuantityBasket, productPluralize);
    return <span>{`${totalQuantityBasket} ${quantityProduct}`}</span>;
  }

  return (
    <section className="flex flex-col gap-y-5 w-min-96 w-[40%] mx-auto p-10">
      <WrapperCard className="flex flex-col relative h-72 border border-gray-300 shadow-md">
        <div className="bg-linear-to-r from-gray-900 to-gray-700 h-32"></div>
        <UserLogo className="size-35 absolute left-8 top-16 border-6 border-white" />
        <div className="flex flex-1 justify-between p-5">
          <div className="mt-auto">
            <h1 className="text-2xl font-bold">{userData?.name}</h1>
            <div className="flex items-center gap-2 bg-blue-100 border border-blue-400 rounded-2xl py-0.5 px-1.5">
              <Shield className="text-blue-400" size={"18"} />
              <span className="text-sm font-bold text-blue-400">
                {userData?.role}
              </span>
            </div>
          </div>
          <Button
            onClick={() => navigate(userEditProfile.path)}
            variant={"outline"}
          >
            <userEditProfile.logo size={"18"} className="mr-3" />
            {userEditProfile.label}
          </Button>
        </div>
      </WrapperCard>
      <WrapperCard className="shadow-md">
        {userProfileContent.map(({ label, key, logo: Logo }) => (
          <div className="flex gap-4 items-center border-b border-gray-300 p-4">
            <Logo className="text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">{label}</p>
              {userData && (
                <p className="text-base font-medium text-gray-900">
                  {userData[key]}
                </p>
              )}
            </div>
          </div>
        ))}
      </WrapperCard>
      <div className=" grid grid-cols-2 gap-x-6">
        {userProfileButtonContent.map(
          ({ content, label, logo: Logo, path }) => (
            <WrapperCard className="group h-21 shadow-md hover:shadow-xl">
              <Link className="relative flex items-center gap-4 p-4" to={path}>
                <WrapperCard className="flexCenter size-13 bg-gray-200 group-hover:bg-black">
                  {label === "Корзина" && (
                    <ProductCounter className="absolute size-6 text-xs top-1 left-13" />
                  )}
                  <Logo className="group-hover:text-white" />
                </WrapperCard>
                <div>
                  <p>{label}</p>
                  <p>
                    {label !== "Корзина" || totalQuantityBasket === 0
                      ? content
                      : quantityProductInBasket()}
                  </p>
                </div>
              </Link>
            </WrapperCard>
          ),
        )}
      </div>
      <Button
        onClick={() => handelButtonAuth(true)}
        className="border border-red-400 bg-white"
        variant={"destructive"}
        size={"sm"}
      >
        <userLogOut.logo />
        {userLogOut.label}
      </Button>
    </section>
  );
}
