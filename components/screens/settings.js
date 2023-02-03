
import React, { useState } from "react";
import {
    SafeAreaView,
    ImageBackground,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from "@expo/vector-icons";
import Line from "../../context/line";
import tws from '../../customtwrnc.js'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';
import CustSwitch from "../../context/switch";


let rate = 1, symbol = "$", name = "SGD", darkMode = true


const FirstRoute = () => {
    const navigation = useNavigation();


    const [currencyRate, setCurrencyRate] = useState(0);
    const [currencySymbol, setCurrencySymbol] = useState("$");
    const [currencyName, setCurrencyName] = useState("SGD");
    const [isEnabled, setIsEnabled] = useState(true);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        darkMode = isEnabled
    }

    return (
        <SafeAreaView tws={`relative`}>
            <ImageBackground
                source={require("../../images/Settings.png")}
                style={tws`h-full w-full mt-9`}
            >
                <Text style={tws`text-base text-3xl text-yellow-5000 text-center`}>Settings</Text>
                <View style={tws`flex-row h-15 w-90 bg-yellow-5000 mx-7 mt-5 rounded-full`}>
                    <Image source={require("../../images/profilepic.png")}
                        style={tw`border-black h-10 w-10 mt-3 ml-4 `} />
                    <TouchableOpacity title="Submit" onPress={() => navigation.navigate('firstpage')}>
                        <Ionicons name="cloud" size={24} color="black" style={tws`relative  ml-65 mt-5 `} />
                    </TouchableOpacity>
                </View>


                <View style={tws` pt-10 `}>
                    <Text style={styles.text}><Ionicons name="notifications-circle" size={24} color="#F2E0C2" /> Notifications</Text>
                   <CustSwitch />
                </View>
                <Line />

                <Text style={styles.text}><Ionicons name="cash-outline" size={24} color="#F2E0C2" /> Currency                                                  {currencySymbol + currencyName}</Text>
                <Picker
                    style={tws`text-yellow-5000 `}
                    onValueChange={(itemValue, itemIndex) => {
                        setCurrencyRate(itemValue.rate)
                        setCurrencySymbol(itemValue.symbol)
                        setCurrencyName(itemValue.name)
                        rate = currencyRate
                        symbol = currencySymbol
                        name = currencyName
                    }
                    }
                    selectedValue={currencyRate}>
                    <Picker.Item label="Change" value="" />
                    <Picker.Item label="SGD" value={{ rate: 1, symbol: "$", name: "SGD" }} />
                    <Picker.Item label="USD" value={{ rate: 0.76, symbol: "$", name: "USD" }} />
                    <Picker.Item label="GBP" value={{ rate: 0.62, symbol: "£", name: "GBP" }} />
                </Picker>


                <Line />
                <Text style={styles.text}><Ionicons name="git-compare" size={24} color="#F2E0C2" /> Change Password</Text>
                <Line />
                <View >
                    <Text style={styles.text}><Ionicons name="contrast" size={24} color="#F2E0C2" /> DarkMode</Text>
                    <CustSwitch  />
                </View>
                <Line />
                <Text style={styles.text}><Ionicons name="swap-vertical-outline" size={24} color="#F2E0C2" /> Version(1.0.0)</Text>
            </ImageBackground>
        </SafeAreaView>
    )

};
export const CurrencyInfo = {
    currencyRate: { rate },
    currencySymbol: { symbol },
    currencyName: { name }
}
export const DarkMode = darkMode

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    text: {
        fontSize: 20,
        color: "#F2E0C2",
    }
});



export default FirstRoute;