import React from "react";
import {
  SafeAreaView,
  Image,
  View,
  Text,
  ImageBackground,
} from "react-native";
import tw from "twrnc";
import fonts from "../../context/fonts";
import Line from "../../context/line";


const ThirdRoute = () => {
  return(
  <SafeAreaView>
    <View style={{ position: "relative" }}>
      <ImageBackground source={require("../../images/Profile.png")}
        style={tw`h-full w-full mt-2 items-center`}>
        <Image source={require("../../images/profilepic.png")} style={tw`h-50 w-50 mt-10`} />
        <Text style={tw`text-base text-l text-white text-center pt-10`}>Jiang Yunfeng                                             DIT1B09 {"\n"} 
        Student number                                          2227861</Text>
        <Line />
        <Text style={tw.style(`text-base text-l text-white text-center`)}>Email{"\n"}jyf@ichat.sp.edu.sg</Text>
        <Line />
        <Text style={tw`text-base text-l text-white text-center`}>Citizenship status{" \n"}International </Text>
        <Line />
        <Text style={tw`text-base text-l text-white text-center`}>Current GPA{"\n"}4.00</Text>
      </ImageBackground>
    </View>
  </SafeAreaView>
  )
};

export default ThirdRoute;
