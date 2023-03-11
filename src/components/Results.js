import {Table} from "reactstrap";
import {useEffect, useState} from "react";
import axios from "axios";

const Results = () => {
    const [orders, setOrders] = useState([])

    const [primeCost, setPrimeCost]=useState(0)
    const [netProfit, setNetProfit]=useState(0)
    const [income, setIncome]=useState(0)
    const [paidSum, setPaidSum]=useState(0)
    const [clientDebt, setClientDebt]=useState(0)

    const getOrders = () => {
        axios.get(`https://expressjs-server.vercel.app/orders`)
            .then((res) =>
                setOrders(res.data))
            .catch(err =>
                alert('cannot get Order'))
    }

    useEffect(() => {
        getOrders()
    }, [])

    const totalClientDebt = () => {
        let total = 0;
        orders.map(order=>
            (total += order.paid.debt))
        setClientDebt(total)
    }

    useEffect(()=> {
        totalClientDebt()
    })


    const totalPaidSum = () => {
        let total = 0;
        orders.map(order=>
            (total += order.paid.payment))
        setPaidSum(total)
    }

    useEffect(()=> {
        totalPaidSum()
    })


    const totalIncome = () => {
        let total = 0;
        orders.map(order=>
            (total += order.paid.payment+order.paid.debt))
        setIncome(total)
    }

    useEffect(()=> {
        totalIncome()
    })

    const totalNetProfit = () => {
        let total = 0;
        orders.map(order=>
            (total +=order.paid.payment+order.paid.debt-order.service.primeCost))
        setNetProfit(total)
    }

    useEffect(()=> {
        totalNetProfit()
    })

    const totalPrimeCost = () => {
        let total = 0;
        orders.map(el=>
            (total +=el.service.primeCost))
        setPrimeCost(total)
    }

    useEffect(()=> {
        totalPrimeCost()
    })
    return (
        <div>
            <br/>
            <h2>Company results</h2><br/>
            <Table style={{
                borderCollapse: "collapse",
                tableLayout: "fixed",
                width: "1700px"
            }}>
                <thead style={{border: "2px solid black"}}>
                <tr>
                    <th style={{border: "2px solid black"}}>Job</th>
                    <th style={{border: "2px solid black"}}>Employee</th>
                    <th style={{border: "2px solid black"}}>Net Profit</th>
                    <th style={{border: "2px solid black"}}>Income</th>
                    <th style={{border: "2px solid black"}}>Prime Cost</th>
                    <th style={{border: "2px solid black"}}>Paid sum</th>
                    <th style={{border: "2px solid black"}}>Client debt</th>

                </tr>
                </thead>

                <tbody>
                {orders.map(order=>
                    <tr key={order._id}>
                        <td style={{border: "2px solid black"}}><b>{order.service.job}</b></td>
                        <td style={{border: "2px solid black"}}>{order.service.employee}</td>
                        <td style={{border: "2px solid black"}}>{order.paid.payment+order.paid.debt-order.service.primeCost}</td>
                        <td style={{border: "2px solid black"}}>{order.paid.payment+order.paid.debt}</td>
                        <td style={{border: "2px solid black"}}>{order.service.primeCost}</td>
                        <td style={{border: "2px solid black"}}>{order.paid.payment}</td>
                        <td style={{border: "2px solid black"}}>{order.paid.debt}</td>
                    </tr>)}
                </tbody>


                  <tr >
                        <td style={{border: "3px solid black"}}><b>All Services</b></td>
                        <td style={{border: "3px solid black"}}></td>
                        <td style={{border: "3px solid black"}}>{netProfit}</td>
                        <td style={{border: "3px solid black"}}>{income}</td>
                        <td style={{border: "3px solid black"}}>{primeCost}</td>
                        <td style={{border: "3px solid black"}}>{paidSum}</td>
                        <td style={{border: "3px solid black"}}>{clientDebt}</td>
                     </tr>

            </Table>
        </div>
    );
};

export default Results;
