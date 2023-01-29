import AsyncStorage from '@react-native-async-storage/async-storage';


export const balanceStorage = {

    setBalance: async (balance: number) => {

        
        await AsyncStorage.setItem('balance', balance.toString());

    },
    getBalance: async (): Promise<number> => {

        let balance = await AsyncStorage.getItem('balance');

        if (balance == null)
            return 0;

        return Number(balance);

    }

}
