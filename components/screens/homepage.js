
import React, { useState, useEffect} from "react";
import {
  SafeAreaView,
  ImageBackground,
  View,
  Image,
  FlatList, Text, StatusBar,
  TouchableOpacity, Button
} from "react-native";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "../searchbar";
import tws from "../../customtwrnc.js";
import pb from "../../lib/pb.js";
import { useGlobalContext } from "../../context/GlobalContext";
import { useNavigation } from "@react-navigation/native";

const Item = ({ title, body }) => {
  return (
    <TouchableOpacity >
      <View style={tws`p-4 text-2xl h-25 w-70 leading-normal rounded-3xl my-3 mx-4 bg-yellow-5000`}>
        <Text style={tws` font-semibold text-2xl text-center`}>{title}</Text>
        <Text style={tws`font-light text-center`}>{body}</Text>
      </View>
    </TouchableOpacity>
  );
};

const renderItem = ({ item }) => (
  <Item title={item.title} body={item.body} />
);

const SecondRoute = () => {

  const navigation = useNavigation();
  const { user } = useGlobalContext();

  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await pb.collection('data').getFullList(10 ,{ sort: '-created', });
        setRecords(data.map((record, index) => ({ 
          body: record.body, 
          id: index + 1, 
          title: record.title 
        })));
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, []);

  return (
    <SafeAreaView >
      <ImageBackground
        source={require("../../images/Homepage.png")}
        style={tws`justify-center items-center h-full w-full`}
      >
        <StatusBar barStyle="light-content" backgroundColor="#001220" />
        <Image source={require("../../images/BFAS.png")} style={tws`h-25 w-30 `} />
        <Text style={tws`text-3xl text-center text-yellow-5000`}>Welcome to BFAS {`\n`}{<Text style={tws`text-3xl font-bold`}>{user.record.name}</Text>}</Text>
        <SearchBar />
        <Text style={tws`text-3xl text-center text-yellow-5000 pb-5`}>Eligible Bursary</Text>
        <FlatList
          //onpress event which turns down opacity
          data={records}
          renderItem={renderItem}
          initialNumToRender={4}
          maxToRenderPerBatch={4}
          keyExtractor={item => item.id}
          style={tws`max-h-90 mb-12`}
        />
      </ImageBackground>
    </SafeAreaView>
  )
};


export default SecondRoute;