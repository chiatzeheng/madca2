
import React from "react";
import {
    SafeAreaView,
    ImageBackground,
    View,
} from "react-native";
import tw from "twrnc";


export default FirstRoute = () => (
    <SafeAreaView style={tw`relative`}>
        <ImageBackground 
           source={require("../../images/Settings.png")} 
            style={tw `h-full w-full mt-9`}
        >
        </ImageBackground>
    </SafeAreaView>
  );

