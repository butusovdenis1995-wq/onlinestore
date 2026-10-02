import { Button } from "@/shared/ui/button";
import { WrapperCard } from "../../WrapperCard";
import { Input } from "@/shared/ui/input";
import { useController } from "react-hook-form";
import { ChangeEvent, useState } from "react";
import { TCreateProductSchema } from "@/entities/Product/components/CreateProduct/createProductSchema";
import { IAddImagesFieldsProps } from "./interface";
import { Field, FieldError, FieldLabel } from "@/shared/ui/field";
import { cn } from "@/shared/lib/cn";
import { TagGeneral } from "../../TagGeneral/TagGeneral";

export function AddImagesFields(props: IAddImagesFieldsProps) {
  const { buttonAction, label, subtitle, placeholder, required, mode } = props;
  const { field, fieldState } = useController<TCreateProductSchema, "images">({
    name: "images",
  });
  const [imageUrl, setImageUrl] = useState("");
  const images = field.value ?? [];

  function handleImageUrl(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setImageUrl(value);
  }

  function addImage() {
    if (!imageUrl.trim()) {
      return;
    }
    field.onChange([...images, imageUrl]);
    setImageUrl("");
  }

  function selectionGeneralImage(imageGeneral: string) {
    field.onChange([
      imageGeneral,
      ...images.filter((image) => image !== imageGeneral),
    ]);
  }

  function removeImage(imageRemove: string) {
    field.onChange([...images.filter((image) => image !== imageRemove)]);
  }

  return (
    <div>
      {mode === "edit" && (
        <img
          className="mb-4 rounded-2xl"
          src={images.at(0)}
          alt="ProductGeneral"
        />
      )}
      <WrapperCard className="p-6">
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>
            {label} {required && <span className="text-red-500 ml-0.5">*</span>}
          </FieldLabel>
          <div className="text-sm text-gray-500">{subtitle}</div>
          <div className="flex gap-3">
            <Input
              required
              placeholder={placeholder}
              value={imageUrl}
              onChange={(event) => handleImageUrl(event)}
            />
            <Button onClick={addImage} variant={"outline"} type="button">
              {buttonAction}
            </Button>
          </div>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          <div className="flex gap-4">
            {images.map((image, index) => (
              <WrapperCard
                key={image}
                className="group relative w-25 h-37 overflow-hidden"
              >
                <img
                  onClick={() => selectionGeneralImage(image)}
                  className={cn(
                    "w-full h-full object-cover rounded-2xl",
                    index === 0 && "border border-black",
                  )}
                  src={image}
                />
                <Button
                  onClick={() => removeImage(image)}
                  variant={"destructive"}
                  type="button"
                  className="absolute -top-1 left-13 opacity-0  group-hover:opacity-100 transition-opacity
                bg-red-50 hover:bg-red-100"
                >
                  ×
                </Button>
                {index === 0 && (
                  <TagGeneral
                    label="Главная"
                    className="top-[82%] left-[40%]"
                  />
                )}
              </WrapperCard>
            ))}
          </div>
        </Field>
      </WrapperCard>
    </div>
  );
}
