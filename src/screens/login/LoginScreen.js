
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Card, Input  } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const LoginScreen = () => {
    
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    console.log('el estilo es : ',isDarkMode);
    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>

                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    <Card containerStyle={{}} wrapperStyle={{}}>
                    <Card.Title style={styles.titulo}>LOGIN</Card.Title>                    
                    <View style={styles.contenedor}>
                        <Image
                        style={styles.image}
                       
                        resizeMode="contain"
                        source={{
                            uri:
                            "https://img2.freepng.es/20180319/lde/kisspng-india-login-computer-icons-emoticon-medicine-user-login-icon-5ab05c8be74df7.6661394815215074679474.jpg"
                        }}
                        />                        
                        <Input
                        containerStyle={{}}
                        disabledInputStyle={{ background: "#ddd" }}
                        inputContainerStyle={{}}
                        errorMessage=""
                        errorStyle={{}}
                        errorProps={{}}
                        inputStyle={{}}
                        label="Nombre usuario"
                        labelStyle={{}}
                        labelProps={{}}
                        leftIcon={<Icon name="account-outline" size={20} />}
                        leftIconContainerStyle={{}}
                        rightIconContainerStyle={{}}
                        placeholder="Usuario"
                        />
                        <Input
                        containerStyle={{}}
                        disabledInputStyle={{ background: "#ddd" }}
                        inputContainerStyle={{}}
                        errorMessage=""
                        errorStyle={{}}
                        errorProps={{}}
                        inputStyle={{}}
                        label="Contraseña"
                        labelStyle={{}}
                        labelProps={{}}
                        leftIcon={<Icon name="account-outline" size={20} />}
                        leftIconContainerStyle={{}}
                        rightIconContainerStyle={{}}
                        placeholder="Contraseña"
                        secureTextEntry={true}
                        />
                    </View>
                    </Card>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    highlight: {
        fontWeight: '700',
    },
    titulo: {
        marginTop: 20,
        marginBottom: 30,
    },
    image: {
        marginTop: 1,
        marginBottom: 20,
        width: "100%", 
        height: 100 
    },
    contenedor: {
        position: "relative",
        alignItems: "center"
    }
});

export default LoginScreen;
