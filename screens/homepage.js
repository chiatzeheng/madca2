import * as React from "react";
import {
  SafeAreaView,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TabView, SceneMap } from "react-native-tab-view";

const FirstRoute = () => (
  <SafeAreaView>
    <View className="relative">
      <Image
        source={require("../images/Settings.png")}
        style = {{ resizeMode: "stretch"}}
        className="h-full w-full "
      />
    </View>
  </SafeAreaView>
);

const SecondRoute = () => (
  <SafeAreaView >
    <View className="relative">
      <Image
        source={require("../images/Homepage.jpg")}
        style = {{ resizeMode: "stretch"}}
        className="w-full h-full"
      />
    </View>
  </SafeAreaView>
);

const ThirdRoute = () => (
  <SafeAreaView>
    <View className="relative">
      <Image
        source={require("../images/Profile.png")} 
        style = {{ resizeMode: "stretch"}}
        className="absolute top-0 left-0 mt-10"
      />
    </View>
  </SafeAreaView>
);


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
     // <View className="rounded-full flex flex-row justify-center p-4 bg-white">
      <View className="absolute bottom-0 w-full" style={{ position: "absolute", zIndex: 1, backgroundColor: "transparent" }}>
        <View className="flex justify-center flex-row p-4">
        {props.navigationState.routes.map((route, i) => { 
          const isActive = props.navigationState.index === i;
          const backgroundColor = isActive ? "#555555" : "#a7a7a7";
  
          return (  
            <TouchableOpacity
              className="rounded-full py-1 px-2 mr-1 text-xs"
              key={i}
              style={{backgroundColor}}
            >
              {i === 0 && <Ionicons name="ios-settings" size={24} className="text-white" />}
              {i === 1 && <Ionicons name="ios-home" size={24} className="text-white" />}
              {i === 2 && <Ionicons name="ios-person" size={24} className="text-white" />}
            </TouchableOpacity>
          );
        })}
      </View>
      </View>
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
      className= " bg-dark-blue"
      tabBarPosition="bottom"
      navigationState={{ index, routes }}
      renderScene={_renderScene}
      renderTabBar={_renderTabBar}
      onIndexChange={_handleIndexChange}
    />
  );
};

export default TabViewExample;
