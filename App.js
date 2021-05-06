import { Iterable } from '@iterable/react-native-sdk';
import React from 'react';
import type { Node } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';

/////////
Iterable.initialize(api-key);
/////////

const App: () => Node = () => {
  const sendRequest = async () => {
    Iterable.setEmail("qweghj1245@gmail.com");
    Iterable.trackEvent("CompleteLogin", {
      email: "qweghj1245@gmail.com",
      userId: "9",
      createdAt: Date.now(),
      dataFields: {
        Customer_Id: "9",
        Customer_Last_Name: "",
        Customer_First_Name: "",
        Customer_Group: "Vip",
        Email: "qweghj1245@gmail.com",
        Phone: "0975347373",
      },
    });
  }

  return (
    <SafeAreaView>
      <View>
        <Text>testtest</Text>
        <Button title="BUTTON" onPress={sendRequest} />
      </View>
    </SafeAreaView>
  );
};

export default App;
