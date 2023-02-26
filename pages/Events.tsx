import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../config/firebase";



import firebase from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import {
    adddata
  } from "../redux/slice";

const EventsForm = () => {
    // const Allevents = useSelector((stt) => stt.events.previoustododata);
    // // const eventsstatus = useSelector((sttt) => sttt.todo);
    // console.log("Data events all", Allevents);
    
    const [title, setTitle] = useState("");
    const [session, setsession] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");   
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    // const [attendees, setAttendees] = useState([]);
    // useEffect(() => {
    //     if (Allevents.newstatus == true) {
    //       dispatch(fetchTodos());
    
    //       // console.log("NEWStatus");
    //     }
    //     // await dispatch(fetchTodos());
    //   }, []);
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

    const onSubmit = async (e) => {
        e.preventDefault();

        // create a new event object from the form data
        const event = {
            title,
            date,
            time,
            location,
            description,
            session
            // attendees: [],
        };

        console.log("Complete events", event);
        

        // add the event to Firestore
       const docRef = await addDoc(collection(db, "allevents"), { event });
        console.log("data added", docRef);

        // clear the form fields
        setTitle("");
        setDate("");
        setTime("");
        setLocation("");
        setDescription("");

        dispatch(adddata());

    };


    return (
        <>
            <main className="container mt-5">
                <div className="text-center">
                    <h1 className="mb-3">Create Event</h1>
                </div>

                <form id="event-form">
                    <div className="form-group">
                        <label htmlFor="title-input">Title:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title-input"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter the title of the event"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date-input">Date:</label>
                        <input
                            type="date"
                            className="form-control"
                            id="date-input"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            placeholder="Enter the date of the event"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="time-input">Time:</label>
                        <input
                            type="time"
                            className="form-control"
                            id="time-input"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            placeholder="Enter the time of the event"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location-input">Location:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="location-input"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Enter the location of the event"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description-input">Description:</label>
                        <textarea
                            className="form-control"
                            id="description-input"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}    
                            placeholder="Enter a description of the event"
                        />
                    </div>
                    <button type="submit" onClick={onSubmit} className="btn btn-primary">
                        Create Event
                    </button>
                </form>
            </main>

        </>
    );
};

export default EventsForm;
