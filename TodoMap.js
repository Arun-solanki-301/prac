import React, { useEffect, useState } from "react";
import TodoComp from "./TodoComp";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import Styles from "./Style";
import Header from "./Header";
import Google from "./GoogleSign"



const TodoMap = ({ showForm, handleShowForm, data, handleData, filter }) => {
  
  const [idCount, setidCount] = useState(data[data?.length - 1].id + 1);
  const [text, settext] = useState("");
  const [newTodo, setnewTodo] = useState(data);
  const [delBtn, setDelBtn] = useState(true);

  useEffect(() => {
    if (data && data.length) {
      let isChecked = false;
      data.forEach((val) => {
        if (val.checked) {
          isChecked = true;
        }
      });
      setDelBtn(isChecked);
    }
  }, [data]);

  const obj = {
    title: text,
    checked: false,
    id: idCount,
  };
  const newTodoItem = () => {
    setidCount(idCount + 1);
    let newArr = Object.assign([], data);
    if (obj.title) {
      newArr.push(obj);
    }
    settext("");
    handleShowForm();
    handleData(newArr);
  };
  // id and checked from parent
  const checking = (id, checks) => {
    let newArr = Object.assign([], data);
    newArr.map((curr) => {
      if (curr.id === id) {
        console.log(curr, checks);
        curr.checked = checks;
      }
    });
    // const issFasle = newArr.every((curr) => {
    //   return curr.checked === false;
    // });
    // if (issFasle) {
    //   setDelBtn("");
    // }
    handleData(newArr);
  };

  const handleText = (e) => {
    if (e == "") {
      Alert("Todo cannot be blank");
    } else settext(e);
  };

  const deleteSelected = () => {
    const newArr = [];
    data.forEach((curr, index) => {
      if (curr.checked) {
        newArr.push(index);
      }
    });
    return newArr;
  };

  // handleData(newTodo);

  return (



    <View style={{ minHeight: 800 }}>
    

      <View>
        <Header
          showForm={showForm}
          handleShowForm={handleShowForm}
          deleteSelected={deleteSelected}
          setnewTodo={handleData}
          todo={data}
          delBtn={delBtn}
          setDelBtn={setDelBtn}
          
        />
        <Google />

        {data
          .filter((val) =>
            filter === "checked"
              ? val.checked
              : filter === "unchecked"
              ? !val.checked
              : val
          )
          .map((curr) => {
            return <TodoComp name={curr} key={curr.id} checking={checking} />;
          })}
      </View>
      {showForm ? (
        <View style={Styles.InputCompMain}>
          <View>
            <Text style={Styles.InputTextHead}>Todo</Text>
            <TextInput
              style={Styles.Input}
              placeholder="useless placeholder"
              value={text}
              onChangeText={(e) => handleText(e)}
            />
            <View style={Styles.InputTodoBtnDiv}>
              <View>
                <TouchableOpacity
                  onPress={handleShowForm}
                  style={Styles.InputTodoBtn}
                >
                  <Text style={Styles.InputTodoBtnText}>Cancel</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={Styles.InputTodoBtn}
                  onPress={() => newTodoItem()}
                >
                  <Text style={Styles.InputTodoBtnText}>Done</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};

export default TodoMap;
// arr, idCount, setidCount, text, settext, newTodo, setnewTodo, delBtn, setDelBtn, obj
  // handle id count by idcount state