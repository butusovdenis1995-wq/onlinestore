import { Outlet } from "react-router-dom";
import { ScrollTo } from "./ScrollToTo";
import { Header } from "@/widgets/Header";
import { Toaster } from "sonner";
import { Footer } from "@/widgets/Footer";

export default function Layout() {
  return (
    <>
      <ScrollTo />
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Toaster />
      <Footer />
    </>
  );
}
