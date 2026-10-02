import { IProductCardProps } from "@/entities/Product/api/interface";

export function ProductDescription(props: Pick<IProductCardProps, "product">) {
  const { product } = props;
  return (
    <section className="flex flex-col gap-y-6">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <h1 className="text-3xl font-bold">{product.price} $</h1>
      <div className="inline-flex items-center w-fit h-10 rounded-sm bg-gray-400 ">
        <span className="text-base text-black font-bold mx-3">
          {product.category.name}
        </span>
      </div>
      <div className="text-base">{product.description}</div>
    </section>
  );
}
