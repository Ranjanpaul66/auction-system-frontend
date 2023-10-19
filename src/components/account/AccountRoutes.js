import {Navigate, Route, Routes} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import {DashboardWrapper} from "./DashboardWrapper";

const AccountRoutes = () => {
    return (
        <Routes>
            <Route element={<MasterLayout/>}>
                {/* Redirect to Dashboard after success login/registartion */}
                <Route path='auth/*' element={<Navigate to='/dashboard'/>}/>
                {/* Pages */}
                <Route path='dashboard' element={<DashboardWrapper/>}/>
                {/* Page Not Found */}
                <Route path='*' element={<Navigate to='/error/404'/>}/>
            </Route>
        </Routes>
    )
}

export {AccountRoutes}
