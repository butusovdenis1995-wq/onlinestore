import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link className="flex items-center  gap-3" to={"/"}>
      <div className="flexCenter size-8 bg-black rounded-md text-white">M</div>
      <h1 className="text-xl font-bold">Fashion Store</h1>
    </Link>
  );
}
