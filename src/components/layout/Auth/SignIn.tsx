import { View, TouchableOpacity, StyleSheet, Text, TextInput } from "react-native";

export default function SignIn() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.titleInput}>
                    Email
                </Text>
                <View style={styles.borderInput}>
                    <TextInput style={styles.textInput} placeholder="E-mail ou CPF..." placeholderTextColor={'#D1D5DC'}>
                        
                    </TextInput>
                </View>       
            </View>

            <View style={styles.box}>
                <Text style={styles.titleInput}>
                    Senha
                </Text>
                <View style={styles.borderInput}>
                    <TextInput style={styles.textInput} placeholder="*********" placeholderTextColor={'#D1D5DC'}>

                    </TextInput>
                </View>  
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.btnFooter}>
                    <Text style={styles.btnText}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    },

    box: {

    },

    titleInput: {

    },

    borderInput: {
        borderWidth: 1,
        borderColor: '#D1D5DC',
        borderRadius: 12,
        flexDirection: 'row',
    },

    textInput: {
        padding: 12,
    },

    footer: {
        alignItems: 'center',
        marginTop: 20
    },

    btnFooter: {
        backgroundColor: '#155DFC',
        width: '100%',
        alignItems: 'center',
        borderRadius: 12,
        padding: 10
    },

    btnText: {
        color: 'white',
        fontSize: 16
    }
});