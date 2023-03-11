import React, {useState} from 'react';
import {Button, Modal,  ModalFooter, ModalHeader} from 'reactstrap';



function DeleteJobServices(props) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const onDelete = () => {
        toggle()
        props.onDeleteService(props.service._id)
    }

    return (
        <div>

            <button onClick={toggle} color="danger" className="dropdown-item" type="button">Delete</button>

            <Modal isOpen={modal} toggle={toggle} {...props}>
                <ModalHeader toggle={toggle}>Are you sure delete {props.service.job}</ModalHeader>

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

export default DeleteJobServices;
