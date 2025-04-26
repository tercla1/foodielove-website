
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturedRecipes from '@/components/FeaturedRecipes';
import LatestRecipes from '@/components/LatestRecipes';
import CategorySection from '@/components/CategorySection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedRecipes />
        <CategorySection />
        <LatestRecipes />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
