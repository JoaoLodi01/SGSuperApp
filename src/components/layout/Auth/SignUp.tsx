import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SignUp() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.box}>
                <Image source={require('@/assets/images/icon-pf.png')}/>
                <Text>
                    Pessoa Física
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box}>
                <Image source={require('@/assets/images/icon-pj.png')}/>
                <Text>
                    Pessoa Jurídica
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 20
    },

    box: {
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#D1D5DC',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        gap: 15
    },
});