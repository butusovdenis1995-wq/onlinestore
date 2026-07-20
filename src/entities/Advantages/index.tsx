import { advantagesList } from "./constants";

export function Advantages() {
  return (
    <section className="content-px flex flexCenter gap-x-14 mb-28">
      {advantagesList.map((advantage) => (
        <div className="flex flex-col gap-5 flexCenter">
          <div className="size-18 bg-black rounded-full flexCenter text-3xl text-white">
            {advantage.logo}
          </div>
          <h3 className="text-xl font-bold">{advantage.advantage}</h3>
          <span className="text-lg text-gray-600">{advantage.conditions}</span>
        </div>
      ))}
    </section>
  );
}
