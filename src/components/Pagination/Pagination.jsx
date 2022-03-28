import React, { useEffect } from 'react';

//Redux components
import { useDispatch, useSelector} from 'react-redux';
import { getPosts } from '../../actions/posts';

//Material-ui components
import { Pagination, PaginationItem } from '@material-ui/lab';

import useStyles from './styles';
import { Link } from 'react-router-dom';

const Paginate = ({page}) => {
    
    const { totalPages } = useSelector((state) => state.data);
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(page) dispatch(getPosts(page));
    }, [dispatch, page]);
    
    if (totalPages > 1) return  (
        <Pagination 
            classes={{ ul: classes.ul }}
            count={totalPages}
            page={Number(page) || 1}
            variant='outlined'
            color='primary'
            renderItem={(item) => (
                //Every item will be a link to the next page with more posts to show
                <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`}/> 
            )}
        />
    )  

    return null;
    
}
export default Paginate;
