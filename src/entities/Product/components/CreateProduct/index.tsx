import { GeneralForm } from "@/shared/components/GeneralForm";
import {
  createProductSchema,
  TCreateProductSchema,
} from "./createProductSchema";
import { contentFormAddImages, createProduct } from "./constants";
import { ICreateProductProps } from "./interface";
import { useMemo } from "react";
import { AddImagesFields } from "@/shared/components/GeneralForm/AddImages/AddImages";
import { FormProvider, useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { ButtonForm } from "@/shared/components/ButtonForm/ButtonForm";
import { useCreateProduct } from "../../hooks/useCreateProduct";

export function CreateProduct(props: ICreateProductProps) {
  const { categories } = props;

  const methods = useForm<TCreateProductSchema>({
    resolver: valibotResolver(createProductSchema),
  });

  const formattedCreateProduct = useMemo(
    () => ({
      ...createProduct,
      formFields: createProduct.formFields.map((field) => {
        if (field.name === "categoryId") {
          return {
            ...field,
            variant: categories.map(({ name }) => ({
              label: name,
              value: name,
            })),
          };
        }
        return field;
      }),
    }),
    [categories],
  );

  const { onSubmit } = useCreateProduct(categories);

  return (
    <FormProvider {...methods}>
      <div className="mx-auto w-[30vw] flex flex-col gap-6">
        <GeneralForm
          onSubmit={onSubmit}
          formConfig={formattedCreateProduct}
          className="w-full"
          formId="create-product-form"
        />
        <AddImagesFields mode="create" {...contentFormAddImages} />
        <ButtonForm
          formId="create-product-form"
          mode={formattedCreateProduct.mode}
          {...formattedCreateProduct.buttonForm}
        />
      </div>
    </FormProvider>
  );
}
