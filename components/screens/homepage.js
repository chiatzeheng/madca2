
import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  ImageBackground,
  View,
  Image,
  FlatList, Text, StatusBar,
  Animated, TouchableWithoutFeedback
} from "react-native";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "../searchbar";
import tw from "twrnc";
import axios from "axios";

const DATA = [
  {
    id: '1',
    title: 'Zalora Scholarship',
    body: " Provided by Zalora"
  },
  {
    id: '2',
    title: 'Cho Tiam Poh Bursary',
    body: "Provided by OCBC"

  },
  {
    id: '3',
    title: 'Third Item',
    body: 'Provided by Ministry of Defence'
  },
  {
    id: '4',
    title: 'Zalora Scholarship',
    body: " Provided by Zalora"
  },
  {
    id: '5',
    title: 'Cho Tiam Poh Bursary',
    body: "Provided by OCBC"

  },
  {
    id: '6',
    title: 'Third Item',
    body: 'Provided by Ministry of Defence'
  },
  {
    id: '7',
    title: 'Zalora Scholarship',
    body: " Provided by Zalora"
  },
  {
    id: '8',
    title: 'Cho Tiam Poh Bursary',
    body: "Provided by OCBC"

  },
  {
    id: '9',
    title: 'Third Item',
    body: 'Provided by Ministry of Defence'
  },
];



const Item = ({ title, body }) => {
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
        <View style={tw.style(`p-4 text-2xl h-25 w-70 leading-normal rounded-3xl my-3 mx-4`, {backgroundColor:"#F2E0C2"})}>
          <Text style={tw` font-semibold text-2xl text-center`}>{title}</Text>
          <Text style={tw`font-light text-l text-center`}>{body}</Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const renderItem = ({ item }) => (
  <Item title={item.title} body={item.body} />
);

export default SecondRoute = () => (

  <SafeAreaView >
    <ImageBackground
      source={require("../../images/Homepage.png")}
      style={tw`justify-center items-center h-full w-full`}
    >
      <StatusBar barStyle="light-content" backgroundColor="#001220" />
      <Image source={require("../../images/BFAS.png")} style={tw`h-25 w-30 `} />
      <Text style={tw`text-3xl text-center text-white`}>Welcome to BFAS {`\n`}Jiang Yunfeng</Text>
      <SearchBar/>
      <Text style={tw`text-3xl text-center text-white pb-5`}>Eligible Bursary</Text>
      <FlatList
        //onpress event which turns down opacity
        data={DATA}
        renderItem={renderItem}
        initialNumToRender={4}
        maxToRenderPerBatch={4}
        keyExtractor={item => item.id}
        style={tw`max-h-90 mb-12`}
      />
    </ImageBackground>
  </SafeAreaView>
);


