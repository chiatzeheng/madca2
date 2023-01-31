
import React from 'react';
import { Text, View, ImageBackground, SafeAreaView, TouchableOpacity, Image } from "react-native";
import tws from '../../customtwrnc.js';

export default function Firstpage({navigation}) {

  return (
    <SafeAreaView>
      <ImageBackground source={require("../../images/Homey.png")} style={tws`h-full w-full items-center`}>

        <Image source={require("../../images/BFAS.png")} style={tws`mt-40`} />

        <TouchableOpacity onPress={()=>navigation.navigate('login')}  style={tws`pt-3 mt-15 rounded-full h-15 w-55 items-center border-2 border-yellow-5000`}>
            <Text style={tws`text-2xl font-bold text-yellow-5000 `}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>navigation.navigate('register')}  style={tws` pt-3 mt-5 rounded-full h-15 w-55 items-center border-2 border-yellow-5000`}>
            <Text style={tws`text-2xl font-bold text-yellow-5000 `}>Register</Text>
        </TouchableOpacity>

     
        <View style={tws`pt-10 flex-row items-center`}>
          <View style={tws`h-0.3 w-40 bg-yellow-5000`}></View>
          <Text style = {tws`font-bold text-yellow-5000 px-3`}>OR</Text>
          <View style={tws`h-0.3 w-40 bg-yellow-5000`}></View>
        </View>

      </ImageBackground>
    </SafeAreaView>
  );
}
