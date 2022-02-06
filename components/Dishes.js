import { Row } from 'antd';
import CardDishes from './CardDishes';
const Dishes = () => {
    const restaurants = [
        {id: 1, name: 'WoodsHill', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas convallis ullamcorper."},
        {id: 2, name: 'Fiorellas', description: "Aliquam in neque sagittis mattis ante vae lobortis lectus. Aliquam sagittis tellus ac est convallis posuere."},
        {id: 3, name: 'Karma', description: "Fusce dignissim neque in feugiat accumsan. Praesent iaculis facilisis mattis ante vitae, lobortis semper."},
        {id: 4, name: 'Mompelie', description: "Amet dignissim lino neque in feugiat Praesent iaculis facilisis mattis ante vitae, lobortis semper."},

    ]
    return (
        <Row gutter={[16, 24]}>
        {
            restaurants.map(item => {
            return (
                    <CardDishes key={item.id} name={item.name} description={item.description}/>
                )
            })
        }
        </Row> 
    )
};

export default Dishes; 
