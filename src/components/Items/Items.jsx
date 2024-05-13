import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Items() {
    const [items, setItems] = useState();
    const location = useLocation();
    const activeCategory = location.state?.category;
    const navigate = useNavigate();

    const fetchItems = async () => {
      try {
        const response = await axios.get(`http://localhost:5500/items`);
        setItems(response.data);
      } catch(error) {
        console.error('Error fetching items', error);
      }
    };

    const fetchItemsByCategory = async () => {
      try {
        const response = await axios.get(`http://localhost:5500/items/${activeCategory}`);
        setItems(response.data);
      } catch(error) {
        console.error('Error fetching items', error);
      }
    };

    useEffect(() => {
       activeCategory ? fetchItemsByCategory() : fetchItems();
      }, []);

  return (
       <div className="row">
          {items?.map((item) => (
            <div key={item._id} className="col-sm-6 col-md-4 col-lg-3 mb-3">
              <div className="card" style={{ marginTop: '20px' }}>
                <img src={`/assets/${item.photo}`} className="card-img-top" height="350px" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">£{item.price}</p>
                  <button className='btn btn-primary' onClick={() => navigate(`/items/${item._id}`)}>Show Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
  )
}

export default Items;
