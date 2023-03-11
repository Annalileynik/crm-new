import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Table} from "reactstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CreateClients from "./CreateClients";
import collapse from "bootstrap/js/src/collapse";
import DeleteClients from "./DeleteClients";
import UpdateClients from "./UpdateClients";

const Clients = () => {
    const [clients, setClients] = useState([])

    const getClients = () => {
        axios.get(`https://expressjs-server.vercel.app/clients`)
            .then((res) =>
                setClients(res.data))
            .catch(err =>
                alert('cannot get Clients'))
    }

    useEffect(() => {
        getClients()
    }, [])

    const createClient = (newClient) => {
        axios.post(`https://expressjs-server.vercel.app/clients`, newClient)
            .then(res =>
                getClients())
            .catch(err =>
                alert('cannot create Client'))
    }

    const deleteClient = (id) => {
        axios.delete(`https://expressjs-server.vercel.app/clients/${id}`)
            .then(res =>
                getClients())
            .catch(err =>
                alert('cannot delete Client'))
    }

    const updateClients = (id, newClient) => {
        axios.patch(`https://expressjs-server.vercel.app/clients/${id}`,newClient)
            .then((res)=>
                getClients())
            .catch((err)=>
                alert('did not update'))
    }

    return (
        <div>
            <CreateClients
                createClient={createClient}/>
            <Table style={{
                borderCollapse: "collapse",
                tableLayout: "fixed",
                width: "1700px"
            }}>
                <thead style={{border: "2px solid black"}}>
                <tr>

                    <th style={{border: "2px solid black"}}>Name</th>
                    <th style={{border: "2px solid black"}}>Address</th>
                    <th style={{border: "2px solid black"}}>Phone number</th>
                    <th style={{border: "2px solid black"}}>Create at</th>
                    <th style={{border: "2px solid black"}}>Action</th>
                </tr>
                </thead>
                <tbody>
                {clients.map(client =>
                    <tr key={client._id}>
                        <th scope="row" style={{border: "2px solid black"}}>{client.name} </th>
                        <td style={{border: "2px solid black"}}>
                            {client.address}
                        </td>
                        <td style={{border: "2px solid black"}}>
                            {client.phoneNumber}
                        </td>
                        <td style={{border: "2px solid black"}}>
                            {client.createAt}
                        </td>
                        <td style={{border: "2px solid black"}}>
                            <DropdownButton id="dropdown-basic-button" title="">
                                <DeleteClients
                                    deleteClient={deleteClient}
                                    client={client}
                                />
                                <UpdateClients
                                    client={client}
                                    updateClients={updateClients}/>
                            </DropdownButton>
                        </td>
                    </tr>)}
                </tbody>
            </Table>
        </div>
    );
};

export default Clients;