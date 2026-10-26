import { AppRoute } from "@/shared/config/route";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { useInitializeAuth } from "@/shared/hooks/useInitializeAuth";
import { lazy, Suspense, useEffect } from "react";
import { RoleRoute } from "./RoleRoute";
import { Spinner } from "@/shared/ui/spinner";
import { About } from "@/page/About";

const Layout = lazy(() => import("./Layout"));
const HomePage = lazy(() => import("@/page/HomePage"));
const AuthFormPage = lazy(() => import("@/page/AuthPage"));
const BasketPage = lazy(() => import("@/page/BasketPage"));
const CatalogPage = lazy(() => import("@/page/CatalogPage"));
const ProductPage = lazy(() => import("@/page/ProductPage"));
const RegistrationFormPage = lazy(() => import("@/page/RegistrationPage"));
const UserProfilePage = lazy(() => import("@/page/UserProfilePage"));
const EditUserProfilePage = lazy(() => import("@/page/EditUserProfilePage"));
const CreateProductPage = lazy(() => import("@/page/CreateProductPage"));
const ProductManagementPage = lazy(
  () => import("@/page/ProductManagementPage"),
);

function App() {
  const { getUserByRefresh } = useInitializeAuth();

  useEffect(() => {
    getUserByRefresh();
  }, [getUserByRefresh]);

  return (
    <>
      <Routes>
        <Route
          element={
            <Suspense fallback={<Spinner />}>
              <Layout />
            </Suspense>
          }
        >
          <Route path={AppRoute.Home} element={<HomePage />} />
          <Route path={AppRoute.Catalog} element={<CatalogPage />} />
          <Route path={AppRoute.Product} element={<ProductPage />} />
          <Route path={AppRoute.Basket} element={<BasketPage />} />
          <Route
            path={AppRoute.RegistrationForm}
            element={<RegistrationFormPage />}
          />
          <Route path={AppRoute.AuthForm} element={<AuthFormPage />} />
          <Route path={AppRoute.About} element={<About />} />
          <Route element={<ProtectedRoute />}>
            <Route path={AppRoute.UserProfile} element={<UserProfilePage />} />
            <Route
              path={AppRoute.EditUserProfile}
              element={<EditUserProfilePage />}
            />
            <Route
              path={AppRoute.CreateProduct}
              element={<CreateProductPage />}
            />

            <Route element={<RoleRoute allowedRoles={["admin"]} />}>
              <Route
                path={AppRoute.ProductManagement}
                element={<ProductManagementPage />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

//	"email": john@mail.com,
//	"password": changeme
//для авториззации

// https://i.imgur.com/LDOO4Qs.jpg
// https://upload.wikimedia.org/wikipedia/commons/9/9c/Darth_Vader_-_2007_Disney_Weekends.jpg
