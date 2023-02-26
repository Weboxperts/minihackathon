import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useRouter } from 'next/router';

const Navs = () => {
  const Allusers = useSelector((stt) => stt.events.allusersdata);
  console.log("coming", Allusers.useremail)
  const [session, setsession] = useState(false);
  const [useremail, setuseremail] = useState("");
  const router = useRouter();
  // setuseremail(Allusers.useremail)
  const logoutsub = () => {
    signOut(auth)
    localStorage.removeItem('UID')
    setsession(false)
    router.push('/signin');
  }
  useEffect(() => {
    var op = localStorage.getItem('UID')
    if (op) {
      console.log("ok", op);
      setsession(true)

    }
    else {
      console.log("no",);

    }
  }, []);




  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Events App </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Link href="/">Home</Link>
          {session == true ? (<><Link href="/signin">{useremail}</Link>
            <Link href='' onClick={logoutsub}>Logout</Link>
            <Link href="/Ourevents">All Events</Link>
            <Link href="/Events">Add Events</Link>
          </>
          )
            :
            (<>
              <Link href="/signin">Log In</Link>
              <Link href="/signup">Sign Up</Link></>)}
          

          {/* <Link href="#">List</Link> */}

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navs;
