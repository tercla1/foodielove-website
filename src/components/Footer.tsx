
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-recipe-lightGray border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold">FoodieLove</h3>
            <p className="mt-2 text-sm text-gray-600">
              Share your love for cooking with the world.
            </p>
          </div>
          
          <div>
            <h3 className="text-base font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-recipe-orange">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-sm text-gray-600 hover:text-recipe-orange">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/add-recipe" className="text-sm text-gray-600 hover:text-recipe-orange">
                  Add Recipe
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold">Categories</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/recipes?category=Breakfast" className="text-sm text-gray-600 hover:text-recipe-orange">
                  Breakfast
                </Link>
              </li>
              <li>
                <Link to="/recipes?category=Lunch" className="text-sm text-gray-600 hover:text-recipe-orange">
                  Lunch
                </Link>
              </li>
              <li>
                <Link to="/recipes?category=Dinner" className="text-sm text-gray-600 hover:text-recipe-orange">
                  Dinner
                </Link>
              </li>
              <li>
                <Link to="/recipes?category=Dessert" className="text-sm text-gray-600 hover:text-recipe-orange">
                  Dessert
                </Link>
              </li>
              <li>
                <Link to="/recipes?category=Appetizers" className="text-sm text-gray-600 hover:text-recipe-orange">
                  Appetizers
                </Link>
              </li>
              <li>
                <Link to="/recipes?category=Drinks" className="text-sm text-gray-600 hover:text-recipe-orange">
                  Drinks
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold">Connect</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-recipe-orange">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-recipe-orange">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-recipe-orange">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-xs text-gray-600">
            &copy; {new Date().getFullYear()} FoodieLove. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
