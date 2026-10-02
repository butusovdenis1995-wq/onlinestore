import { Link } from "react-router-dom";
import { AppRoute } from "@/shared/config/route";
import { ImagesCarousel } from "@/shared/components/ImagesCarousel";
import { ProductDescription } from "@/shared/components/ProductDescription";
import { buttonStepBack } from "./constants";
import { ChevronLeftIcon } from "lucide-react";
import { AddBasket } from "@/features/AddBasket";
import { IProductCardProps } from "../../api/interface";
import { Button } from "@/shared/ui/button";

export function ProductCard(props: IProductCardProps) {
  const { product, setMode, state } = props;

  return (
    <article>
      <Link
        className="flex gap-x-2 text-base text-gray-600 mb-6"
        to={AppRoute.Catalog}
      >
        <>
          <ChevronLeftIcon />
          {buttonStepBack}
        </>
      </Link>
      <div className="grid grid-cols-2 gap-6">
        <ImagesCarousel images={product.images} />
        <div>
          <ProductDescription product={product} />
          {state.from === "/catalog" ? (
            <AddBasket product={product} />
          ) : (
            <Button
              className="mt-4"
              variant={"default"}
              size={"sm"}
              onClick={() => setMode("edit")}
            >
              Редактировать
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
