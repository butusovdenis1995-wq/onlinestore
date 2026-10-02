import { Link } from "react-router-dom";

import { FieldValues } from "react-hook-form";
import { IFormTitleProps } from "../interface";
import { UserLogo } from "../../UserLogo";

export function FormTitle<T extends FieldValues>(props: IFormTitleProps<T>) {
  const { title, subtitle, mode } = props;
  return (
    <>
      <h2 className="text-2xl font-bold">{title}</h2>
      {subtitle && (
        <div>
          {mode === "edit" ? (
            <div>
              <UserLogo className="size-28 mx-auto my-4" />
              {subtitle.label}
            </div>
          ) : (
            <span className="text-gray-900">
              {mode !== "createProduct" && "Или "}
              {
                <Link
                  className="text-gray-900 font-semibold hover:underline"
                  to={subtitle.link}
                >
                  {subtitle.label}
                </Link>
              }
            </span>
          )}
        </div>
      )}
    </>
  );
}
