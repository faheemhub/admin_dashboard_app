import { Routes, Route } from "react-router-dom"
import Dashboard from "../../pages/dashboard"
import Inventory from "../../pages/inventory"
import Orders from "../../pages/orders"
import Customers from "../../pages/customers"

function AppRoutes(){
    return(
        <div className="AppRoutes">
                <Routes>
                    <Route path = '/' element={<Dashboard/>}/>
                    <Route path = '/inventory' element={<Inventory/>}/>
                    <Route path = '/orders' element={<Orders/>}/>
                    <Route path = '/customers' element={<Customers/>}/>
                </Routes>
        </div>
    )
}

export default AppRoutes