import React from "react";
import {
  SafeAreaView,
  Image,
  View,
  Text,
  ImageBackground,
  StyleSheet
} from "react-native";
import tw from "twrnc";

export default ThirdRoute = () => (
  <SafeAreaView>
    <View style={{ position: "relative" }}>
      <ImageBackground source={require("../../images/Profile.png")}
        style={tw`h-full w-full mt-2 items-center`}>

        <Image source={require("../../images/profilepic.png")} style={tw`h-50 w-50 center mt-10`} />
        <Text style={styles.container}>Jiang Yunfeng                   DIT1B09</Text>
        <Text style={styles.container}>Student number                 2227861</Text>
        <Text style={tw`text-white`}>___________________________________________</Text>
        <Text style={tw`text-base font-normal text-gray-700 text-center`}>Email{"\n"}jyf@ichat.sp.edu.sg</Text>
    
        <Text style={tw`text-base font-normal text-gray-700  text-center`}>Citizenship status{"\n"}International</Text>
        
        <Text style={tw`text-base font-normal text-gray-700  text-center`}>Current GPA{"\n"}4.00</Text>
      </ImageBackground>

    </View>
  </SafeAreaView>
);


const styles = new StyleSheet.create({
  container: {
    textDecorationColor: "#F2E0C2",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  line:{
    textDecorationColor: "#F2E0C2",
    height: 1
  }
});