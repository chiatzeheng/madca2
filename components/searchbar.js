//create a search bar component

import React from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import tw from "twrnc";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={tw.style(`mt-5 h-14 max-w-80 rounded-full flex-row mb-5`, {backgroundColor:"#F2E0C2"})}>
        <Feather name="search" style={{ fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15}} />
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={tw`flex-1 text-lg`}
            placeholder="Search"
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
        </View>
    );
    }

export default SearchBar;

