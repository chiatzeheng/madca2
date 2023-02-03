
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
import Line from "../../context/line";
import BFAS from "../../images/BFAS.png";

var bigdata = ""
let imgsource = ""



const SecondRoute = () => {
  const { user, fetchData, records  } = useGlobalContext();

  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);


async function mix(id){
  bigdata = await records[id]
  if(bigdata)
  setIsNew(true)
}


const Item = ({title, body, index }) => {

  return (
  <TouchableOpacity onPress={()=>mix(index)} >
    <View style={tws`p-4 text-2xl h-25 w-70 leading-normal rounded-3xl my-3 mx-4 bg-yellow-5000`}>
      <Text style={tws` font-semibold text-2xl text-center`}>{title}</Text>
      <Text style={tws`font-light text-center`}>{body}</Text>
    </View>
  </TouchableOpacity>
  );
};

  return (
    <SafeAreaView >
      {!isNew ? (
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
            data={records}
            renderItem={({ item, index }) => (
              <Item title={item.title} body={item.body} id={item.id} index={index} />
            )}
            initialNumToRender={4}
            maxToRenderPerBatch={4}
            keyExtractor={item => item.id}
            style={tws`max-h-90 mb-12`}
          />
        </ImageBackground>
       ) : ( 

        <ImageBackground
        source={require("../../images/Homepage.png")}
        style={tws`h-full w-full`}
      >
      
   
          <View style={tws`flex-row`}>
        
            
          <TouchableOpacity style={tws`pt-5`} onPress={()=> setIsNew(false)} ><Ionicons name="ios-arrow-back" color="#F2E0C2" size={32}></Ionicons></TouchableOpacity>
            <View style={tws`items-center`}> 
            <Text style={tws`text-3xl font-black pt-5 text-yellow-5000`}>{bigdata.title}</Text>
            </View>
          </View>
          <Line />
    
      <View style={tws`items-center`}> 
      <Image source={require("../../images/0.png")} style={tws`h-25 w-60 `} />
      </View>
          <Text style={tws`text-xl font-bold text-center text-yellow-5000`}>{bigdata.body}</Text>
          <Image/>

          <Text style={tws`font-bold text-lg text-yellow-5000`}>Offering </Text>
          <Text style={tws` text-lg text-yellow-5000`}>{bigdata.offering}    </Text>

      
          <Text style={tws`font-bold text-lg text-yellow-5000`}>Description{"\n"}     </Text>
          <Text style={tws` text-lg text-yellow-5000`}>{bigdata.data}</Text>
      


          <View style={tws`pt-20 flex-row items-center`}>
              <Text style={tws`pl-5 pt-1 font-bold text-yellow-5000`}>Application Link:</Text>
              <TouchableOpacity style={tws`items-center rounded-full ml-5 bg-yellow-5000 h-7 w-60`}>
                <Text style={tws`text-blue-710`}>  </Text>
              </TouchableOpacity>
            </View>

        <View style={tws` items-center`}>
            <TouchableOpacity style={tws`items-center mt-10 rounded-full ml-5 bg-yellow-5000 h-15 w-40`}>
              <Text style={tws`font-black pt-3 text-xl text-blue-710`}>Apply Now!</Text>
            </TouchableOpacity>
            </View>
        </ImageBackground>
      )} 
    </SafeAreaView>
  )
};

export default SecondRoute;


