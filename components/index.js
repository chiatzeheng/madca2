import * as React from "react";
import { SafeAreaView, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TabView, SceneMap } from "react-native-tab-view";
import FirstRoute from "./screens/settings";
import SecondRoute from "./screens/homepage";
import ThirdRoute from "./screens/profile";
import tw from "twrnc";
import Fonts from "../context/fonts";

const TabViewExample = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first",title: "FirstRoute" },
    { key: "second", title: "SecondRoute"  },
    { key: "third", title: "ThirdRoute" },
  ]);

  const _handleIndexChange = (newIndex) => setIndex(newIndex);
  
  const _renderTabBar = (props) => {
    return (
      <SafeAreaView  style = {tw `absolute bottom-0 w-100 bg-transparent justify-center flex-row mb-15 pl-5 `}>
    {props.navigationState.routes.map((route, i) => {
      const isActive = props.navigationState.index === i;
      const backgroundColor = isActive ? "#555555" : "#a7a7a7";
      return (
        <TouchableOpacity
          key={i}
          style={{
            borderRadius: 20,
            paddingHorizontal: 5,
            marginBottom: 5,
            marginRight: 5,
            fontSize: 5,
            backgroundColor: backgroundColor
          }}>
          {i === 0 && <Ionicons name="ios-settings" size={24} color="#fff" />}
          {i === 1 && <Ionicons name="ios-home" size={24} color="#fff" />}
          {i === 2 && <Ionicons name="ios-person" size={24} color="#fff" />}
        </TouchableOpacity>
      );
    })}
</SafeAreaView>
    );
  };

  const _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  return (
    
    <TabView
      initialRouteName="Profile"
      style = {tw.style({backgroundColor: "#001220"}  ,`bg-transparent -mb-9`)}
      tabBarPosition="bottom"
      animationEnabled={false}
      navigationState={{ index, routes }}
      renderScene={_renderScene}
      renderTabBar={_renderTabBar}
      onIndexChange={_handleIndexChange}
    />
  );
};

export default TabViewExample;
