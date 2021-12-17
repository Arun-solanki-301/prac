// import props from './TodoMap'
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Styles from "./Style";

const TodoComp = ({ name, checking }) => {
  const handleCheck = (id, check) => {
    checking(id, !check);
  };
  return (
    <View>
      <View style={Styles.Todolist}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => handleCheck(name.id, name.checked)}
            style={name.checked ? Styles.buttoniconActive : Styles.buttonicon}
          >
            <Text style={{ color: name.checked ? "blue" : "white" }}></Text>
          </TouchableOpacity>
          <Text style={Styles.TodoText}>{name.title}</Text>
        </View>
        <TouchableOpacity
          style={name.checked ? Styles.IsActivebtn : Styles.IsnotActivebtn}
        >
          <Text style={Styles.IsActivebtnText}></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoComp;
