import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

function CreateClients(props) {
    const [modal, setModal] = useState(false);

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [createAt, setCreateAt] = useState('')
    const toggle = () => {
        setModal(!modal);
        setName('')
        setAddress('')
        setCreateAt('')
        setPhoneNumber('')
    }
    const onSave = () => {
        const newClient = {name, address, phoneNumber, createAt}
        props.createClient(newClient)
        toggle()
    }

    return (
        <div>
            <div className="input-group mb-3">
                <span type="text" className="form-control" placeholder="Recipient's username"
                      aria-label="Recipient's username" aria-describedby="button-addon2"><h2>Job</h2></span>
                <button onClick={toggle}
                        className="btn btn-outline-secondary" type="button" id="button-addon2">Create Client
                </button>
            </div>
            <Modal isOpen={modal} toggle={toggle} {...props}>
                <ModalHeader toggle={toggle}>Create Client</ModalHeader>
                <ModalBody>
                    <div className="input-group mb-3">
                        <input
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            type="text" className="form-control" placeholder=""
                            aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <input
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                            type="text" className="form-control" placeholder=""
                            aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <input
                            value={phoneNumber}
                            onChange={(event) => setPhoneNumber(event.target.value)}
                            type="tel" className="form-control" placeholder=""
                            aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <input
                            value={createAt}
                            onChange={(event) => setCreateAt(event.target.value)}
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

export default CreateClients;