
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Styles/header.css'
import logo from './logo.png'
const items = [
//     {
//         name: ["Strengths"],
//         subitems: [["Strengths","/strength","0.5"]],

//     },
//     {
//         name: ["Events"],
//         subitems: [["Events","/","0.2"],["Freshers", "#", "2.1"], ["Farewell", "#", "2.2"], ["CWP", "#", "2.3"], ["Concalve", "#", "2.4"], ["Magazine", "#", "2.5"]]
//     },
//     {
//         name: ["Students"],
//         subitems: [["Students","/student","0.3"],["Intern Chats", "#", "3.1"], ["Career Choices", "#", "3.2"], ["Placement Postulates", "/postulates", "3.3"], ["TTP", "#", "3.4"], ["Summer Projects", "#", "3.5"], ["Competition", "#", "3.6"], ["Informal Session", "#", "3.7"], ["Resumes", "#", "3.8"], ["Alumnus", "#", "3.9"], ["Merchs.", "#", "3.10"]]
//     },
//     {
//         name: ["Portals"],
//         subitems: [["Portals","/portal","0.6"],["Internship", "#", "6.1"], ["CivERE", "#", "6.2"]]
//     },
//     {
//         name: ["Team"],
//         subitems: [["Current Team","/team","0.4"],['Past Teams',"/pastteams",'1.4']]
//     },
    
 ]


const Menu = items.map((i) => {

    return (
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

                    <NavDropdown renderMenuOnMount={true} title={i.name[0]} id="basic-nav-dropdown">
                        {Sub_list(i.subitems)}
                    </NavDropdown>

            </Nav>
        </Navbar.Collapse>
    )
})
function Sub_list(i) {
    const l = i.map((j) => {
        return (

                <NavDropdown.Item key={j[2]} href={j[1]}>{j[0]}</NavDropdown.Item>

        )
    })

    return l
}


function Menubar() {


    return (
        <Navbar sticky="top" bg="light" expand="lg" id="menubar">
            <Container>
                <Navbar.Brand href="/">
                    <img id='soce-logo' src={logo} alt='Logo'></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto justify-content-center">
                        {Menu}
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/strength">Strengths</Nav.Link>
                        <Nav.Link href="/contact-us">Events</Nav.Link>
                        <Nav.Link href="/student">Students</Nav.Link>
                        <Nav.Link href="/portal">Portals</Nav.Link>
                        <Nav.Link href="/team">Team</Nav.Link>
                        <Nav.Link href="/contact-us">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menubar;