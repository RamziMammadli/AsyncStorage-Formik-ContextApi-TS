import { View, Text, SafeAreaView, TextInput, StyleSheet, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { balanceStorage } from '../utils/storage/BalanceStorage';


const StorageSample = () => {

  const [value, setvalue] = useState('');
  const [totalBalance, settotalBalance] = useState<number>(0);


  useEffect(() => {

    balanceStorage.getBalance()
      .then(data => {
        settotalBalance(data);
      })

  }, []);



  const addBalance = () => {


    balanceStorage.setBalance(totalBalance + Number(value))
      .then(res => {
        settotalBalance(totalBalance + Number(value));
      })

  }



  return (
    <SafeAreaView>
      <Text style={{ fontSize: 30 }}>Total Balance: {totalBalance}</Text>
      <View>
        <TextInput
          placeholder='Value'
          style={styles.input}
          onChangeText={setvalue}
        />
        <Button title='Add' onPress={addBalance}></Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default StorageSample