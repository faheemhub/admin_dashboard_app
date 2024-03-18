import Typography from "antd/es/typography/Typography"
import { useEffect, useState } from "react"
import { getOrders } from "../../API";
import { Avatar, Rate, Space, Table } from "antd";

function Orders(){
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);

    useEffect(()=>{
        setLoading(true);
        getOrders().then(res=>{
            setDataSource(res.products)
            setLoading(false)
        })
    },[])

    return(
        <Space size={20} direction="vertical">
            <Typography.Title level={4}>Orders</Typography.Title>
            <Table
                loading={loading}
                columns={[
                    {
                        title:"Title",
                        dataIndex:"title"
                    },
                    {
                        title:"Price",
                        dataIndex:"price",
                        render:(value)=>{return <span>${value}</span>}
                    },
                    {
                        title:"Discounted Price",
                        dataIndex:"discountedPrice",
                        render:(value)=>{return <span>${value}</span>}
                    },
                    {
                        title:"Quantity",
                        dataIndex:"quantity"
                    },
                    {
                        title:"Total",
                        dataIndex:"total"
                    }

                    ]}
                    dataSource={dataSource}
                    pagination={{
                        pageSize:5
                    }}
            />
        </Space>
    )
}

export default Orders