import * as React from "react";
import {
  SafeAreaView,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

const FirstRoute = () => (
  <SafeAreaView>
    <View className="justify-center bg-dark-blue">
    <Image
      source={require("../images/Settings.png")}
      className="h-full w-full"
    />
    </View>
  </SafeAreaView>
);



const SecondRoute = () => (
  <SafeAreaView >
    <View>
    <Image
      source={require("../images/Homepage.jpg")}
      className="mb-2 h-full w-full object-cover"
    />
    </View>
  </SafeAreaView>
);

const ThirdRoute = () => (
  <SafeAreaView>
    <View  className="justify-center bg-dark-blue">
    <Image source={require("../images/Profile.png")} 
    className="mt-10"/>
    </View>
  </SafeAreaView>
);

const TabViewExample = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: ""},
    { key: "second", title: "" },
    { key: "third", title: "" },
  ]);

  const _handleIndexChange = (newIndex) => setIndex(newIndex);

  const _renderTabBar = (props) => {
    return (
      <View className="flex justify-center flex-row p-4">
        {props.navigationState.routes.map((route, i) => {
          const isActive = props.navigationState.index === i;
          const backgroundColor = isActive ? "#555555" : "#a7a7a7";

          return (  
            <TouchableOpacity
              className="rounded-full py-1 px-2 mr-1 text-xs"
              key={i}
              style={{ backgroundColor}}
              onPress={() => setIndex(i)}
            />
          );
        })}
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
      lazy={({ route }) => route.name === 'Profile'}
      renderScene={_renderScene}
      renderTabBar={_renderTabBar}
      onIndexChange={_handleIndexChange}
    />
  );
};

export default TabViewExample;
