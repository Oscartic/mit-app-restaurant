import { Row } from 'antd';
import { useEffect, useState } from 'react';
import CardDishes from './CardDishes';
import SkeletonCard from './skeletons/Card';
const Dishes = () => {
    const dishes = [
        {id: 1, name: 'WoodsHill', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas convallis ullamcorper.", price: 5.20},
        {id: 2, name: 'Fiorellas', description: "Aliquam in neque sagittis mattis ante vae lobortis lectus. Aliquam sagittis tellus ac est convallis posuere.", price: 1.10},
        {id: 3, name: 'Karma', description: "Fusce dignissim neque in feugiat accumsan. Praesent iaculis facilisis mattis ante vitae, lobortis semper.", price: 3.20},
        {id: 4, name: 'Mompelie', description: "Amet dignissim lino neque in feugiat Praesent iaculis facilisis mattis ante vitae, lobortis semper.", price: 1.00},

    ]

    const [dishesList, setDishesList] = useState([]);

    useEffect(() => {
        if(dishesList <= 0){
            setTimeout(()=>{
                setDishesList(dishes);
            },2000);
        } 
    }, []);

    return (
        <Row gutter={[16, 24]}>
        {
            dishesList.map(item => {
            return (
                    <CardDishes key={item.id} name={item.name} description={item.description} price={item.price}/>
                )
            })
        }
        {
            dishesList <= 0 && <SkeletonCard />
        }
        </Row> 
    )
};

export default Dishes; 
