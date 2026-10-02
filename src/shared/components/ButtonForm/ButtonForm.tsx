import { Button } from "@/shared/ui/button";
import { IButtonFormProps } from "./interface";
import { cn } from "@/shared/lib/cn";

export function ButtonForm(props: IButtonFormProps) {
  const { buttonSubmit, className, mode, buttonReturn, formId, handelReturn } =
    props;
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 w-full",
        mode === "createProduct" && "bg-white rounded-2xl p-6",
        className,
      )}
    >
      <Button
        form={formId}
        type="submit"
        className="w-full mt-4"
        variant={"default"}
        size={"sm"}
      >
        {buttonSubmit}
      </Button>

      {buttonReturn && (
        <Button onClick={handelReturn} type="button" variant={"transparent"}>
          {buttonReturn}
        </Button>
      )}
    </div>
  );
}
