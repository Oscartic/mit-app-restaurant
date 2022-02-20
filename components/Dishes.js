import { Row, Empty, Alert} from 'antd';
import { useEffect, useState } from 'react';
import CardDishes from './CardDishes';
import SkeletonCard from './skeletons/Card';
import axios from 'axios';
import { useRouter } from 'next/router';

const Dishes = () => {
 
    const [restaurant, setRestaurant] = useState({});
    const [isFetch, setIsFetch] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter();
    const { restaurantId } = router.query;  

    const fetchRestaurant = async () => {
        try {
            const url = `${process.env.API_MIT_RESTAURANT_URL}/restaurants/${restaurantId}`;
            const { data } = await axios.get(url); 
            if(!data) return console.log("[Dishes][fetchRestaurant] >>> data no exist");
            setRestaurant(data.restaurant);
            setIsFetch(false);
        } catch (error) {
            console.log("[Dishes][fetchRestaurant] error >>> ", error);
            setError(error.message);
            setIsFetch(false);
        }
    };
    
    useEffect(() => {
        if(!router.isReady) return;
        setTimeout(() => {
            setError('');
            fetchRestaurant();           
        }, 2000);
    }, [router.isReady]);

    return (
        <>
            { 
                error !== '' &&
                    <Alert
                        message="Error"
                        description={error}
                        type="error"
                        showIcon
                    />
            }
            <Row gutter={[16, 24]}>
            {
                restaurant?.dishes <= 0 && !isFetch &&
                <Empty description="We did not find any dish for this restaurant" style={{margin: '1rem auto'}}/>
            }
            {
                isFetch && <SkeletonCard />
            }
            {  Object.keys(restaurant).length > 0 &&
                restaurant.dishes.map(item => {
                return (
                        <CardDishes 
                            key={item.dishId} 
                            dish={item} 
                            restaurantName={restaurant.name} 
                            restaurantId={restaurant.restaurantId}/>
                    )
                })
            }
            </Row>
        </> 
    )
};

export default Dishes; 
