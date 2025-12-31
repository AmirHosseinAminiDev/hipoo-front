import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Pricing from '../pages/Pricing';
import Trainers from '../pages/Trainers';
import TrainerDetail from '../pages/TrainerDetail';
import Classes from '../pages/Classes';
import About from '../pages/About';
import Contact from '../pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'trainers', element: <Trainers /> },
      { path: 'trainers/:id', element: <TrainerDetail /> },
      { path: 'classes', element: <Classes /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

export default router;
