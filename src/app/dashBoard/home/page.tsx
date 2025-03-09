'use client'
import React from "react";
import { useClerk } from "@clerk/clerk-react";  // Importujemy hooka useClerk
import { useRouter } from 'next/navigation';
import Navbar from "../../components/Navbar/Navbar";
import MagicalFeatures from "../../components/Home/MagicalFeatures";
import { AboutUs } from "../../components/Home/AboutUs";
import MagicBookCategories from "../../components/Home/MagicBookCategories";
import Footer from "../../components/Footer/Footer";


const dashBoard = () => {
  return (
    <>
      <Navbar />
      <MagicalFeatures />
      <AboutUs />
      <MagicBookCategories />
      <Footer />
    </>
  );
};

export default dashBoard;
