import { EditProduct, ProductCard } from "@/entities/Product";
import { useGetProductQuery } from "@/entities/Product/api/apiProduct";
import { TSetModeProductCard } from "@/entities/Product/api/interface";
import { RequestError } from "@/shared/components/RequestError";
import { Spinner } from "@/shared/ui/spinner";
import { useGetCategoriesQuery } from "@/widgets/Сategories/api/categoriesApi";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function ProductPage() {
  const [mode, setMode] = useState<TSetModeProductCard>("demonstration");
  const { id } = useParams();
  const { state } = useLocation();

  const {
    data: product,
    isLoading: isLoadingProduct,
    error: errorProduct,
  } = useGetProductQuery(id, {
    skip: !id,
  });
  const {
    data: categories,
    isLoading: isLoadingCategories,
    error: errorCategories,
  } = useGetCategoriesQuery();

  if (isLoadingProduct || isLoadingCategories) {
    return <Spinner />;
  }

  if (errorProduct) {
    return <RequestError error={errorProduct} />;
  }

  if (errorCategories) {
    return <RequestError error={errorCategories} />;
  }

  return (
    <section className="content-px">
      {mode === "demonstration" && product && (
        <ProductCard
          product={product}
          setMode={setMode}
          mode={mode}
          state={state}
        />
      )}
      {mode === "edit" && categories && product && (
        <EditProduct
          product={product}
          setMode={setMode}
          mode={mode}
          state={state}
          categories={categories}
        />
      )}
    </section>
  );
}
