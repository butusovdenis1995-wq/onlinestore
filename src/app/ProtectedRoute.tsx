import { useAppSelector } from "@/shared/config/hooks";
import { AppRoute } from "@/shared/config/route";
import { Spinner } from "@/shared/ui/spinner";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function ProtectedRoute() {
  const location = useLocation();
  const { authStatus, userData } = useAppSelector((state) => state.userData);

  if (authStatus === "checking") {
    return <Spinner />;
  }
  if (authStatus === "unauthenticated" || !userData) {
    return (
      <Navigate to={AppRoute.AuthForm} replace state={{ from: location }} />
    );
  }
  return <Outlet />;
}
