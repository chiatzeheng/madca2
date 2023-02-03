
import React from 'react';
import { Text, View, ImageBackground, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { useGlobalContext } from '../../context/GlobalContext.js';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import tws from '../../customtwrnc.js';
import tw from "twrnc"

WebBrowser.maybeCompleteAuthSession();

export default function Firstpage({navigation}) {
  const { googlelogin } = useGlobalContext()

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '815592282485-nul0ftvgueetesk524qcput0tphls4b5.apps.googleusercontent.com',
    iosClientId: '815592282485-km18ffu1su1su8mv5ebfu05ib68d7tpi.apps.googleusercontent.com',
    androidClientId: '815592282485-03ociq6g0aco43bqkeesulajjj8recnf.apps.googleusercontent.com',
  });

  const getUserDataGoogle = async () => {
    const userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
    });

    userInfoResponse.json().then(data => {
        setUser(data);
    })

    setIsGoogleSignIn(true);
}
 
function prompty() { 
 promptAsync();
  
}

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
    }
  }, [response]);

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

        <TouchableOpacity onPress={prompty}  style={tw` items-center pt-10`}>
             <Image  source={require("../../images/aweda.png")}/>
        </TouchableOpacity>

      </ImageBackground>
    </SafeAreaView>
  );
}
