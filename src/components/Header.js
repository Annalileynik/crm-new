
import { Container,  Nav, Navbar,  NavLink} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {Route, Routes} from "react-router";
import Home from './Home'
import Orders from './Orders'
import Clients from './Clients'
import Services from './Services'
import Results from './Results'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                <Container>
                    <NavbarToggle area-controls='responsive-navbar-nav'/>
                    <NavbarCollapse id='responsive-navbar-nav'>
                        <Nav className='me-auto'>
                            <NavLink href='/'><strong> Home </strong></NavLink>
                            <NavLink href='/orders'><strong> Orders </strong></NavLink>
                            <NavLink href='/clients'><strong> Clients </strong></NavLink>
                            <NavLink href='/services'><strong> Services </strong></NavLink>
                            <NavLink href='/results'><strong> Results </strong></NavLink>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/orders' element={<Orders/>}/>

                <Route path='/clients' element={<Clients/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/results' element={<Results/>}/>
            </Routes>
        </>
    )
}
export default Header;