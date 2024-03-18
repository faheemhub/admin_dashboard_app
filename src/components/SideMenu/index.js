import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"
import { Menu } from "antd"
import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router"

function SideMenu(){
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState('/')

    useEffect(()=>{
        const pathName = location.pathname;
        setSelectedKeys(pathName)
    },[location.pathName])

    return(
        <div className="SideMenu">
            <Menu onClick={(item)=>navigate(item.key)}
                selectedKeys={[selectedKeys]}
                items={[
                   {
                    label:"Dashboard",
                    key:'/',
                    icon:<AppstoreOutlined/>
                   },
                    {
                        label:"Inventory",
                        key:'/inventory',
                        icon:<ShopOutlined/>
                    },
                    {
                        label:"Orders",
                        key:'/orders',
                        icon:<ShoppingCartOutlined/>
                    },
                    {
                        label:"Customers",
                        key:'/customers',
                        icon:<UserOutlined/>
                    }
                ]}
            ></Menu>
        </div>
    )
}

export default SideMenu