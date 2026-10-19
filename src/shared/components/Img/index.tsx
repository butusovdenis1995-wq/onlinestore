import { IImgProps } from "./interface";

export function Img(props: IImgProps) {
  const { alt = "", src, className, loading = "lazy", ...prop } = props;
  return (
    <img
      {...prop}
      loading={loading}
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        const img = e.currentTarget as HTMLImageElement;
        img.src = "/box.png";
        img.onerror = null;
      }}
    />
  );
}
