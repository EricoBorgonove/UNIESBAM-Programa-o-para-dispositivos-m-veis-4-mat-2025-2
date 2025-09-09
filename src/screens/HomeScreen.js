import {Button, Text, View } from 'react-native';


const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>
                Home Screen
            </Text>
            <Button
                title="Sair"
                onPress={()=> navigation.navigate('Login')}
            />
        </View>
    )
}

export default HomeScreen;