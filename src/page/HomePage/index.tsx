import { Advantages } from "@/entities/Advantages";
import { Categories } from "@/widgets/Сategories";
import { SeasonСollection } from "@entities/SeasonСollection/index";

export default function HomePage() {
  return (
    <div>
      <SeasonСollection />
      <Categories />
      <Advantages />
    </div>
  );
}
