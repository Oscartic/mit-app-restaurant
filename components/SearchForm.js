import { Input, Space } from 'antd';

const SearchForm = () => {

const onSearch = value => console.log(value);
    const { Search } = Input;
    return(
        <Space>
            <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
            />
        </Space>
    )
};

export default SearchForm;
