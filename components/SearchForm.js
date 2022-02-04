import { Input, Row, Col } from 'antd';

const SearchForm = () => {

    const onSearch = value => console.log(value);
    
    const { Search } = Input;
    return(
        <Row>
            <Col span={20} offset={2}>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />
            </Col>
        </Row>
      
    )
};

export default SearchForm;
