import { Input } from 'antd';
import styles from '../styles/SearchForm.module.css'

const SearchForm = () => {

    const onSearch = value => console.log(value);
    
    const { Search } = Input;
    return( 
        <div id='search_restaurant'>
            <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                style={{ margin: '2rem 0'}}
                loading={false} 
            />
        </div> 
    )
};

export default SearchForm;
