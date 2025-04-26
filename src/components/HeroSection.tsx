
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative">
      <div 
        className="bg-cover bg-center h-[500px] flex items-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80)', 
          backgroundPosition: '0 60%'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Share Your Culinary Masterpieces
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Join our community of food lovers. Discover amazing recipes and share your own creations with the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/add-recipe">
                <Button className="bg-recipe-orange hover:bg-amber-600 text-white font-semibold">
                  Share a Recipe
                </Button>
              </Link>
              
              <Link to="/recipes">
                <Button variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                  <Search className="mr-2 h-4 w-4" />
                  Browse Recipes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
