
import React, { useState } from 'react';
import { Text, View, TextInput, Button, Alert, ImageBackground, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import tws from '../../customtwrnc.js';
import pb from '../../lib/pb.js';

export default function Login() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  async function login(data) {
    console.log(data)
    try {

      const authData = await pb.collection('users').authWithPassword(data.email, data.password);
      console.log(authData)
    }
    catch (err) {
      console.log(err.url)
      console.log(err.OriginalError)
      console.log(err.data)

    }
  }

  const onSubmit = data => console.log(data);

  return (
    <SafeAreaView>
      <ImageBackground source={require("../../images/Login.png")} style={tws`h-full w-full items-center`}>
        <Image source={require("../../images/BFAS.png")} style={tws`mt-10`} />
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
   

        <TouchableOpacity style={tws`mt-10 items-center bg-yellow-5000 rounded-full h-10 w-40`} title="Submit" onPress={handleSubmit(login)}>
          <Text style={tws`pt-1 text-blue-710 text-xl font-bold`}> Login </Text>
        </TouchableOpacity>
        <View style={tws`pt-10 flex-row items-center`}>
          <View style={tws`h-0.3 w-40 bg-yellow-5000`}></View>
          <Text style = {tws`font-bold text-yellow-5000 px-3`}>OR</Text>
          <View style={tws`h-0.3 w-40 bg-yellow-5000`}></View>
        </View>

        <View style={tws`flex-row pt-10 `}>
          <Text style={tws`text-base text-yellow-5000 `}>Need an account?</Text>
          <TouchableOpacity style={tws``} title="Submit" onPress={handleSubmit(onSubmit)}>
            <Text style={tws`text-base text-yellow-5000 font-bold underline`}>Sign Up!</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>
    </SafeAreaView>
  );
}
