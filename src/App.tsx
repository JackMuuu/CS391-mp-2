import { useState, useEffect } from 'react';
import HyruleCompendium from './components/HyruleCompendium.tsx';
import { Item, ApiResponse } from './interfaces/types.ts';
// API used: https://github.com/gadhagod/Hyrule-Compendium-API.git

export default function App() {
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [category, setCategory] = useState<string>('monsters');

    const categories = ['creatures', 'equipment', 'materials', 'monsters', 'treasure'];

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            let url = `https://botw-compendium.herokuapp.com/api/v3/compendium/category/${category}`;

            try {
                const response = await fetch(url);
                const data: ApiResponse = await response.json();
                setItems(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch data');
                setLoading(false);
            }
        };

        fetchData();
    }, [category]);

    return (
        <div>
            <h1>Hyrule Compendium</h1>
            {/* Category Buttons */}
            <div style={{ textAlign: 'center', marginBottom: '20px' , marginTop: '20px'}}>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        style={{
                            margin: '0 5px',
                            padding: '10px 15px',
                            backgroundColor: category === cat ? '#c1d95c' : '#80b155',
                            color: '#eaef9d',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                ))}
            </div>

            {error && <p>{error}</p>}
            {!loading && !error && <HyruleCompendium items={items} category={category} />}
        </div>
    );
}