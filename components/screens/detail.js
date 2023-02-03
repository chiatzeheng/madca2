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
    TouchableOpacity,
    Image,
    Pressable,
    Linking,
  } from 'react-native';
  import React, { useState, useEffect, useCallback } from 'react';
  
  export const CustomHeader = ({name,...otherprops}) => {
    return (<View style={styles.header}>
      <TouchableOpacity style={styles.backCotianer}><Image style={styles.back}
        source={require('./img/return.png')} /></TouchableOpacity>
      <Text style={styles.title}>{name}</Text>
    </View>)
  }
  
  export const ApplyButton = ({ url, ...otherprops }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        alert(`THis Url : ${url} can not be use for now ,we will fix it ASAP`);
      }
    }, [url]);
  
  
    return (
  
      <TouchableOpacity style={styles.button} onPress={
        (event) => { handlePress() }
      }>
        <Text>Apply Now!</Text>
      </TouchableOpacity>
  
    );
  };
  
  export const ApplicationLink = ({ url, ...otherprops }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        alert(`THis Url : ${url} can not be use for now ,we will fix it ASAP`);
      }
    }, [url]);
  
  
    return (
      <View style={styles.container2}>
        <Text style={styles.text3}>Application Link:</Text>
        <TouchableOpacity style={styles.link} onPress={
          (event) => { handlePress() }
        }>
          <Text style={{ margin: 7, alignSelf: 'center' }}>{url}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  
  
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
  
    },
    header: {
      flexDirection: 'row',
    },
    text: {
      marginLeft: 20,
      color: '#f2e0c2',
      fontSize: 12,
      marginRight: 20,
      marginTop: 10,
  
    },
    text2: {
      marginLeft: 10,
      color: '#f2e0c2',
      fontSize: 13,
      marginTop: 5,
      textAlign: 'center',
    },
    container2: {
      flexDirection: 'row',
      marginTop: 10,
    },
    text3: {
      marginTop: 5,
      color: '#f2e0c2',
      fontSize: 10,
    },
    line: {
      borderColor: '#f2e0c2',
      height: 0,
      width: "100%",
      borderTopWidth: 1,
      marginTop: 5
    },
    button: {
      backgroundColor: '#f2e0c2',
  
      padding: 10,
      margin: 15,
      marginLeft: '35%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      width: '30%',
    },
    link: {
      backgroundColor: '#f2e0c2',
      borderRadius: 10,
      width: '70%',
      marginLeft: 10
    },
    background: {
      resizeMode: 'cover',
      // height:1000
    },
  
    logo: {
      width: 250,
      height: 70,
      alignSelf: 'center'
    },
    back: {
      width: '100%',
      height: 50,
  
    },
    title: {
      marginTop: 15,
      color: '#f2e0c2',
      fontSize: 20,
      alignSelf: 'center',
    },
    backCotianer: {
      width: '14%',
      marginRight: '10%',
    }
  });