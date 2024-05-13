import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const q = searchParams.get('q');
        if (q) {
            setQuery(q);
            search(q); // Call the search function directly
        }
    }, [location.search]);

    const search = async (query) => {
        try {
            const response = await axios.post('http://localhost:5500/search', { query });
            setResults(response.data);
        } catch(error) {
            console.error('Error searching:', error);
        }
    };
    

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />
            <button onClick={() => search(query)}>Search</button>
            <div style={{ margin: '0 auto', maxWidth: '800px' }}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {results.map((item, index) => (
                    <li key={index} style={{ display: 'inline-block', width: '30%', marginRight: '2%', marginBottom: '20px' }}>
                        <img src={`/Assets/${item.photo}`} alt={item.name} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>Price: £{item.price}</p>
                        <button className='btn btn-primary' onClick={() => navigate(`/items/${item._id}`)}>Show Details</button>
                        
                    </li>
                ))}
              </ul>
            </div>
        </div>
    );
};

export default Search;
