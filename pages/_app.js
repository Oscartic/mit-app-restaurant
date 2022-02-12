import '../styles/globals.css'
import 'antd/dist/antd.css'
import { Row, Col } from 'antd';
import TopMenu from '../components/Menu'
import CartProvider from "../Context/CartContext";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <CartProvider>
        <TopMenu />
        <Row style={{margin: '1rem 0'}}>
          <Col span={20} offset={2}>
            <Component {...pageProps} />
          </Col>
        </Row>
      </CartProvider>
    </>
  )
}

export default MyApp
