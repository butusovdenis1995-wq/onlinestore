import { Catalog } from "@/page/Catalog";
import { Home } from "@/page/Home";
import { Product } from "@/page/Product";
import { AppRoute } from "@/shared/config/route";
import { Footer } from "@/widgets/Footer";
import { Header } from "@widgets/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path={AppRoute.Home} element={<Home />} />
          <Route path={AppRoute.Catalog} element={<Catalog />} />
          <Route path={AppRoute.Product} element={<Product />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

// return (
//   <>
//     <Header />
//     <main>
//       <Routes>
//         <Route path={AppRoute.Home} element={<ArticlesListPage />} />
//         <Route path={AppRoute.Article} element={<ArticlePage />} />
//         <Route path={AppRoute.SignIn} element={<SignInPage />} />
//         <Route path={AppRoute.SignUp} element={<SignUpPage />} />
//         <Route path={AppRoute.AddArticle} element={<AddArticlePage />} />
//         <Route path={AppRoute.EditProfile} element={<EditProfile />} />
//       </Routes>
//     </main>
//   </>
// );
