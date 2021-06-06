import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import logo from '../images/kinolovers.png';
import { Nav, Navbar } from 'react-bootstrap';
import '../App.css';
import Home from './Home';
import Login from './Login';
import Movies from './Movies';
import Series from './Series';
import MyList from './MyList';
import Kids from './Kids';
import Search from './Search';
import Details from './Details';
import TvDetails from './TvDetails';


class Menu extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        return (
            <>

<Navbar fixed='top' bg="white" expand="lg">
                    <Navbar.Brand as={Link} to="/"> <img src={logo} className="d-inline-block align-top" alt="Logo" height="35" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className='text-black link-menu mr-2' as={Link} to="/movies">
                                MOVIES
                            </Nav.Link>
                            <Nav.Link className='text-black link-menu mr-2' as={Link} to="/series">SERIES</Nav.Link>
                            <Nav.Link className='text-black link-menu mr-2' as={Link} to="/kids">KIDS</Nav.Link>
                            <Nav.Link className='text-black link-menu mr-2' as={Link} to="/search">
                                SEARCH
                            </Nav.Link>
                            {this.state.isLoggedIn ? <Nav.Link className='text-black link-menu mr-2' as={Link} to="/mylist">MY LIST</Nav.Link> : ""}
                            <Nav.Link className='btn botao-login px-4 rounded-pill' as={Link} to="/login">SIGN IN</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


                
                
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/movies' component={Movies} />
                    <Route path='/series' component={Series} />
                    <Route path='/kids' component={Kids} />
                    <Route path='/mylist' component={MyList} />
                    <Route path='/search' component={Search} />
                    <Route path='/details' component={Details}>
                        <Details />
                    </Route>
                    <Route path='/tvdetails' component={TvDetails}>
                        <TvDetails />
                    </Route>
                    <Route render={function () {
                        return <p>Not found</p>
                    }} />
                </Switch>
            </>
        );
    }
}

export default Menu;