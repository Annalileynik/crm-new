import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Dropdown from "react-bootstrap/Dropdown";

function UpdateClients(props) {
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    }

    const [name, setName] = useState(props.client.name)
    const [address, setAddress] = useState(props.client.address)
    const [phoneNumber, setPhoneNumber] = useState(props.client.phoneNumber)
    const [createAt, setCreateAt] = useState(props.client.createAt)
    const onSave = () => {
        toggle()
        const newClient={name, address, phoneNumber, createAt}
        props.updateClients(props.client._id, newClient)
    }

    return (
        <div>
            <Dropdown.Item
                color="danger" onClick={toggle}
                href="#/action-2">Update</Dropdown.Item>

            <Modal isOpen={modal} toggle={toggle} {...props}>
                <ModalHeader toggle={toggle}>Are you sure update {props.client.name}</ModalHeader>
                <ModalBody>
                    <div className="input-group mb-3">
                        <input
                            value={name}
                            onChange={(event)=>setName(event.target.value)}
                            type="text" className="form-control" placeholder=""
                            aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <input
                            value={address}
                            onChange={(event)=>setAddress(event.target.value)}
                            type="text" className="form-control" placeholder=""
                            aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <input
                            value={phoneNumber}
                            onChange={(event)=>setPhoneNumber(event.target.value)}
                            type="tel" className="form-control" placeholder=""
                            aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <input
                            value={createAt}
                            onChange={(event)=>setCreateAt(event.target.value)}
                            type="date" className="form-control" placeholder=""
                            aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                    </div>
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
    );
}

export default UpdateClients;