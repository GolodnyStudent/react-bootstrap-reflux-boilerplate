window.jQuery = require('jquery');

require('bootstrap');
require('bootstrap.scss');

require('./stylesheets/main.scss');

/*React*/
var React = require('react');

/*React router*/
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

/*React bootstrap*/
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button,
    Nav = ReactBootstrap.Nav,
    Navbar = ReactBootstrap.Navbar,
    CollapsibleNav = ReactBootstrap.CollapsibleNav,
    NavItem = ReactBootstrap.NavItem,
    DropdownButton = ReactBootstrap.DropdownButton,
    MenuItem = ReactBootstrap.MenuItem;

/*Components*/
var Admin = require('./admin/Admin.js');
var Home = require('./home/Home.js');

var App = React.createClass({
    render: function () {
        return (
            <div className="container">
                <Navbar brand='React-Bootstrap' toggleNavKey={0}>
                    <CollapsibleNav eventKey={0}> {/* This is the eventKey referenced */}
                        <Nav navbar>
                            <NavItem eventKey={1} href='#admin'>Admin</NavItem>
                            <NavItem eventKey={2} href='#home'>Home</NavItem>
                            <DropdownButton eventKey={3} title='Dropdown'>
                                <MenuItem eventKey='1'>Action</MenuItem>
                                <MenuItem eventKey='2'>Another action</MenuItem>
                                <MenuItem eventKey='3'>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey='4'>Separated link</MenuItem>
                            </DropdownButton>
                        </Nav>
                        <Nav navbar right>
                            <NavItem eventKey={1} href='#home'>Home</NavItem>
                            <NavItem eventKey={2} href='#home'>Admin</NavItem>
                        </Nav>
                    </CollapsibleNav>
                </Navbar>
                <RouteHandler/>
            </div>
        );
    }
});

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="admin" handler={Admin}/>
        <Route name="home" handler={Home}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});