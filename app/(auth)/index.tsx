import SignIn from "@/src/components/layout/Auth/SignIn";
import SignUp from "@/src/components/layout/Auth/SignUp";
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Index() {

    const [mode, setMode] = useState<"login" | "register">("login");

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/images/icon-pdv.png")} />
                <View>

                </View>
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
        justifyContent: 'center'
    },

    header: {
        alignItems: 'center'
    },

    body: {
        margin: 25,
    },

});