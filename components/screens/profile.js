import React from "react";
import {
  SafeAreaView,
  Image,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { useGlobalContext } from "../../context/GlobalContext";
import Line from "../../context/line";
import tws from "../../customtwrnc.js";



const ThirdRoute = () => {
  const {user} = useGlobalContext()

  return(
  <SafeAreaView>
    <View style={{ position: "relative" }}>
      <ImageBackground source={require("../../images/Profile.png")}
        style={tws`h-full w-full mt-7 items-center`}>
        <Text style={tws`absolute text-4xl font-bold text-yellow-5000 text-center pt-5`}>Profile</Text>
        <Image source={require("../../images/bigppf.png")} style={tws`h-45 w-45 mt-15`} />
        <Text style={tws` text-base text-yellow-5000 text-center pt-10`}>Jiang Yunfeng                                             {user.record.class}{"\n"} 
        Student number                                          {user.record.studentNumber}</Text>
        <Line />
        <Text style={tws` text-base text-yellow-5000 text-center`}>Email{"\n"}{user.record.email}</Text>
        <Line />
        <Text style={tws` text-base text-yellow-5000 text-center`}>Citizenship status{" \n"}{user.record.citizenship}</Text>
        <Line />
        <Text style={tws` text-base text-yellow-5000 text-center`}>Current GPA{"\n"}{user.record.gpa}</Text>
      </ImageBackground>
    </View>
  </SafeAreaView>
  )
};

export default ThirdRoute;
