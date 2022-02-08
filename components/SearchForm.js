import { Input } from 'antd';
import { useState } from 'react';
import styles from '../styles/SearchForm.module.css'

const SearchForm = ({list, setList}) => {

    const [loading, setLoading] = useState(false);

    const onSearch = e => {
        const query = e.target.value;
        setLoading(true);
        setTimeout(() => {
            const result = list.filter(item => item.name.toLowerCase().includes(query)) || [];
            setList(result);
            setLoading(false);
        },1000)
    };

    
    const { Search } = Input;
    return( 
        <div id='search_restaurant'>
            <Search
                placeholder="Input search restaurant"
                allowClear
                enterButton="Search"
                size="large"
                onChange={(e) => onSearch(e)}
                style={{ margin: '2rem 0'}}
                loading={loading} 
            />
        </div> 
    )
};

export default SearchForm;
