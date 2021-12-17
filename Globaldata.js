// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
// import Styles from "./Style";
// import Header from "./Header";
// import TodoComp from "./TodoComp";
// import TodoMap from "./TodoMap";

// const GlobalData = (showForm, handleShowForm )=>{
//     // static todo data
//     const arr = [
//         { title: "Start making a presentation", checked: false, id: 1 },
//         { title: "Pay for rent", checked: false, id: 2 },
//         { title: "Buy a milk", checked: false, id: 3 },
//         { title: "Don’t forget to pick up Mickael from school", checked: false, id: 4 },
//         { title: "Buy a chocolate for Charlotte", checked: false, id: 5 }
//     ];
//     // maintain state
//     const [idCount, setidCount] = useState(arr[arr.length - 1].id + 1)
//     const [text, settext] = useState("");
//     const [newTodo, setnewTodo] = useState(arr);
//     const [delBtn , setDelBtn] = useState("");

//     // object stucture
//     const obj = {
//         title: text, checked: false, id: idCount
//     }
//     console.log(arr , ".........arrray todo")
//     return (
//         <View>
//         {/* <TodoComp /> */}
//         <TodoMap 
//             showForm = {showForm}
//             handleShowForm = {handleShowForm}
//             arr = {arr}
//             idCount = {idCount}
//             setidCount = {setidCount}
//             text = {text}
//             settext = {settext}
//             newTodo = {newTodo}
//             setnewTodo = {setnewTodo}
//             delBtn = {delBtn}
//             setDelBtn = {setDelBtn}
//             obj = {obj}
//         />
//         {/* <Header /> */}
//         </View>
//     )
// }

// export default GlobalData;