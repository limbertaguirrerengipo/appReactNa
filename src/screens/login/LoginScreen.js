
import React, { useState, useEffect }  from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
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
import { Card, Input,Button   } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {loginSession} from '../../redux/actions/loginActions';
import { useDispatch, useSelector } from 'react-redux';

const LoginScreen = () => {
    const dispatch = useDispatch();
    const [userName, onChangeUserName] = useState('');
    const [password, onChangePassword] = useState('');

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
      const _handleChangeUser = (text) => {
        onChangeUserName(text);
    };

    const _handleChangePassword = (text) => {
     onChangePassword(text);
    };
    const handleSubmitLogin =  () => {
        console.log('clicl ');
       dispatch(loginSession(userName, password));
    };


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
                        onChangeText={_handleChangeUser}
                        value={userName}
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
                        value={password}
                        onChangeText={_handleChangePassword}
                        />
                        <Button
                        buttonStyle={{ width: 150 }}
                        containerStyle={{ margin: 5 }}
                        disabledStyle={{
                            borderWidth: 2,
                            borderColor: "#00F"
                        }}
                        disabledTitleStyle={{ color: "#00F" }}
                        linearGradientProps={null}
                       // icon={<Icon name="react" size={15} color="#0FF" />}
                        iconContainerStyle={{ background: "#000" }}
                        loadingProps={{ animating: true }}
                        loadingStyle={{}}
                        onPress={handleSubmitLogin}
                        title="Ingresar"
                        titleProps={{}}
                        titleStyle={{ marginHorizontal: 5 }}
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
    },
    iconStyle: {
        padding: 12,
    },
    colorInputText: {
        color: '#FFF',
      },
});

export default LoginScreen;
