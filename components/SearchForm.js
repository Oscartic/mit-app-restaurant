import { Input } from 'antd';
import styles from '../styles/SearchForm.module.css'

const SearchForm = ({list, setList}) => {

    console.log(list);
    const onSearch = value => {
        const result = list.filter(item => item.name.toLowerCase().includes(value)) || [];
        console.log(value, result);
        setList(result);
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
