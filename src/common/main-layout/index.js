import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Switcher from "../swich/Switcher";
import Loader from "../loader";

const MainLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.classList.add("dark");
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          {children}
          <Switcher />
          <Footer />
        </>
      )}
    </>
  );
};

export default MainLayout;
