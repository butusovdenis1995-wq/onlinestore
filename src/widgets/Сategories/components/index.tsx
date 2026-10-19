import { WrapperCard } from "@/shared/components/WrapperCard";
import { useGetCategoriesQuery } from "../api/categoriesApi";
import { Spinner } from "@/shared/ui/spinner";
import { useAppDispatch } from "@/shared/config/hooks";
import { setCategory } from "@/features/FilterProduct/model/filterProductSlice";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "@/shared/config/route";
import { Img } from "@/shared/components/Img";

export function Categories() {
  const { data: categories, isError, isLoading } = useGetCategoriesQuery();
  const dispatchSetCategory = useAppDispatch();
  const navigate = useNavigate();

  if (isLoading) {
    return <Spinner className="size-12 text-gray-600 mx-auto block my-14" />;
  }

  if (isError) {
    return (
      <div className="content-px flexCenter">
        К сожалению не удалось загрузить категорию. Обновите страницу или
        попробуйдет позже
      </div>
    );
  }

  function handlerClickCategory(category: string) {
    dispatchSetCategory(
      setCategory({
        categoryName: category,
        categoryRequest: category.toLocaleLowerCase().replaceAll(" ", "-"),
      }),
    );
    navigate(AppRoute.Catalog);
  }

  return (
    <section className="content-px grid grid-cols-4 gap-7 mb-22">
      <h2 className="text-3xl font-bold col-span-4">Категории</h2>
      {categories?.map((category) => (
        <WrapperCard
          key={category.id}
          className="relative overflow-hidden border border-gray-400 shadow-md"
        >
          <Img
            alt="Logo"
            src={category.image}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
            onClick={() => handlerClickCategory(category.name)}
          />
          <div className="absolute bottom-2 left-3">
            <span className="text-3xl font-bold text-white/80">
              {category.name}
            </span>
          </div>
        </WrapperCard>
      ))}
    </section>
  );
}
