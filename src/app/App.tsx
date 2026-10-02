import { AuthFormPage } from "@/page/AuthPage";
import { BasketPage } from "@/page/Basket";
import { Catalog } from "@/page/Catalog";
import { Home } from "@/page/Home";
import { ProductPage } from "@/page/Product";
import { RegistrationFormPage } from "@/page/RegistrationPage";
import { UserProfilePage } from "@/page/UserProfile";
import { AppRoute } from "@/shared/config/route";
import { Footer } from "@/widgets/Footer";
import { Header } from "@widgets/Header";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { useInitializeAuth } from "@/shared/hooks/useInitializeAuth";
import { useEffect } from "react";
import { EditUserProfilePage } from "@/page/EditUserProfile";
import { Toaster } from "@/shared/ui/sonner";
import { CreateProductPage } from "@/page/CreateProductPage";
import { ProductManagementPage } from "@/page/ProductManagementPage";
import { RoleRoute } from "./RoleRoute";

function App() {
  const { getUserByRefresh } = useInitializeAuth();

  useEffect(() => {
    getUserByRefresh();
  }, [getUserByRefresh]);
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path={AppRoute.Home} element={<Home />} />
          <Route path={AppRoute.Catalog} element={<Catalog />} />
          <Route path={AppRoute.Product} element={<ProductPage />} />
          <Route path={AppRoute.Basket} element={<BasketPage />} />
          <Route
            path={AppRoute.RegistrationForm}
            element={<RegistrationFormPage />}
          />
          <Route path={AppRoute.AuthForm} element={<AuthFormPage />} />
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
        </Routes>
      </main>
      <Toaster />
      <Footer />
    </>
  );
}

export default App;

//	"email": john@mail.com,
//	"password": changeme
//для авториззации

// https://i.imgur.com/LDOO4Qs.jpg
// https://upload.wikimedia.org/wikipedia/commons/9/9c/Darth_Vader_-_2007_Disney_Weekends.jpg
