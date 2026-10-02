import { Button } from "@/shared/ui/button";
import { ShoppingBag } from "lucide-react";
import { emptyBasketContent } from "./constants";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "@/shared/config/route";

export function EmptyBasket() {
  const { buttonGoToCatalog, collAdd, emptyBasket } = emptyBasketContent;
  const navigate = useNavigate();
  return (
    <section className="min-h-[calc(100vh-var(--header-height))] flex justify-center">
      <div className="flex flex-col items-center justify-center gap-6">
        <ShoppingBag className="size-18 text-gray-600" />
        <h2 className="text-2xl font-bold">{emptyBasket}</h2>
        <p className="text-gray-600">{collAdd}</p>
        <Button
          onClick={() => navigate(AppRoute.Catalog)}
          size={"sm"}
          variant={"default"}
        >
          {buttonGoToCatalog}
        </Button>
      </div>
    </section>
  );
}
