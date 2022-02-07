import { Input } from 'antd';
import styles from '../styles/SearchForm.module.css'

const SearchForm = ({data, setData}) => {

    console.log(data);
    const onSearch = value => {
        const result = data.filter(item => item.name.toLowerCase().includes(value));
        console.log(value, result);
        setData(result);
    };

    
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
