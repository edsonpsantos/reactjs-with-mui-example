import { Button } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppThemeContext } from '../shared/context/ThemeContext';


export const AppRoutes = () =>{

    const{toggleTheme} = useAppThemeContext();

    return (
        <Routes>
            <Route path='/home' element={<Button variant='contained' color='primary' onClick={toggleTheme} >Toggle Theme Test</Button>} />
            <Route path='*' element={<Navigate to='/home'/>} /> 
        </Routes>
    );
}