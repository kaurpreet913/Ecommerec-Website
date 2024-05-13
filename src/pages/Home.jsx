import React from "react";
import Hero from "../components/Hero/Hero";
import Feature from "../components/Feature/Feature";
import CarouselComponent from "../components/Craousel/Carousel"; 
import Products from "../components/Products/Products";
import ProductSwiper from "../components/Swiper/Swiper";
import Categories from "../components/Categories/Categories";
import CategorySection from "../components/categoriesSection/categorySection";
import Footer from "../components/Footer/Footer";
import ItemDetails from "../components/Item/ItemDetails";




const Home = () => {
    return(
        <div>
          <Hero />
          <Feature />
          <CarouselComponent />
          <Products />
          <ProductSwiper />
          <Categories />
          <CategorySection />
          <Footer />
        </div>
    )
}

export default Home