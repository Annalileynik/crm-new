import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';



function DeleteOrders(props) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const onDelete = () => {
        toggle()
        props.onDeleteOrders(props.order._id)
    }

    return (
        <div>

            <button onClick={toggle} color="danger" className="dropdown-item" type="button">Delete</button>

            <Modal isOpen={modal} toggle={toggle} {...props}>
                <ModalHeader toggle={toggle}>Are you sure delete {props.order.service.job} <br/>
                    ({props.order.service.employee})</ModalHeader>
                <ModalBody>
                    <h3>   Client name:  <input
                        value={props.order.clientName}
                        className="form-control" type="text"
                        aria-label="default input example"/> </h3><br/>

                    <h3>  Service: <input

                        value={props.order.service.job}
                        className="form-control" type="text"
                        aria-label="default input example"/> </h3><br/>

                    <h3>  Price:$    <input
                        value=    {props.order.service.price}
                        className="form-control" type="text"
                        aria-label="default input example"/></h3><br/>
                </ModalBody>
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

export default DeleteOrders;
