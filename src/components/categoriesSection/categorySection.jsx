import React from "react";
import './categorySection.css';
import { useNavigate } from "react-router-dom";

const CategorySection = () => {
   const categories = ['Vegetable', 'Fruits', 'Dairy Products', 'Drinks', 'Sweets & Snacks', 'Shake'];
   const navigate = useNavigate();
   // Function to get image based on category name
   const getImage = (category) => {
      switch (category) {
         case 'Vegetable':
            return '/assets/veg.jpg';
         case 'Fruits':
            return '/assets/fruits.jpg';
         case 'Dairy Products':
            return '/assets/dairy.jpg';
         case 'Drinks':
            return '/assets/Drinks.png';
         case 'Sweets & Snacks':
            return '/assets/Sweet.png';
         case 'Shake':
            return '/assets/Shakes.jpg';
         default:
            return null;
      }
   }

   const onSelectCategory  = (category) => {
      navigate('/items', { state: {category}});
   }

   return (
      <div className="box-container">
         {categories.map(category => (
            <div className="box" key={category}>
               <img src={getImage(category)} alt={category} />
               <h3>{category}</h3>
               <button className='shop-now-button' onClick={() => onSelectCategory(category)}>Explore {category}</button>
            </div>
         ))}
      </div>
   );
}

export default CategorySection;
