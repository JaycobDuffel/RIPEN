import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('secretkey', jsonValue)
    } catch (e) {
        // saving error
        console.log(e)
    }
}

const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('secretkey')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
        console.log(e)
    }
}

export default {
    storeData,
    getData
}