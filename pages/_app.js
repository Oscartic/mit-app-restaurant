import '../styles/globals.css'
import 'antd/dist/antd.css'
import { Row, Col } from 'antd';
import TopMenu from '../components/Menu'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopMenu />
      <Row style={{margin: '1rem 0'}}>
        <Col span={20} offset={2}>
          <Component {...pageProps} />
        </Col>
      </Row>
    </>
  )
}

export default MyApp
