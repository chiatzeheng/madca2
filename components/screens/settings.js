
import React from "react";
import {
    SafeAreaView,
    ImageBackground,
    View,
    Text,
    Image,
    StyleSheet
} from "react-native";
import tw from "twrnc";
import {Ionicons } from "@expo/vector-icons";
import Line from "../../context/line";
import tws from '../../customtwrnc.js'


const FirstRoute = () => {
    return(
    <SafeAreaView tw={`relative`}>
        <ImageBackground 
           source={require("../../images/Settings.png")} 
            style={tw `h-full w-full mt-9`}
        >
            <Text style={tws`text-base text-3xl text-yellow-5000 text-center`}>Settings</Text>
            <View style={tws`flex-row h-15 w-90 bg-yellow-5000 mx-7 mt-5 rounded-full`}>
                    <Image source = {require("../../images/profilepic.png")}
                    style={tw`border-black h-10 w-10 mt-3 ml-4 border-black`}/>
                    <Ionicons name="cloud" size={24} color="black" style={tw`relative  ml-65 mt-5 `}/>
            </View>

            <View style={tw`pt-10 `}>
                <Text style={styles.text}><Ionicons name="notifications-circle" size={24} color="#F2E0C2"/> Notifications                                               <Ionicons name="toggle" size={35} color="#F2E0C2"/></Text>
                <Line/>
                <Text style={styles.text}><Ionicons name="cash-outline" size={24} color="#F2E0C2"/> Currency                                                   {<Text style={tws`text-blue-710`}>$SGD</Text>}</Text>
                <Line/>
                <Text style={styles.text}><Ionicons name="git-compare" size={24} color="#F2E0C2"/> Change Password</Text>
                <Line/>
                <Text style={styles.text}><Ionicons name="contrast" size={24} color="#F2E0C2"/> Dark Mode                                                  <Ionicons name="toggle" size={35} color="#F2E0C2"/></Text>
                <Line/>
                <Text style={styles.text}><Ionicons name="swap-vertical-outline" size={24} color="#F2E0C2"/> Version(1.0.0)                                          {<Text style={tws`text-blue-710`}>$SGD</Text>}</Text>
            </View>
        </ImageBackground>
    </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    color: {
        color: ""
    },
    text: {
        fontSize: 20,
        color: "#F2E0C2",
    } 
});

export default FirstRoute;
