import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    StatusBar,
    SafeAreaView,
    SectionList,
    TextInput,
    ImageBackground,
    Button,
    TouchableHighlight,
    Image,
    Form
} from 'react-native'
import { useForm } from "react-hook-form"
import pb from "../lib/pocketbase"
import tw from "twrnc"

const Auth = () => {

    const { register, handleSubmit } = useForm();
    const [isLoading, setLoading] = useState(false);

    let isLoggedIn = pb.authStore.isValid;

    async function login(data) {
        setLoading(true)
        console.log(data.email, data.password)
        try {
            const authData = await pb
                .collection("users")
                .authWithPassword(data.email, data.password)
        } catch (e) {
           console.log(e.message)
        }
        setLoading(false)
    }


    function logout(data) {
        pb.authStore.clear();
    }

    if(isLoggedIn) {
        return (
            <View>
                <Text>
                    Hello
                </Text>
            </View>
        )
    }
    else

    return (
        <SafeAreaView style={styles.container}>
            <Text>Please Log In</Text>
            <Text style={tw`text-slate-500`}>Logged In: {isLoggedIn && pb.authStore.model.email }</Text>
            <View style={styles.container} >
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    {...register("email")}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    {...register("password")}
                />
                <TouchableHighlight style={styles.button} disabled = {isLoading}    onPress={handleSubmit(login)}>
                    <Text style={tw`text-slate-500`}>{isLoading ? "Loading": "Login"}</Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'black',
    },
    input: {
        marginLeft: '20%',
        marginTop: 15,
        height: 40,
        borderColor: '#f2e0c2',
        borderWidth: 1,
        color: 'white',
        borderRadius: 10,
        backgroundColor: 'black',
        width: '60%',
        textAlign: 'center'
    },
    text: {
        marginLeft: '20%',
        marginTop: 15,
        color: '#f2e0c2',
        fontSize: 20,
    },
    text2: {
        marginLeft: 10,
        color: '#f2e0c2',
        fontSize: 13,
        marginTop: 20,
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#f2e0c2',
        padding: 10,
        margin: 15,
        marginLeft: "35%",
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: "30%"
    },
    background: {
        flex: 1,
        resizeMode: 'strech',
        justifyContent: 'center',

    },
    line: {
        color: '#f2e0c2',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: 20,
        marginTop: 20
    },
    logo: {
        width: 80,
        height: 80,
        marginLeft: '30%',
        marginRight: '30%',
        marginTop: 60
    }
});

export default Auth

  {/* <ImageBackground
                source={require("../images/Homepage.png")}
                style={styles.background}
                resizeMode="cover">
                <Text style={styles.text}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'email'}
                    {...register("email", { required: true })}
                />
                <Text style={styles.text}>Password</Text>
                <TextInput
                    type="password"
                    style={styles.input}
                    placeholder={'password'}
                    {...register("password", { required: true })}
                />
                         <Text style={styles.line}>____________________________________________________</Text>
                <View style={styles.button} >
                    <Button title="hello" type="submit" style={{ backgroundColor: "inherit" }} onPress={handleSubmit(login)} disabled={isLoading}>{isLoading ? "Loading" : "Login"}</Button>
                </View>
                <Text style={styles.text2}>Already a user?Login!</Text>
                <View style={styles.logo}>
                    <Image style={styles.logo} source={require("../images/profilepic.png")} />
                </View>
            </ImageBackground> */}