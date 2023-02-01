
import React, { useState } from 'react';
import { Text, View, TextInput, Button, Alert, ImageBackground, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import tws from '../../customtwrnc.js';
import pb from '../../lib/pb.js';
let user = {}


export default function Register({navigation}) {
  
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

    async function register(data){
      try {
        const authData = await pb.collection('users').create(data)
        return authData
      
      } catch (error) {
        console.log(error)
        console.log(error.data)
      }
    }



  return (
    <SafeAreaView>
      <ImageBackground source={require("../../images/Register.png")} style={tws`h-full w-full items-center`}>
     
        <Text style={tws`text-2xl font-bold text-yellow-5000 mt-35`}>Email</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={tws`pl-2 bg-blue-710 rounded-lg h-15 w-60 border-2 border-yellow-5000 text-yellow-5000`}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.firstName && <Text>This is required.</Text>}
        <Text style={tws`text-2xl font-bold text-yellow-5000 mt-5`}>Password</Text>
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={tws`pl-2 bg-blue-710 rounded-lg h-15 text-yellow-5000 w-60 border-2 border-yellow-5000`}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
         <Text style={tws`text-2xl font-bold text-yellow-5000 mt-5`}>Confirm Password</Text>
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={tws`pl-2 bg-blue-710 rounded-lg h-15 text-yellow-5000 w-60 border-2 border-yellow-5000`}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="confirmPassword"
        />
   

        <TouchableOpacity style={tws`mt-10 items-center bg-yellow-5000 rounded-full h-10 w-40`} title="Submit" onPress={handleSubmit(register)}>
          <Text style={tws`pt-1 text-blue-710 text-xl font-bold`}> Login </Text>
        </TouchableOpacity>

        <View style={tws`flex-row pt-10 `}>
          <Text style={tws`text-base text-yellow-5000 `}>Already have an account?</Text>
          <TouchableOpacity style={tws``} title="Submit" onPress={()=> navigation.navigate('login') }>
            <Text style={tws`pl-1 text-base text-yellow-5000 font-bold underline`}>Login!</Text>
          </TouchableOpacity>
        </View>
        <Image source={require("../../images/BFAS.png")} style={tws`mt-10`} />

      </ImageBackground>
    </SafeAreaView>
  );
}
