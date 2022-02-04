import { Menu, Row, Col } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import styles from '../styles/Menu.module.css'

const TopMenu = () => {
  const { SubMenu } = Menu;
  return (
    <>
      <div id={styles.header_title}>
        <h1><span>MIT</span>RESTAURANT APP</h1>
      </div>
      <Row style={{ margin: '2rem 0'}}>
        <Col span={20} offset={2}>

          <Menu mode="horizontal">
            <Menu.Item key="mail" icon={<MailOutlined />}>
              Navigation One
            </Menu.Item>
            <Menu.Item key="app" icon={<AppstoreOutlined />}>
              Navigation Two
            </Menu.Item>
            <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
              </a>
            </Menu.Item>
          </Menu>

        </Col>
      </Row>
    </>
  )
};
export default TopMenu;
