import {Route, Routes} from 'react-router-dom'
import {Products} from "./Products";
import {ShowProduct} from "./ShowProduct";


const ProductsRoutes = () => (
    <Routes>
        <Route>
            <Route path='' element={<Products/>}/>
            <Route path='show/:id' element={<ShowProduct/>}/>
            <Route index element={<Products/>}/>
        </Route>
    </Routes>
)

export {ProductsRoutes}
