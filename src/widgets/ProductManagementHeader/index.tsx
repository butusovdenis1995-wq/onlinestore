import { Button } from "@/shared/ui/button";
import { contentManagementHeader } from "./constants";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "@/shared/config/route";
import { IProductManagementHeaderProps } from "./interface";

export function ProductManagementHeader({
  countProduct,
}: IProductManagementHeaderProps) {
  const {
    buttonCreateProduct,
    title,
    totalProduct,
    iconButton: IconButton,
  } = contentManagementHeader;
  const navigate = useNavigate();
  return (
    <section className="content-px flex justify-between py-8">
      <div>
        <h1 className="text-3xl font-bold text-black mb-4">{title}</h1>
        <p className="text-base text-gray-700">
          {totalProduct}
          {countProduct}
        </p>
      </div>
      <Button
        onClick={() => navigate(AppRoute.CreateProduct)}
        size={"sm"}
        className="my-auto"
      >
        <IconButton className="mr-4" />
        {buttonCreateProduct}
      </Button>
    </section>
  );
}
