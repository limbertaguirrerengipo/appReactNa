
import React, { useState, useEffect }  from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View
} from 'react-native';

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';
import { Card, Input,Button   } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from 'react-redux';
import {cerrarSesion} from '../../redux/actions/loginActions';

const Home = () => {
    const dispatch = useDispatch();
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const handleSubmitCloseLogin =  () => {
        dispatch(cerrarSesion());
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
                    <Card.Title style={styles.titulo}>Home</Card.Title>                    
                        <View style={styles.contenedor}>                     
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
                            onPress={handleSubmitCloseLogin}
                            title="cerrar sesion"
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
    titulo: {
        marginTop: 20,
        marginBottom: 30,
    },
    contenedor: {
        position: "relative",
        alignItems: "center"
    }
});

export default Home;
