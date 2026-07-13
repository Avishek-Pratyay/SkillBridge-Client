import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
const MainLayout = () => {
  return (
    <>
            <ScrollToTop />

      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;