import { useState, useRef, useContext, useEffect } from 'react';
import { NavLink, Link, useLocation } from "react-router-dom";
import AuthContext from "../store/auth-context";

const DeliveryNoticeCreation = () => {

    const authCtx = useContext(AuthContext);
    const location = useLocation();

    const shippingAddressRef = useRef();
    const itemQuantityRef = useRef();
    const deliveryTypeRef = useRef();
    const orderIdRef = useRef();
    const [email, setEmail] = useState(localStorage.getItem('email'));
    const [order_id, setOrderId] = useState();

    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');

    const logoutHandler = () => {
        authCtx.logout();
      }

    useEffect(() => {
        console.log(email)
        fetch('http://localhost:3060/getUser', {
            method: 'POST',
            body: JSON.stringify({
                email: email
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
            .then((data) => {
                console.log(data[0].user_first_name)
                setUserFirstName(data[0].user_first_name);
                setUserLastName(data[0].user_last_name)
            })
    }, [userFirstName, userLastName])

    useEffect(() => {
        console.log(location.state.order);
        setOrderId(location.state.order.order_id)
    }, [location]);


    const deliveryNoticeCreationHandler = (event) => {
        event.preventDefault();

        const shipping_address = shippingAddressRef.current.value;
        const item_quantity = itemQuantityRef.current.value;
        const delivery_type = deliveryTypeRef.current.value;
        const order_id = orderIdRef.current.value;

        console.log(shipping_address, item_quantity, delivery_type, order_id)

        fetch('http://localhost:3060/createDeliveryNotice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                shipping_address,
                item_quantity,
                delivery_type,
                order_id
            }),

        })
            .then((res) => {
                if (res.ok) {
                    alert("Delivery Notice Created!");
                } else {
                    alert("Server Error");
                }
            })
    }

    return (
        <div>
            <div className="wrapper">
                {/* Preloader */}

                {/* Navbar */}
                <nav className="main-header navbar navbar-expand navbar-dark">
                    {/* Left navbar links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="/dashboard" className="nav-link">Dashboard</a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="#" className="nav-link">Contacts</a>
                        </li>
                    </ul>
                    {/* Right navbar links */}
                    <ul className="navbar-nav ml-auto">
                        {/* Navbar Search */}
                        <li className="nav-item">
                            <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                                <i className="fas fa-search" />
                            </a>
                            <div className="navbar-search-block">
                                <form className="form-inline">
                                    <div className="input-group input-group-sm">
                                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                        <div className="input-group-append">
                                            <button className="btn btn-navbar" type="submit">
                                                <i className="fas fa-search" />
                                            </button>
                                            <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                                <i className="fas fa-times" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>
                        {/* Messages Dropdown Menu */}
                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#">
                                <i className="far fa-comments" />
                                <span className="badge badge-danger navbar-badge">3</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <a href="#" className="dropdown-item">
                                    {/* Message Start */}
                                    <div className="media">
                                        <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                Brad Diesel
                                                <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                                            </h3>
                                            <p className="text-sm">Call me whenever you can...</p>
                                            <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* Message End */}
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    {/* Message Start */}
                                    <div className="media">
                                        <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                John Pierce
                                                <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                                            </h3>
                                            <p className="text-sm">I got your message bro</p>
                                            <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* Message End */}
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    {/* Message Start */}
                                    <div className="media">
                                        <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                Nora Silvester
                                                <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                                            </h3>
                                            <p className="text-sm">The subject goes here</p>
                                            <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* Message End */}
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                            </div>
                        </li>
                        {/* Notifications Dropdown Menu */}
                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#">
                                <i className="far fa-bell" />
                                <span className="badge badge-warning navbar-badge">15</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span className="dropdown-item dropdown-header">15 Notifications</span>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-envelope mr-2" /> 4 new messages
                                    <span className="float-right text-muted text-sm">3 mins</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-users mr-2" /> 8 friend requests
                                    <span className="float-right text-muted text-sm">12 hours</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-file mr-2" /> 3 new reports
                                    <span className="float-right text-muted text-sm">2 days</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                                <i className="fas fa-expand-arrows-alt" />
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* /.navbar */}
                {/* Main Sidebar Container */}
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="/dashboard" className="brand-link">
                        <img src="dist/img/skylight-logo-modified.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                        <span className="brand-text font-weight-light">Skylight</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">{userFirstName} {userLastName}</a>
                            </div>
                        </div>
                        {/* SidebarSearch Form */}
                        <div className="form-inline">
                            <div className="input-group" data-widget="sidebar-search">
                                <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-sidebar">
                                        <i className="fas fa-search fa-fw" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library */}
                                <li className="nav-item">
                                    <Link to="/dashboard" className="nav-link">
                                        <i className="nav-icon fas fa-home" />
                                        <p>
                                            Dashboard
                                        </p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/deliveryNoticeList" className="nav-link">
                                        <i className="nav-icon fas fa-copy" />
                                        <p>
                                            Delivery Notice List
                                        </p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/purchaseRequisitionList" className="nav-link">
                                        <i className="nav-icon fas fa-list" />
                                        <p>
                                            Purchase Req. List
                                        </p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/userProfilePage" className="nav-link">
                                        <i className="nav-icon fas fa-user" />
                                        <p>
                                            User Profile
                                        </p>
                                    </Link>
                                </li>
                                <li className="nav-item" onClick={logoutHandler}>
                                    <Link to="/" className="nav-link">
                                        <i className="nav-icon fas fa-sign-out-alt" />
                                        <p>
                                            Logout
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </aside>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0">Delivery Notice Creation</h1>
                                </div>{/* /.col */}
                                <div className="col-sm-6">
                                </div>{/* /.col */}
                            </div>{/* /.row */}
                        </div>{/* /.container-fluid */}
                    </div>
                    {/* /.content-header */}
                    {/* Main content */}
                    <section className="content">
                        <div className="card card-primary">
                            {/* /.card-header */}
                            {/* form start */}
                            <form onSubmit={deliveryNoticeCreationHandler}>
                                <div className="card-body">
                                    {order_id !== undefined &&
                                        <div className="form-group">

                                            <label htmlFor="firstName">Order ID</label>
                                            <input type="text" className="form-control" defaultValue={order_id} id="order_id" placeholder="Order ID" required ref={orderIdRef} disabled />
                                        </div>
                                    }
                                    <div className="form-group">
                                        <label htmlFor="lastName">Shipping Address</label>
                                        <input type="text" className="form-control" id="shipping_address" placeholder="Shipping Address" ref={shippingAddressRef} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Item Quantity</label>
                                        <input type="text" className="form-control" id="item_quantity" placeholder="Item Quantity" ref={itemQuantityRef} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="billingAddress">Delivery Type</label>
                                        <input type="text" className="form-control" id="delivery_type" placeholder="Delivery Type" ref={deliveryTypeRef} required />
                                    </div>
                                </div>
                                {/* /.card-body */}
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>

                        </div>
                    </section>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}
                {/* Control Sidebar */}
                <aside className="control-sidebar control-sidebar-dark">
                    {/* Control sidebar content goes here */}
                </aside>
                {/* /.control-sidebar */}
                {/* Main Footer */}
                <footer className="main-footer">
                    <strong><a href="https://adminlte.io">Skylight IT Solutions Inc.</a>.</strong>
                    <div className="float-right d-none d-sm-inline-block">
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default DeliveryNoticeCreation;
