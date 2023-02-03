import React from "react";
import {
    Switch
} from "react-native";

export default CustSwitch=({isEnabled,toggleSwitch,...otherprops})=>{
    return (
        <Switch
        trackColor={{ false: '#767577', true: '#F2E0C2' }}
        thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
    />
    )
}