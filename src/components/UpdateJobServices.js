import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

function UpdateJobServices(props) {

    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);

    }

    const [job, setJob] = useState(props.service.job)
    const [price, setPrice] = useState(props.service.price)
    const [primeCost, setPrimeCost] = useState(props.service.primeCost)
    const [employee, setEmployee] = useState(props.service.employee)


    const onSave = () => {
        const newService = {job, price, primeCost, employee}
        props.onUpdateService(props.service._id, newService);
        toggle()
    }

    return (
        <div>


            <button onClick={toggle} color="warning" className="dropdown-item" type="button">Update</button>

            <Modal isOpen={modal} toggle={toggle} {...props}>
                <ModalHeader toggle={toggle}>Update {props.service.job}</ModalHeader>
                <ModalBody>
                    <input
                        id="inputPassword5"
                        value={job}
                        onChange={(event) => {setJob(event.target.value)}}
                        className="form-control" type="text" placeholder="Job"
                        aria-label="default input example"/> <br/>
                    <input
                        id="inputPassword5"
                        value={price}
                        onChange={(event) => {setPrice(event.target.value)}}
                        className="form-control" type="text" placeholder="Price"
                        aria-label="default input example"/><br/>
                    <input
                        id="inputPassword5"
                        value={primeCost}
                        onChange={(event) => {setPrimeCost(event.target.value)}}
                        className="form-control" type="text" placeholder="Prime Cost"
                        aria-label="default input example"/><br/>
                    <input
                        id="inputPassword5"
                        value={employee}
                        onChange={(event) => {setEmployee(event.target.value)}}
                        className="form-control" type="text" placeholder="Employee"
                        aria-label="default input example"/>

                    <br/>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onSave}>
                        Save Update
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

        </div>
    );
}

export default UpdateJobServices;