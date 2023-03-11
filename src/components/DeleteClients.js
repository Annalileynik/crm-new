import React, {useState} from 'react';
import {Button, Modal, ModalFooter, ModalHeader} from 'reactstrap';
import Dropdown from "react-bootstrap/Dropdown";

function DeleteClients(props) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const onDelete = () => {
        toggle()
        props.deleteClient(props.client._id)
    }

    return (
        <div>
            <Dropdown.Item href="#/action-1"
                           color="danger" onClick={toggle}>Delete</Dropdown.Item>

            <Modal isOpen={modal} toggle={toggle} {...props}>
                <ModalHeader toggle={toggle}>Are you sure, delete ?</ModalHeader>
                <ModalFooter>
                    <Button color="primary" onClick={onDelete}>
                        Delete
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DeleteClients;