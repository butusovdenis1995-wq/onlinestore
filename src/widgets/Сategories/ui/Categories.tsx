import { WrapperCard } from "@/shared/components/WrapperCard";
import { useGetCategoriesQuery } from "../api/categoriesApi";
import { Spinner } from "@/shared/ui/spinner";

export function Categories() {
  const { data: categories, isError, isLoading } = useGetCategoriesQuery();

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

  return (
    <section className="content-px grid grid-cols-4 gap-7 mb-22">
      <h2 className="text-3xl font-bold col-span-4">Категории</h2>
      {categories?.map((category) => (
        <WrapperCard
          key={category.id}
          className="relative overflow-hidden border border-gray-400 shadow-md"
        >
          <img
            src={category.image}
            alt="Logo"
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              img.src = "../../../../public/box.png";
              img.onerror = null;
            }}
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
