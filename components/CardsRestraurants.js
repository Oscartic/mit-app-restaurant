import { Row, Empty, Alert } from 'antd';
import { useEffect, useState } from 'react';
import CardRestaurant from './CardRestaurant';
import SearchForm from './SearchForm';
import SkeletonCard from './skeletons/Card';
import axios from 'axios';

const CardsRestaurants = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [renderList, setRenderList] = useState([]);
    const [isFetch, setIsFetch] = useState(true);
    const [error, setError] = useState('');

    const fetchRestaurants = async () => {
        try {
            const{ status, data } = await axios.get('http://localhost:5001/api/restaurants'); 
            if(status !== 200) return console.log("error in api");
            setRestaurants(data.restaurants);
            setRenderList(data.restaurants) 
        } catch (error) {
            console.log("[CardsRestaurants][fetchRestaurants] error >>> ", error);
            setError(error.message);
        }
    };

    useEffect(() => {
        if(restaurants.length <= 0 || renderList.length <= 0) { 
            setError('');
            setTimeout(() => {
                fetchRestaurants();
                setIsFetch(false);
            }, 2000);
        }
    }, []);

    return (
        <>
            <SearchForm list={restaurants} setList={setRenderList} />
                { 
                    error !== '' &&
                        <Alert
                            message="Error"
                            description={error}
                            type="error"
                            showIcon
                        />
                }
                {
                    isFetch && <SkeletonCard />
                }
            <Row gutter={[16, 24]}>
                {
                    renderList.length === 0 && !isFetch && 
                    <Empty description="We did not find any restaurant for your search" style={{margin: '1rem auto'}}/>
                }
                {
                    renderList.map(item => {
                        return (
                            <CardRestaurant 
                                key={item.restaurantId} 
                                restaurantId={item.restaurantId} 
                                name={item.name} 
                                description={item.description} 
                                imageUrl={item.imageUrl} 
                                dishes={item.dishes}
                            />
                            )
                        })
                }
            </Row> 
        </>
    )
};

export default CardsRestaurants; 
