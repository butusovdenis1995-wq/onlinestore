import { valibotResolver } from "@hookform/resolvers/valibot";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { editProductSchema, TEditProductSchema } from "./editProductSchema";
import { IProductCardProps } from "../../api/interface";
import { Input } from "@/shared/ui/input";
import { AddImagesFields } from "@/shared/components/GeneralForm/AddImages/AddImages";
import { Textarea } from "@/shared/ui/textarea";
import { contentFormAddImages } from "../CreateProduct/constants";
import { Field, FieldError } from "@/shared/ui/field";
import { ButtonForm } from "@/shared/components/ButtonForm/ButtonForm";
import { buttonFormEditProduct } from "./constants";
import { useEditProduct } from "../../hooks/useEditProduct";
import { Spinner } from "@/shared/ui/spinner";

export function EditProduct(props: IProductCardProps) {
  const { product, setMode, categories } = props;
  const { description, price, images, title, category } = product;
  const { buttonReturn, buttonSubmit } = buttonFormEditProduct;

  const methods = useForm<TEditProductSchema>({
    resolver: valibotResolver(editProductSchema),

    defaultValues: {
      title,
      price,
      description,
      images,
      categoryId: category.name,
    },
  });

  const { control, handleSubmit } = methods;

  function handelReturn() {
    setMode("demonstration");
  }

  const { onSubmit, isLoading } = useEditProduct(categories ?? [], product.id);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <section className="grid grid-cols-2 gap-6 mt-13">
      <FormProvider {...methods}>
        <AddImagesFields mode={"edit"} {...contentFormAddImages} />
        <form
          className="flex flex-col gap-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="title"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState?.invalid}>
                <Input
                  className="py-6 text-3xl font-bold"
                  {...field}
                  type="text"
                  value={field.value}
                />
                {fieldState?.invalid && (
                  <FieldError errors={[fieldState?.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="price"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState?.invalid}>
                <div className="flex items-center gap-x-2">
                  <Input
                    className="field-sizing-content w-fit py-6 text-3xl font-bold "
                    {...field}
                    type="number"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                  <span className="text-3xl font-bold">$</span>
                </div>
                {fieldState?.invalid && (
                  <FieldError errors={[fieldState?.error]} />
                )}
              </Field>
            )}
          />
          <div className="inline-flex items-center w-fit h-10 rounded-sm bg-gray-400 ">
            <Controller
              name="categoryId"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState?.invalid}>
                  <Input
                    className="field-sizing-content w-fit text-base text-black font-bold border-none"
                    {...field}
                    type="text"
                    value={field.value}
                  />
                  {fieldState?.invalid && (
                    <FieldError errors={[fieldState?.error]} />
                  )}
                </Field>
              )}
            />
          </div>
          <Controller
            name="description"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState?.invalid}>
                <Textarea
                  className="text-base field-sizing-content "
                  {...field}
                  value={field.value}
                />
                {fieldState?.invalid && (
                  <FieldError errors={[fieldState?.error]} />
                )}
              </Field>
            )}
          />
          <ButtonForm
            handelReturn={handelReturn}
            buttonSubmit={buttonSubmit}
            buttonReturn={buttonReturn}
          ></ButtonForm>
        </form>
      </FormProvider>
    </section>
  );
}
