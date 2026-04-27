import SignIn from "@/src/components/layout/Auth/SignIn";
import SignUp from "@/src/components/layout/Auth/SignUp";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

    const [mode, setMode] = useState<"login" | "register">("login");

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/images/icon-pdv.png")} />
            </View>

            <View style={styles.swipe}>
                <TouchableOpacity 
                    style={[
                        styles.bottomSwipe,
                        mode === 'login' && { backgroundColor: 'white' }
                    ]}
                    onPress={() => setMode('login')}
                >
                    <Text style={mode === 'login' && { color: '#0059DF' }}>
                        Entrar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[
                        styles.bottomSwipe,
                        mode === 'register' && { backgroundColor: 'white' }
                    ]}
                    onPress={() => setMode('register')}    
                >
                    <Text style={mode === 'register' && { color: '#0059DF' }}>
                        Registrar
                    </Text>
                </TouchableOpacity>
            </View>


            <View style={styles.body}>
                { mode === "login" ? <SignIn /> : <SignUp />}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },

    header: {
        alignItems: 'center',
        padding: 20
    },

    body: {
        marginHorizontal: 25,
    },

    swipe: {
        backgroundColor: '#F6F6F6',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 25,
    },

    bottomSwipe: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        margin: 3,
        borderRadius: 20
    }
});