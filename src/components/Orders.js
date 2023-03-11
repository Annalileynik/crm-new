import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Table} from "reactstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import collapse from "bootstrap/js/src/collapse";
import CreateOrders from "./CreateOrders";
import DeleteOrders from "./DeleteOrders";


const Orders = () => {
    const [orders, setOrders] = useState([])
    const getOrders = () => {
        axios.get(`https://expressjs-server.vercel.app/orders`)
            .then((res) =>
                setOrders(res.data))
            .catch(err =>
                alert('cannot get Order'))
    }

    useEffect(() => {
        getOrders()
    }, [])

    // const createOrders = (newOrder) => {
    //     axios.post(`https://expressjs-server.vercel.app/orders`, newOrder)
    //         .then(res =>
    //             getOrders())
    //         .catch(err =>
    //             alert('cannot create Order'))
    // }

    const onDeleteOrders = (id) => {
        axios.delete(`https://expressjs-server.vercel.app/orders/${id}`)
            .then(res =>
                getOrders())
            .catch(err =>
                alert('cannot delete Client'))
    }

    // const updateOrders = (id, newOrder) => {
    //     axios.patch(`https://expressjs-server.vercel.app/orders/${id}`,newOrder)
    //         .then((res)=>
    //             getOrders())
    //         .catch((err)=>
    //         alert('did not update'))
    // }

    return (
        <div>
            <CreateOrders
                orders={orders}
            />
            <Table style={{
                borderCollapse: "collapse",
                tableLayout: "fixed",
                width: "1700px"
            }}>
                <thead style={{border: "2px solid black"}}>
                <tr>

                    <th style={{border: "2px solid black"}}>№</th>
                    <th style={{border: "2px solid black"}}>Name</th>
                    <th style={{border: "2px solid black"}}>Service</th>
                    <th style={{border: "2px solid black"}}>Price</th>
                    <th style={{border: "2px solid black"}}>Payments</th>
                    <th style={{border: "2px solid black"}}>Debt</th>
                    <th style={{border: "2px solid black"}}>Create at</th>
                    <th style={{border: "2px solid black"}}>Statuses</th>
                    <th style={{border: "2px solid black"}}>Dates</th>
                    <th style={{border: "2px solid black"}}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {orders.map(order =>
                    <tr key={order._id}>
                        <th scope="row" style={{border: "2px solid black"}}>{order.orderNumber} </th>
                        <th scope="row" style={{border: "2px solid black"}}>{order.clientName} </th>
                        <td style={{border: "2px solid black"}}>
                            {order.service.job} <br/>
                            ({order.service.employee})
                        </td>
                        <td style={{border: "2px solid black"}}>
                            {order.service.price}
                        </td>

                        <td style={{border: "2px solid black"}}>
                            {order.paid.payment}
                        </td>
                        <td style={{border: "2px solid black"}}>
                            {order.paid.debt}
                        </td>
                        <td style={{border: "2px solid black"}}>
                            {order.service.createAt}
                        </td>
                        <td style={{border: "2px solid black"}}>
                            {order.sentToDo.status ? "sentToDo✓" :"sentToDo"} <br/>
                            {order.completed.status ? "completed✓" : "completed"} <br/>
                            {order.sayToClient.status ? "sayToClient✓" : "sayToClient"} <br/>
                            {order.clientReceived.status ? "clientReceived✓" : "clientReceived"}
                        </td>

                        <td style={{border: "2px solid black"}}>
                            {order.sentToDo.date} <br/>
                            {order.completed.date} <br/>
                            {order.sayToClient.date} <br/>
                            {order.clientReceived.date}
                        </td>

                        <td style={{border: "2px solid black"}}>
                            <DropdownButton id="dropdown-basic-button" title=" ">
                                <Dropdown.Item href="#/action-1">
                                    <DeleteOrders
                                        onDeleteOrders={onDeleteOrders}
                                        order={order}/>

                                    <button  color="danger" className="dropdown-item" type="button">Update</button>

                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">

                                </Dropdown.Item>

                            </DropdownButton>
                        </td>
                    </tr>)}
                </tbody>
            </Table>

        </div>
    );
};

export default Orders;