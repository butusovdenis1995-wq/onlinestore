import { Navigate, Outlet } from "react-router-dom";
import { IRoleRouteProps } from "./interface";
import { useAppSelector } from "@/shared/config/hooks";
import { AppRoute } from "@/shared/config/route";

export function RoleRoute(props: IRoleRouteProps) {
  const userData = useAppSelector((state) => state.userData.userData);
  const { allowedRoles } = props;

  if (!allowedRoles.includes(userData?.role ?? "")) {
    return <Navigate to={AppRoute.UserProfile} replace />;
  }

  return <Outlet />;
}
