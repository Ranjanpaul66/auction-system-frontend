import {Navigate, Route, Routes} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import {Dashboard} from "./Dashboard";
import {ProductsRoutes} from "./products/ProductsRoutes";

const AccountRoutes = () => {
    return (
        <Routes>
            <Route element={<MasterLayout/>}>
                {/* Redirect to Dashboard after success login/registartion */}
                <Route path='auth/*' element={<Navigate to='/dashboard'/>}/>
                {/* Pages */}
                <Route path='dashboard' element={<Dashboard/>}/>
                <Route path='products/*' element={<ProductsRoutes/>}/>
                {/* Page Not Found */}
                <Route path='*' element={<Navigate to='/error/404'/>}/>
            </Route>
        </Routes>
    )
}

export {AccountRoutes}
