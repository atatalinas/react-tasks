import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../constants/routesNames';
import Button from '@material-ui/core/Button';
import './HomePage.css';

const HomePage = () => {
    const history = useHistory();

    const handleGoTo = useCallback((pathToPage) => {
        history.push(pathToPage);
    }, [history])

    return (
        <div className='container'>
            <Button variant="contained" color="primary" className='btn' onClick={() => handleGoTo(ROUTES.TODO_PAGE)}>Go To Todo List</Button>
        </div>
    )
}

export default HomePage;