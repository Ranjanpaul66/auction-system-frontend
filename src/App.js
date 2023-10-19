import './App.css';
import './App.scss';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import {ErrorsPage} from "./components/errors/ErrorsPage";
import {Logout} from "./components/auth/Logout";
import {AuthRoutes} from "./components/auth/AuthRoutes";
import {AccountRoutes} from "./components/account/AccountRoutes";
import {MasterApp} from "./_metronic/layout/MasterApp";

function App() {
    const currentUser = true;
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MasterApp />}>
                    <Route path='error/*' element={<ErrorsPage/>}/>
                    <Route path='logout' element={<Logout/>}/>
                    {currentUser ? (
                        <>
                            <Route path='/*' element={<AccountRoutes/>}/>
                            <Route index element={<Navigate to='/dashboard'/>}/>
                        </>
                    ) : (
                        <>
                            <Route path='auth/*' element={<AuthRoutes/>}/>
                            <Route path='*' element={<Navigate to='/auth'/>}/>
                        </>
                    )}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
