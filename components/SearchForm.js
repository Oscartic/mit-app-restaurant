import { Input, Row, Col } from 'antd';

const SearchForm = () => {

    const onSearch = value => console.log(value);
    
    const { Search } = Input;
    return(  
        <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            style={{ margin: '2rem 0'}}
        />
    )
};

export default SearchForm;
