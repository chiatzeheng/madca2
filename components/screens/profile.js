import React from "react";
import {
    SafeAreaView,
    Image,
    View,
} from "react-native";
import tw from "twrnc";

export default ThirdRoute= () => (
    <SafeAreaView>
      <View style={{position: "relative"}}>
        <Image
          source={require("../../images/Profile.png")}
          style={{width: "100%", height: 300}}
        />
      </View>
    </SafeAreaView>
  );
  