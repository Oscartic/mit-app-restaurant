import { Row, Empty, Alert} from 'antd';
import { useEffect, useState } from 'react';
import CardDishes from './CardDishes';
import SearchForm from './SearchForm';
import SkeletonCard from './skeletons/Card';
import axios from 'axios';
import { useRouter } from 'next/router';

const Dishes = () => {
 
    const [restaurant, setRestaurant] = useState({});
    const [dishes, setDishes] = useState([]);
    const [renderList, setRenderList] = useState([]);
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
            setDishes(data.restaurant.dishes);
            setRenderList(data.restaurant.dishes);
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
            if(restaurant && restaurant.dishes?.length > 0 && renderList.length === 0) setRenderList(dishes);           
        }, 2000);
    }, [router.isReady]);

    console.log('Renderizado de platos: ', renderList)

    return (
        <>
            <SearchForm list={renderList} setList={setRenderList} />
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
                    renderList.length <= 0 && !isFetch &&
                    <Empty description="We did not find any dish for this restaurant" style={{margin: '1rem auto'}}/>
                }
                {
                    isFetch && <SkeletonCard />
                }
                {  
                    renderList.map(item => {
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
