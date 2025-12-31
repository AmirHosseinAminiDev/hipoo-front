import React from 'react';
import Hero from '../sections/Hero';
import ServicesPreview from '../sections/ServicesPreview';
import PricingPreview from '../sections/PricingPreview';
import TrainersPreview from '../sections/TrainersPreview';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import FinalCTA from '../sections/FinalCTA';
import GalleryPreview from '../sections/GalleryPreview';

function Home() {
  return (
    <div className="space-y-14">
      <Hero />
      <GalleryPreview />
      <ServicesPreview />
      <PricingPreview />
      <TrainersPreview />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  );
}

export default Home;
