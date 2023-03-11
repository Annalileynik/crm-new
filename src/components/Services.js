import React, {useEffect, useState} from 'react';
import axios from "axios"
import collapse from "bootstrap/js/src/collapse";
import CreateJobServices from "./CreateJobServices";
import DeleteJobServices from "./DeleteJobServices";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import UpdateJobServices from "./UpdateJobServices";

const Services = () => {
    const [services, setServices] = useState([])

    const getServices = () => axios.get('https://expressjs-server.vercel.app/services')
        .then((res) =>
            setServices(res.data))
        .catch((err) =>
            alert("Site is failed"))


    useEffect(() => {
        getServices()
    }, [])

    const createJob = (newJob) => {
        axios.post(`https://expressjs-server.vercel.app/services`, newJob)
            .then((res) =>
                getServices())
            .catch((err) =>
                alert("Site is failed"))
    }

    const onDeleteService = (id) => {
        axios.delete(`https://expressjs-server.vercel.app/services/${id}`)
            .then((res) =>
                getServices())
            .catch((err) =>
                alert("Cannot delete"))
    }

    const onUpdateService = (id, newService) => {
        axios.patch(`https://expressjs-server.vercel.app/services/${id}`, newService)
            .then((res) =>
                getServices())
            .catch((err) =>
                alert("cannot update Job"))
    }
    return (
        <div>


            <CreateJobServices
                createJob={createJob}

            />

            <table style={{
                borderCollapse: "collapse",
                tableLayout: "fixed",
                width: "1700px"
            }}>
                <thead style={{border: "2px solid black"}}>
                <tr>
                    <th style={{border: "2px solid black"}}>Name of Job</th>
                    <th style={{border: "2px solid black"}}>Price, $</th>
                    <th style={{border: "2px solid black"}}>Employee</th>
                    <th style={{border: "2px solid black"}}>Prime Cost</th>
                    <th style={{border: "2px solid black"}}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {services.map((el) =>
                    <tr key={el._id}>
                        <td style={{border: "2px solid black"}}>{el.job}</td>
                        <td style={{border: "2px solid black"}}>{el.price}</td>
                        <td style={{border: "2px solid black"}}>{el.primeCost}</td>
                        <td style={{border: "2px solid black"}}>{el.employee}</td>
                        <td style={{border: "2px solid black"}}>

                            <DropdownButton
                                id="dropdown-basic-button" title=" ">
                                <Dropdown.Item href="#/action-1">

                                    <DeleteJobServices
                                        service={el}
                                        onDeleteService={onDeleteService}
                                    />
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">

                                    <UpdateJobServices
                                        service={el}
                                        onUpdateService={onUpdateService}
                                    />
                                </Dropdown.Item>

                            </DropdownButton>
                        </td>
                    </tr>
                )}

                </tbody>
            </table>


            <br/>

        </div>
    );
};

export default Services;