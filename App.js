import React from "react";
import TodoMap from "./TodoMap";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function App() {
  const [data, setData] = React.useState([
    { title: "Start making a presentation", checked: false, id: 1 },
    { title: "Pay for rent", checked: false, id: 2 },
    { title: "Buy a milk", checked: false, id: 3 },
    {
      title: "Don’t forget to pick up Mickael from school",
      checked: false,
      id: 4,
    },
    { title: "Buy a chocolate for Charlotte", checked: false, id: 5 },
  ]);
  const [showForm, setShowForm] = React.useState(false);
  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleData = (data) => {
    setData(data);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={() => (
            <TodoMap
              showForm={showForm}
              handleShowForm={handleShowForm}
              data={data}
              handleData={handleData}
            />
          )}
        />
        <Tab.Screen
          name="checked"
          component={() => (
            <TodoMap
              showForm={showForm}
              handleShowForm={handleShowForm}
              data={data}
              handleData={handleData}
              filter={"checked"}
            />
          )}
        />
        <Tab.Screen
          name="unchecked"
          component={() => (
            <TodoMap
              showForm={showForm}
              handleShowForm={handleShowForm}
              data={data}
              handleData={handleData}
              filter={"unchecked"}
            />
          )}
        />
        {/* <Tab.Screen name = "checkedTodo" component={Chekedbox} />
        <Tab.Screen name = "UncheckedTodo" component={Unchekedbox} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
