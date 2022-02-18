import { Row, Empty } from 'antd';
import { useEffect, useState } from 'react';
import CardDishes from './CardDishes';
import SkeletonCard from './skeletons/Card';
import axios from 'axios';
import { useRouter } from 'next/router';

const Dishes = () => {
 
    const [restaurant, setRestaurant] = useState({});

    const router = useRouter();
    const { restaurantId } = router.query;
    

    const fetchRestaurant = async () => {
        try {
            const url = `http://localhost:5001/api/restaurants/${restaurantId}`;
            const { data } = await axios.get(url); 
            if(!data) return console.log("error in api");
            setRestaurant(data.restaurant);
    
        } catch (error) {
            console.log("[Dishes][fetchRestaurant] error >>> ", error);
        }
    };
    
    useEffect(() => {
        if(!router.isReady) return;
        fetchRestaurant();
    }, [router.isReady]);

    return (
        <Row gutter={[16, 24]}>
        {  Object.keys(restaurant).length > 0 ?
            restaurant.dishes.map(item => {
            return (
                    // <span>{JSON.stringify(item)}</span>
                    <CardDishes key={item.dishId} dish={item}/>
                )
            })
        :
            <Empty description="We did not find any dish for this restaurant" style={{margin: '1rem auto'}}/>
        }
        {
            restaurant.dishes <= 0 && <SkeletonCard />
        }
        </Row> 
    )
};

export default Dishes; 
