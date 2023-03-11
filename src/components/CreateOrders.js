import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import Form from 'react-bootstrap/Form';

function CreateOrders(props) {

    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);

    }
//
//     const [orderNumber, setOrderNumber]=useState(props.orders.length)
// setOrderNumber(orderNumber+1)

    const [clientName, setClientName] = useState('')
    const [job, setJob] = useState('')
    // const[price, setPrice]=useState(null)
    const [payment, setPayment] = useState(null)
    // const[debt, setDebt]=useState(null)
    // const[createAt, setCreateAt]=useState('')
    // const[sentToDoStatus, setSentToDoStatus]=useState(false)
    // const[completedStatus, setCompletedStatus]=useState(false)
    // const[sayToClientStatus, setSayToClientStatus]=useState(false)
    // const[clientReceivedStatus, setClientReceivedStatus]=useState(false)
    // const[sentToDoDate, setSentToDoDate]=useState(false)
    // const[completedDate, setCompletedDate]=useState(false)
    // const[sayToClientDate, setSayToClientDate]=useState(false)
    // const[clientReceivedDate, setClientReceivedDate]=useState(false)

    const onSave = () => {
// const newOrder = {
//     clientName:clientName,
//     job:job,
//     price:price,
//     payment:payment,
        // debt:debt,
        // createAt:createAt,
        // sentToDoStatus:sentToDoStatus,
        // completedStatus:completedStatus,
        // sayToClientStatus:sayToClientStatus,
        // clientReceivedStatus:clientReceivedStatus,
        // sentToDoDate:sentToDoDate,
        // completedDate:completedDate,
        // sayToClientDate:sayToClientDate,
        // clientReceivedDate:clientReceivedDate
// }
        toggle()
    }
    return (
        <div>
            <div className="input-group mb-3">
                <span type="text" className="form-control" placeholder="Recipient's username"
                      aria-label="Recipient's username" aria-describedby="button-addon2"><h2>Orders</h2></span>
                <button onClick={toggle}
                        className="btn btn-outline-secondary" type="button" id="button-addon2">Create new Order
                </button>
            </div>
            <div>
                <Modal isOpen={modal} toggle={toggle} {...props}>
                    <ModalHeader toggle={toggle}>Create new Order</ModalHeader>
                    <ModalBody>
                        <Form.Select
                            onChange={(event) => setClientName(event.target.value)}
                            value={clientName}
                            aria-label="Default select example">
                            {props.orders.map(order =>
                                <option key={order._id}>{order.clientName}</option>
                            )}
                        </Form.Select>
                        <Form.Select
                            onChange={(event) => setJob(event.target.value)}
                            value={job}
                            aria-label="Default select example">
                            {props.orders.map(order =>
                                <option key={order._id}>{order.service.job}</option>
                            )}
                        </Form.Select>

                        <input
                            id="inputPassword5"
                            value={payment}
                            onChange={(event) => {setPayment(event.target.value)}}
                            className="form-control" type="text" placeholder="Prime Cost"
                            aria-label="default input example"/><br/>

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

export default CreateOrders;