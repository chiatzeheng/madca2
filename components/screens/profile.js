import React from "react";
import {
  SafeAreaView,
  Image,
  View,
  Text,
  ImageBackground,
} from "react-native";
import tw from "twrnc";
import Line from "../../context/line";
import tws from "../../customtwrnc.js";


const ThirdRoute = () => {
  return(
  <SafeAreaView>
    <View style={{ position: "relative" }}>
      <ImageBackground source={require("../../images/Profile.png")}
        style={tws`h-full w-full mt-7 items-center`}>
        <Text style={tws`absolute text-4xl font-bold text-yellow-5000 text-center pt-5`}>Profile</Text>
        <Image source={require("../../images/bigppf.png")} style={tw`h-45 w-45 mt-15`} />
        <Text style={tws` text-base text-yellow-5000 text-center pt-10`}>Jiang Yunfeng                                             DIT1B09 {"\n"} 
        Student number                                          2227861</Text>
        <Line />
        <Text style={tws` text-base text-yellow-5000 text-center`}>Email{"\n"}jyf@ichat.sp.edu.sg</Text>
        <Line />
        <Text style={tws` text-base text-yellow-5000 text-center`}>Citizenship status{" \n"}International </Text>
        <Line />
        <Text style={tws` text-base text-yellow-5000 text-center`}>Current GPA{"\n"}4.00</Text>
      </ImageBackground>
    </View>
  </SafeAreaView>
  )
};

export default ThirdRoute;
a