import { EditProduct, ProductCard } from "@/entities/Product";
import { useGetProductQuery } from "@/entities/Product/api/apiProduct";
import { Spinner } from "@/shared/ui/spinner";
import { useGetCategoriesQuery } from "@/widgets/Сategories/api/categoriesApi";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export function ProductPage() {
  const [mode, setMode] = useState("demonstration");
  const { id } = useParams();
  const { state } = useLocation();

  const { data: product, isLoading } = useGetProductQuery(id, {
    skip: !id,
  });
  const { data: categories } = useGetCategoriesQuery();

  if (isLoading) {
    return <Spinner />;
  }

  if (!product) {
    return null;
  }

  return (
    <section className="content-px">
      {mode === "demonstration" && (
        <ProductCard
          product={product}
          setMode={setMode}
          mode={mode}
          state={state}
        />
      )}
      {mode === "edit" && categories && (
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
