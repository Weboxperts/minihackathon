//todoSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db, createUserWithEmailAndPassword } from "../config/firebase";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { RootState } from "../redux/store";
type TodoDatatype = {
  todoname: string;
  useremail: string;
  usertask: string;
};
// import { v4 } from 'uuid';
// export const fetchusers = createAsyncThunk(
//   "events/signupuser",
//   async (usersdata) => {
//     // add the todo to the database
//     const userCredential = await createUserWithEmailAndPassword(usersdata.auth, usersdata.email, usersdata.password);
//     const user = userCredential.user;
//     const user1 = userCredential.user.uid;
    
    
//     return user
//   }
// );

// export const addTodoAsync = createAsyncThunk(
//   "todos/addTodoAsync",
//   async (todo: TodoDatatype) => {
//     // add the todo to the database
//     console.log("plpl", todo);

//     const docRef = await addDoc(collection(db, "todos"), { todo });

//     // return the added todo object with its generated ID

//     return {
//       id: docRef.id,
//       ...todo,
//     };
//   }
// );

export const fetchevents = createAsyncThunk("allevents/fetchevents", async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "allevents"));
console.log("Basit", querySnapshot);

    let alleventss = [];
    querySnapshot.forEach((dbdata) => {
      alleventss.push({
        title: dbdata.data()?.event?.title,
        date: dbdata.data()?.event?.date,
        time: dbdata.data()?.event?.time,
        location: dbdata.data()?.event?.location,
        description: dbdata.data()?.event?.description,
        session: dbdata.data()?.event?.session,
      });
        console.log("Abdul . . .", alleventss);
    });
    // console.log("ololol");

    return alleventss;
  } catch (error) {
    console.log("================catch====================");
    console.log("asddddddddddddddddddddddddddddddd", error);
    console.log("====================================");
  }
});

// export const deletethunk = createAsyncThunk(
//   "todos/deletethunk",
//   async (completeitems) => {
//     console.log("email", completeitems.useremail);
//     try {
//       const docRef = doc(db, "todos", completeitems.id);

//       deleteDoc(docRef);

//       return completeitems;
//       console.log("delete is working");
//     } catch (error) {
//       console.log("================catch====================");
//       console.log("asddddddddddddddddddddddddddddddd", error);
//       console.log("====================================");
//     }
//   }
// );

// export const updatethunk = createAsyncThunk(
//   "todos/updatethunk",
//   async (updatetodo) => {

//     // console.log("all new updated todo", updatetodo);
//     //  const docRefs = doc(db, "todos", updatetodo.id);
//     // updateDoc(docRefs)

//     // return updatetodo
//     try {
//     } catch (error) {
//       console.log("================catch====================");
//       console.log("asddddddddddddddddddddddddddddddd", error);
//       console.log("====================================");
//     }
//   }
// );

const eventss = createSlice({
  name: "events",

  initialState: {
    previoustododata: [],
    allusersdata: [],
    // edittododata: [],
    // pp:{
    //   todoname: "",
    //   useremail: "",
    //   usertask: "",
    //   id: "",
    // },
    status: "",
    addstatus: false,
    fetchstatus: false,
    loading: false,
  },
  reducers: {
    adddata: (allstate, receive) => {
      // console.log("Data is coming on reducer", receive.payload);
      console.log("ooooollll");
      
      allstate.addstatus = true;
 },
    // editclickdata: (allstate, receive) => {
    //      console.log("editdataaaaaaaaaaaaaaaaaaaaaaaaa", receive.payload);
    //     // var allstate.pp = allstate.previoustododata.find((iitt)=>  iitt.id == receive.payload.id)
    //     // allstate.previoustododata = receive.payload
    //     allstate.pp = allstate.previoustododata.find((iitt)=> iitt.id == receive.payload.id)
    // },
//     finalupdatedata: (allstate, receive) => {
//       console.log("Final Update data", receive.payload);
//       allstate.previoustododata = allstate.previoustododata.map((iitt) => iitt.id == receive.payload.id ? receive.payload : iitt
//         // return receive.payload
//     );
//       console.log("Dinal dinal", allstate.previoustododata);

//       allstate.newstatus = true;
//  },
  },
  extraReducers: (b) => {
    // b.addCase(signupuser.fulfilled, (state, receive) => {
    //   state.allusersdata = receive.payload
     
    //   console.log("opop", state.allusersdata);
      
    //   console.log("Users added", receive.payload);
      
    // });
    // handle pending and fulfilled states of the addTodoAsync thunk action
    b.addCase(fetchevents.pending, (state) => {
      state.status = "loading";
      state.loading = true;
      // console.log("loading", state.status);
    })
      .addCase(fetchevents.fulfilled, (state, action) => {
        state.previoustododata = action.payload;
        console.log("popopopo", state.previoustododata);
        
        state.status = "succeeded";
        state.fetchstatus = true;
        // state.loading = false;
        // console.log("featched", state.status);
      })
      // .addCase(deletethunk.fulfilled, (state, action) => {
      //   const ttt = state.previoustododata;
      //   const itemss = action.payload;

      //   state.previoustododata = ttt.filter(
      //     (itemsss, indexx) => itemsss.id !== itemss.id
      //   );
      //   state.newstatus = true;

      //   // state.previoustododata = action.payload;
      //   state.status = "deleted succeeded";
      //   // state.newstatus = false;
      //   // state.loading = false;
      //   // console.log("featched", state.status);
      // })

      // .addCase(fetchevents.rejected, (state, action) => {
      //   state.error = action.error.message;
      //   state.status = "failed";
      //   // console.log("faild", state.status);
      // });
  },

});

export const { adddata } = eventss.actions;
// export const {editclickdata, finalupdatedata} = eventss.actions;
export default eventss.reducer;
export type { RootState };

