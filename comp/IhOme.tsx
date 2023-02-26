import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
// import { Modal } from 'react-bootstrap';

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import {
    fetchevents,
    
} from "../redux/slice";
import { Card, Button, Col, Container, Row,Modal } from 'react-bootstrap';

const IhOme = () => {
    const [session, setsession] = useState("");
    const [iidd, setiidd] = useState("");
    const [selectedEvent, setSelectedEvent] = useState(null);

    const Allevents = useSelector((stt:any) => stt.events.previoustododata);
    console.log("EVents all", Allevents);
    const Alleventsstatus = useSelector((sttt:any) => sttt.events.addstatus);
    console.log("status is", Alleventsstatus);
    


    const dispatch = useDispatch();
    useEffect(() => {
        var op = localStorage.getItem('UID')
        if (op) {
          console.log("ok", op);
          setsession(op)
    
        }
        else {
          console.log("no",);
    
        }
      }, []);

    useEffect(() => {

        dispatch(fetchevents());

        //    console.log("ppppppppppp");

        // await dispatch(fetchTodos());
    }, []);
    return (
        <>
            <Container>
                <h1>Our Events</h1>
                <hr />
                <Row>

                    {Allevents.map((items, index, total) => {
                        // console.log("asdasdasdasdssssssssss", items);
                        return session == items.session? ((
                            <Col sm={4}>
                                <Card>
                                    <Card.Img variant="top" src="https://via.placeholder.com/350x150" alt="Event Image" />
                                    <Card.Body>
                                        <Card.Title>{items.title}</Card.Title>
                                        <Card.Text>
                                            {items.description}
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => setSelectedEvent(items)}>Learn More</Button>

                                    </Card.Body>
                                </Card>
                            </Col>
                        )):("asd")
                        
                    })}
                </Row>
            </Container>
            <Modal show={selectedEvent !== null} onHide={() => setSelectedEvent(null)}>
  <Modal.Header closeButton>
    <Modal.Title>{selectedEvent?.title}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>{selectedEvent?.description}</p>
    <p>Session: {selectedEvent?.title}</p>
    <p>Session: {selectedEvent?.date}</p>
    <p>Session: {selectedEvent?.time}</p>
    <p>Session: {selectedEvent?.location}</p>
    {/* Add other event details here */}
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setSelectedEvent(null)}>Close</Button>
  </Modal.Footer>
</Modal>

        </>
    );
};

export default IhOme;
