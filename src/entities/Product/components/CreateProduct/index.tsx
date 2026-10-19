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
import { useNavigate } from "react-router-dom";
import { AppRoute } from "@/shared/config/route";
import { Spinner } from "@/shared/ui/spinner";
import { RequestError } from "@/shared/components/RequestError";

export function CreateProduct(props: ICreateProductProps) {
  const { categories } = props;
  const navigate = useNavigate();

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

  const { onSubmit, error, isLoading } = useCreateProduct(categories);

  function handelReturn() {
    navigate(AppRoute.ProductManagement);
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <RequestError error={error} />;
  }

  return (
    <FormProvider {...methods}>
      <div className="mx-auto w-[30vw] flex flex-col gap-6">
        <GeneralForm
          onSubmit={onSubmit}
          formConfig={formattedCreateProduct}
          className="w-full"
          formId="create-product-form"
          handelReturn={handelReturn}
        />
        <AddImagesFields mode="create" {...contentFormAddImages} />
        <ButtonForm
          formId="create-product-form"
          handelReturn={handelReturn}
          mode={formattedCreateProduct.mode}
          {...formattedCreateProduct.buttonForm}
        />
      </div>
    </FormProvider>
  );
}
