import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/shared/ui/alert-dialog";
import { Button } from "@/shared/ui/button";
import { Trash2, TriangleAlert } from "lucide-react";
import { IConfirmDialogProps } from "./interface";
import { useDeleteProduct } from "@/entities/Product/hooks/useDeleteProduct";
import { Spinner } from "@/shared/ui/spinner";

export function ConfirmDialog(props: IConfirmDialogProps) {
  const { deleteProduct, isLoading } = useDeleteProduct();
  const { id, nameProduct } = props;

  if (isLoading) {
    return (
      <Spinner className="size-14 text-gray-600 mx-auto block mt-[50vh]" />
    );
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className="px-1" variant={"destructive"}>
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flexCenter size-12 mx-auto mb-2 bg-red-50 rounded-full ">
            <TriangleAlert color="red" />
          </div>
          <AlertDialogTitle className="mx-auto">
            Удалить товар?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            {`${nameProduct} будет удалён без возможности восстановления.`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex gap-3 border-none bg-white">
          <AlertDialogCancel className="flex-1">Отмена</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => deleteProduct(id)}
            className="flex-1 bg-rose-600"
          >
            Удалить
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
