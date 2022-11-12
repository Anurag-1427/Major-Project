// import React, { useEffect } from "react";
// import {
//   Container,
//   Form,
//   FormControl,
//   Nav,
//   Navbar,
//   NavDropdown,
// } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
//       <Container>
//         <Navbar.Brand>
//           <Link to="/">Profilic</Link>
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="m-auto">
//             {userInfo && (
//               <Form inline>
//                 <FormControl
//                   type="text"
//                   placeholder="Search"
//                   className="mr-sm-2"
//                   onChange={(e) => setSearch(e.target.value)}
//                 />
//               </Form>
//             )}
//           </Nav>
//           <Nav>
//             {userInfo ? (
//               <>
//                 <Nav.Link href="/mynotes">
//                   <Link to="mynotes">My Notes</Link>
//                 </Nav.Link>
//                 <NavDropdown
//                   title={`${userInfo.name}`}
//                   id="collasible-nav-dropdown"
//                 >
//                   <NavDropdown.Item href="/profile">
//                     {/* <img
//                       alt=""
//                       src={`${userInfo.pic}`}
//                       width="25"
//                       height="25"
//                       style={{ marginRight: 10 }}
//                     /> */}
//                     My Profile
//                   </NavDropdown.Item>

//                   <NavDropdown.Divider />
//                   <NavDropdown.Item onClick={logoutHandler}>
//                     Logout
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               </>
//             ) : (
//               <Nav.Link href="/login">Login</Nav.Link>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;
