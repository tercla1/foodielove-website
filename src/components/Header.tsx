
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Menu, Plus, HandHeart } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-30 w-full bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl text-recipe-orange">Foodie<span className="text-recipe-darkText">Love</span></span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-recipe-orange">
              Home
            </Link>
            <Link to="/recipes" className="text-sm font-medium transition-colors hover:text-recipe-orange">
              Recipes
            </Link>
            <Link to="/about" className="text-sm font-medium transition-colors hover:text-recipe-orange">
              About
            </Link>
            <Link to="/donation" className="text-sm font-medium transition-colors hover:text-recipe-orange">
              Donate
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
          
          <Link to="/add-recipe">
            <Button className="hidden md:flex bg-recipe-orange hover:bg-amber-600">
              <Plus className="mr-2 h-4 w-4" />
              Add Recipe
            </Button>
          </Link>
          
          <Link to="/donation" className="hidden md:flex">
            <Button variant="outline" className="border-recipe-orange text-recipe-orange hover:bg-recipe-orange hover:text-white">
              <HandHeart className="mr-2 h-4 w-4" />
              Donate
            </Button>
          </Link>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
