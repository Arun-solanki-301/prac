import React from "react";
import TodoMap from "./TodoMap";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
// import { NavigationContainer } from "react-navigation"
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeIcon = "/home/etech/assigments/new/myapp/assets/iconHome.png";
const CheckedIcon = "/home/etech/assigments/new/myapp/assets/icons8-checked-64.png";
const UncheckedIcon = "/home/etech/assigments/new/myapp/assets/iconUnchecked.png";
const color = "blue"

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

  const dataLength = data.length

  return (
    <NavigationContainer >
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
          options={{
            tabBarActiveTintColor: "green",
            headerShown: true,
            tabBarBadge: dataLength,
            tabBarLabel: undefined,
            tabBarLabelStyle: {
              // fontSize: verticalScale(10),
              // ...defaultStyles.textMedium,
              letterSpacing: 0.5,
              lineHeight: 16,
              marginBottom: 4,
            },

            tabBarIcon: ({color, size}) => (
              <Image
                source={HomeIcon}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: color,
                  marginBottom: -5,
                }}
              />
            ),
          }}



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
          options={{
            tabBarActiveTintColor: "green",
            headerShown: true,
            tabBarBadge: dataLength,
            tabBarLabel: undefined,
            tabBarLabelStyle: {
              // fontSize: verticalScale(10),
              // ...defaultStyles.textMedium,
              letterSpacing: 0.5,
              lineHeight: 16,
              marginBottom: 4,
            },

            tabBarIcon: ({color, size}) => (
              <Image
                source={HomeIcon}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: color,
                  marginBottom: -5,
                }}
              />
            ),
          }}





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


          options={{
            tabBarActiveTintColor: "green",
            headerShown: true,
            tabBarBadge: dataLength,
            tabBarLabel: undefined,
            tabBarLabelStyle: {
              // fontSize: verticalScale(10),
              // ...defaultStyles.textMedium,
              letterSpacing: 0.5,
              lineHeight: 16,
              marginBottom: 4,
            },

            tabBarIcon: ({color, size}) => (
              <Image
                source={HomeIcon}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: color,
                  marginBottom: -5,
                }}
              />
            ),
          }}

        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;




{/* <Tab.Screen
          name={SCREENS_NAME.SHOP}
          component={SCREENS.SHOP}
          options={{
            tabBarActiveTintColor: colors.secondary,
            headerShown: false,
            tabBarBadge: pendingOrderCount,
            tabBarLabel: I18n.t('STORE'),
            tabBarLabelStyle: {
              fontSize: verticalScale(10),
              ...defaultStyles.textMedium,
              letterSpacing: 0.28,
              lineHeight: 16,
              marginBottom: 4,
            },

            tabBarIcon: ({color, size}) => (
              <Image
                source={shopIcon}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: color,
                  marginBottom: -5,
                }}
              />
            ),
          }}
        /> */}
