import React, { useContext, useEffect } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import Fooditem from '../Fooditem/Fooditem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  useEffect(() => {
    //console.log("Food List:", food_list);
    //console.log("Selected Category:", category);
  }, [food_list, category]);

  if (!food_list.length) {
    return <div>Loading...</div>; // Show a loading indicator while fetching data
  }


  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        
        {food_list.map((item,index) => {
          if(category==="All" || category===item.category ){
            return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
            
        })}
      </div>
    </div>
  )
};

export default FoodDisplay;
