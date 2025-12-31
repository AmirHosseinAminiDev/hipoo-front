import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MainLayout() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <main className="section-container py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
