import { Row, Col } from 'antd';
import CardRestaurant from './CardRestaurant';
const CardsRestaurants = () => {
    const restaurants = [
        {id: 1, name: 'WoodsHill', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas convallis ullamcorper."},
        {id: 2, name: 'Fiorellas', description: "Aliquam in neque sagittis mattis ante vae lobortis lectus. Aliquam sagittis tellus ac est convallis posuere."},
        {id: 3, name: 'Karma', description: "Fusce dignissim neque in feugiat accumsan. Praesent iaculis facilisis mattis ante vitae, lobortis semper."},
        {id: 3, name: 'Mompelie', description: "Amet dignissim lino neque in feugiat Praesent iaculis facilisis mattis ante vitae, lobortis semper."},

    ]
    return (
        <> 
            <Row style={{margin: '1rem 0'}}>
                <Col span={20} offset={2}>
                    <Row gutter={[16, 24]}>
                    {
                        restaurants.map(item => {
                        return (
                                <CardRestaurant key={item.id} name={item.name} description={item.description}/>
                            )
                        })
                    }
                    </Row> 
        
                </Col>
            </Row>
        </>
    )
};

export default CardsRestaurants; 
