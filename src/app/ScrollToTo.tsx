import { AppRoute } from "@/shared/config/route";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollTo() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (pathname === AppRoute.Catalog && state) {
      window.scrollTo(0, state.scrollY);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  return null;
}
