import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

function CreateJobServices(props) {

    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
        setPrice('');
        setJob("");
        setPrimeCost('');
        setEmployee('')
    }

    const [job, setJob] = useState('')
    const [price, setPrice] = useState('')
    const [primeCost, setPrimeCost] = useState('')
    const [employee, setEmployee] = useState('')


    const onSave = () => {
        const newJob = ({job, price, primeCost, employee})
        props.createJob(newJob);
        toggle()
    }
    return (
        <div>
            <div className="input-group mb-3">
                <span type="text" className="form-control" placeholder="Recipient's username"
                      aria-label="Recipient's username" aria-describedby="button-addon2"><h2>Job</h2></span>
                <button onClick={toggle}
                        className="btn btn-outline-secondary" type="button" id="button-addon2">Create new Job
                </button>
            </div>
            <div>
                <Modal isOpen={modal} toggle={toggle} {...props}>
                    <ModalHeader toggle={toggle}>Create new Job</ModalHeader>
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
                            Save
                        </Button>{' '}
                        <Button color="secondary" onClick={toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    );
}

export default CreateJobServices;