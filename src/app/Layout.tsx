import { Outlet } from "react-router-dom";
import { ScrollToTop } from "./ScrollToTop";
import { Header } from "@/widgets/Header";
import { Toaster } from "sonner";
import { Footer } from "@/widgets/Footer";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Toaster />
      <Footer />
    </>
  );
}
