import { Link } from "react-router-dom";
import {
  company,
  contacts,
  descriptionShop,
  forByers,
  legalInformation,
} from "./constants";

export function Footer() {
  return (
    <section className="grid grid-cols-4 gap-x-10 bg-gray-900 text-white content-px py-14 ">
      <div className="flexCol gap-y-2">
        <h3 className="text-xl font-bold">{descriptionShop.title}</h3>
        <span className="text-base text-gray-400">
          {descriptionShop.description}
        </span>
      </div>
      <div className="flexCol gap-y-2">
        <h3 className="text-xl font-bold">{forByers.title}</h3>
        {forByers.links.map((link) => (
          <Link
            className="text-base text-gray-400"
            key={link.chapter}
            to={link.link}
          >
            {link.chapter}
          </Link>
        ))}
      </div>
      <div className="flexCol gap-y-2">
        <h3 className="text-xl font-bold">{company.title}</h3>
        {company.links.map((link) => (
          <Link
            className="text-base text-gray-400"
            key={link.chapter}
            to={link.link}
          >
            {link.chapter}
          </Link>
        ))}
      </div>
      <div className="flexCol gap-y-2 text-base text-gray-400">
        <h3 className="text-xl text-white font-bold">{contacts.title}</h3>
        <div className="flex gap-x-2">
          {contacts.media.map((media) => (
            <Link key={media.link} to={media.link}>
              <media.icon />
            </Link>
          ))}
        </div>
        <div>{contacts.contacts.tel}</div>
        <div>{contacts.contacts.email}</div>
      </div>
      <div className="col-span-4 mt-10 border-t border-white text-center pt-10 text-base text-gray-400">
        <span className="">{legalInformation.info}</span>
      </div>
    </section>
  );
}
