
import React from "react";
import {
    SafeAreaView,
    ImageBackground,
    View,
    Text,
    Image
} from "react-native";
import tw from "twrnc";
import {Ionicons } from "@expo/vector-icons";
import Line from "../../context/line";

const FirstRoute = () => {
    return(
    <SafeAreaView tw={`relative`}>
        <ImageBackground 
           source={require("../../images/Settings.png")} 
            style={tw `h-full w-full mt-9`}
        >
            <Text style={tw`text-base text-3xl text-white text-center`}>Settings</Text>
            <View style={tw`flex-row h-15 w-90 bg-slate-500 mx-7 mt-5 rounded-full`}>
                    <Image source = {require("../../images/profilepic.png")}
                    style={tw`h-10 w-10 mt-3 ml-4 border-black`}/>
                    <Ionicons name="cloud" size={24} color="white" style={tw`relative  ml-65 mt-5 `}/>
            </View>

            <View style={tw`pt-10`}>
                <Text style={tw`text-base text-xl text-white `}><Ionicons name="notifications-circle" size={24} color="white"/> Notifications                                               <Ionicons name="toggle" size={35} color="white"/></Text>
                <Line/>
                <Text style={tw`text-base text-xl text-white `}><Ionicons name="cash-outline" size={24} color="white"/> Currency                                                   $SGD</Text>
                <Line/>
                <Text style={tw`text-base text-xl text-white `}><Ionicons name="git-compare" size={24} color="white"/> Change Password</Text>
                <Line/>
                <Text style={tw`text-base text-xl text-white `}><Ionicons name="contrast" size={24} color="white"/> Dark Mode                                                  <Ionicons name="toggle" size={35} color="white"/></Text>
                <Line/>
                <Text style={tw`text-base text-xl text-white `}><Ionicons name="swap-vertical-outline" size={24} color="white"/> Version(1.0.0) </Text>
            </View>
        </ImageBackground>
    </SafeAreaView>
    )
};

export default FirstRoute;
