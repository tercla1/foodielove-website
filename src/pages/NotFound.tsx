
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-recipe-lightGray">
        <div className="text-center px-4 py-20">
          <h1 className="text-5xl font-bold mb-4 text-recipe-orange">404</h1>
          <p className="text-xl text-gray-700 mb-6">Oops! We couldn't find that recipe.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/">
              <Button>Return to Home</Button>
            </Link>
            <Link to="/recipes">
              <Button variant="outline">Browse Recipes</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
