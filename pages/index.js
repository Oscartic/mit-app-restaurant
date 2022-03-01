import Head from 'next/head'
import { Row, Col, Divider, Button } from 'antd';
import style from '../styles/Home.module.css';
import Link from 'next/link';
import { ArrowRightOutlined } from '@ant-design/icons'

const Home = () => {

  return (
    <>
      <Head>
        <title>MITRestaurants</title>
      </Head>
        <Row style={{ margin: '2rem auto', maxWidth: '1200px'}}>
        <Col span={12}>
            <div className={style.main_section_index}>
              <div>
                <h1>Restaurant App Presentation Capstone</h1>
                <p>This is the final project for the MERN stack programming certification, issued by MIT xPro, I hope you enjoy watching it!</p>
                <Link as="/restaurants/" href="/restaurants/">  
                  <Button type="primary">
                    <ArrowRightOutlined />
                    go to app
                  </Button>
            </Link>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className={style.main_section_index}>
              <img  style={{ maxWidth: '300px'}} src="https://ik.imagekit.io/orb/MITRestaurants/logo-solo_ZqsIomNg-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646091940996" alt="" />
            </div>
          </Col>
        </Row>
        
        <Divider>Presentation</Divider>
        <Row style={{ margin: '2rem auto', maxWidth: '1200px'}}>
        <Col span={12}>
          <div className={style.main_section_index}>
            <img src="https://ik.imagekit.io/orb/MITRestaurants/data_flow_-_mitRestaurants_j94gCf5qz.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1646090477671" alt="" />
          </div>
          </Col>
          <Col span={12}>
          <div className={style.main_section_index}>
              <div>
                <h1>Frontend</h1>
                <p>Architecture / Authentication / APP Diagram </p>
                  <Button type="primary" href='https://www.loom.com/share/9d14297ab51a49089b316f9d24fcec3b?sharedAppSource=personal_library' target="_blank">
                    Frontend video
                  </Button>
              </div>
            </div>
          </Col>
        </Row>

        <Row style={{ margin: '2rem auto', maxWidth: '1200px'}}>
        <Col span={12}>
            <div className={style.main_section_index}>
              <div>
                <h1>Backend</h1>
                <p>Database / Api / Stripe </p>
                  <Button type="primary" href='https://www.loom.com/share/487199d9de9b4645827e9968b6899ef2?sharedAppSource=personal_library' target="_blank">
                    Backend video
                  </Button>
              </div>
            </div>
          </Col>
          <Col span={12}>
          <div className={style.main_section_index}>
            <img src="https://ik.imagekit.io/orb/MITRestaurants/backend_mitRestaurants_hw6oHdkTJeP.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646090477963" alt="" />
          </div>
          </Col>
        </Row>
        
        <Row style={{ margin: '2rem auto', maxWidth: '1200px'}}>
        <Col span={12}>
        <div className={style.main_section_index}>
            <img src="https://ik.imagekit.io/orb/MITRestaurants/frontend_mitRestaurants_dtUFPZM7w.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646090477716" alt="" />
          </div>
          </Col>
          <Col span={12}>
          <div className={style.main_section_index}>
              <div>
                <h1>Additional Features</h1>
                <p>Demonstration / Features / Reflection</p>
                  <Button type="primary" href='https://www.loom.com/share/ca12e0be17dd4421bf5bd8d8de671640?sharedAppSource=personal_library' target="_blank">
                    Additional feat video
                  </Button>
              </div>
            </div>
          </Col>
        </Row>
    </>
  )
}
export default Home;