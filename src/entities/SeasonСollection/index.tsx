import { Button } from "@/shared/ui/button";
import { descriptionSeasons } from "./constants.";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "@/shared/config/route";

export function SeasonСollection() {
  const navigate = useNavigate();
  return (
    <section className="py-38 -mt-8 mb-22 bg-linear-to-r from-gray-900 to-gray-700">
      <div className="content-px max-w-6xl">
        <h1 className="mb-5 text-5xl text-white font-bold">
          {descriptionSeasons.title}
        </h1>
        <div className="mb-5 text-xl text-gray-300">
          {descriptionSeasons.description}
        </div>
        <Button
          onClick={() => navigate(AppRoute.Catalog)}
          className="bg-white text-black"
          variant={"transparent"}
          size={"sm"}
        >
          Перейти в каталог{" >"}
        </Button>
      </div>
    </section>
  );
}
