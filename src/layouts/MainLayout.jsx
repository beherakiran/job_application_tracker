import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div>
      <Navbar />

      <main className="p-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
