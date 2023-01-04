


import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  ImageBackground,
  View,
  Image,
  FlatList, StyleSheet, Text, StatusBar,
  Animated, TouchableWithoutFeedback
} from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

const DATA = [
  {
    id: '1',
    title: 'Zalora Scholarship Provided by Zalora',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
    body: ''
  },
];
const Item = ({ title }) => {
  const [opacity] = useState(new Animated.Value(1));
  const ref = useRef();

  const animateIn = () => {
    Animated.timing(opacity, {
      toValue: 0.5,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const animateOut = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={animateIn}
      onPressOut={animateOut}
    >
      <Animated.View ref={ref} style={{ opacity }}>
        <View style={tw`bg-orange-200 p-4 text-2xl h-25 w-70 leading-normal rounded-3xl my-3 mx-4 shadow-md`}>
          <Text style={tw`font-medium text-2xl text-center `}>{title}</Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};


const renderItem = ({ item }) => (
  <Item title={item.title} />
);

export default SecondRoute = () => (
  <SafeAreaView >

    <ImageBackground
      source={require("../../images/Homepage.jpg")}
      style={tw`h-full w-full justify-center items-center`}
    >
      <StatusBar barStyle="light-content" backgroundColor="#001220" />
      <Image source={require("../../images/BFAS.png")} style={tw`h-25 w-30 mt-10`} />
      <Text>Hello</Text>
      <FlatList
        //onpress event which turns down opacity
        onPress={() => { }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </ImageBackground>
  </SafeAreaView>
);


