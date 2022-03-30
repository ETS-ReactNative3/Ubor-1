import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { Auth } from "aws-amplify";

const CustomDrawer =  (props) => {
const  [User,setUser]=useState();
  const hello = async() => {
    setUser(await Auth.currentUserInfo());
  }
  useEffect(()=>{
    hello();
    console.log(User);
  },[])
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: '#212121', padding: 15}}>

        {/* User Row */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <View style={{
            backgroundColor: '#cacaca',
            width: 50,
            height: 50,
            borderRadius: 25,
            marginRight: 10,
          }}/>

          <View>
            <Text style={{color: 'white', fontSize: 24}}>{User?.attributes['custom:fname']+' '+User?.attributes['custom:lname']}</Text>
            
          </View>
        </View>

        <View style={{
          borderBottomWidth: 1,
          borderBottomColor: '#919191',
          borderTopWidth: 1,
          borderTopColor: '#919191',
          paddingVertical: 5,
          marginVertical: 10,
        }}>
          <Pressable
            onPress={() => {console.warn('Messages')}}>
            <Text style={{color: '#dddddd', paddingVertical: 5,}}>Messages</Text>
          </Pressable>
        </View>
      </View>

      <DrawerItemList {...props} />
      <Pressable onPress={() => {Auth.signOut()}}>
          <Text style={{color: 'grey',fontWeight: "bold", paddingVertical: 8,paddingLeft: 20}}>Sign Out</Text>
        </Pressable>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
