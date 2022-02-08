import { Row, Empty } from 'antd';
import { useEffect, useState } from 'react';
import CardRestaurant from './CardRestaurant';
import SearchForm from './SearchForm';
import SkeletonCard from './skeletons/Card';
const CardsRestaurants = () => {
    const dataRestaurants = [
        {id: 1, name: 'WoodsHill', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas convallis ullamcorper."},
        {id: 2, name: 'Fiorellas', description: "Aliquam in neque sagittis mattis ante vae lobortis lectus. Aliquam sagittis tellus ac est convallis posuere."},
        {id: 3, name: 'Karma', description: "Fusce dignissim neque in feugiat accumsan. Praesent iaculis facilisis mattis ante vitae, lobortis semper."},
        {id: 4, name: 'Mompelie', description: "Amet dignissim lino neque in feugiat Praesent iaculis facilisis mattis ante vitae, lobortis semper."},
    ];
    const [restaurants, setRestaurants] = useState([]);
    const [renderList, setRenderList] = useState([]);
    const [isFetch, setIsFetch] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if(restaurants.length <= 0) { 
            setTimeout(() => {
                setRestaurants(dataRestaurants);
                setRenderList(dataRestaurants);
                setIsFetch(false);
            }, 2000);
        }
    }, []);

    return (
        <>
            <SearchForm list={restaurants} setList={setRenderList} />
            <Row gutter={[16, 24]}>
                {
                    renderList.length === 0 && !isFetch && 
                    <Empty description="We did not find any restaurant for your search" style={{margin: '1rem auto'}}/>
                }
                {
                    renderList.map(item => {
                        return (
                            <CardRestaurant key={item.id} name={item.name} description={item.description}/>
                            )
                        })
                }
                {
                    isFetch && <SkeletonCard />
                }
            </Row> 
        </>
    )
};

export default CardsRestaurants; 
