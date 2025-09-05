import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Catalog from './components/Catalog';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-neutral-950 via-[#0a0a12] to-[#120022] min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Catalog />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;