import './App.css';
import './App.scss';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import {ErrorsPage} from "./components/errors/ErrorsPage";
import {Logout} from "./components/auth/Logout";
import {AuthPage} from "./components/auth/AuthPage";

function App() {
    const currentUser = false;
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path='error/*' element={<ErrorsPage/>}/>
                    <Route path='logout' element={<Logout/>}/>
                    {currentUser ? (
                        <>
                            {/*<Route index element={<Navigate to='/dashboard'/>}/>*/}
                        </>
                    ) : (
                        <>
                            <Route path='auth/*' element={<AuthPage/>}/>
                            <Route path='*' element={<Navigate to='/auth'/>}/>
                        </>
                    )}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
