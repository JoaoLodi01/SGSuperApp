import { View, TouchableOpacity, StyleSheet, Text, TextInput, Image } from "react-native";
import { Checkbox } from 'expo-checkbox';
import { useState } from "react";

export default function SignIn() {

    const [marked, setMarked] = useState<boolean>(false);
    const [showPassword, setShowPassword] =useState<boolean>(false);

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.titleInput}>
                    Email
                </Text>
                <View style={styles.borderInput}>
                    <Image 
                        source={require('@/assets/images/icon-email.png')}
                        style={styles.icons} 
                    />
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="E-mail ou CPF..." 
                        placeholderTextColor={'#818181'} 
                    />
                </View>       
            </View>

            <View style={styles.box}>
                <Text style={styles.titleInput}>
                    Senha
                </Text>
                <View style={styles.borderInput}>
                        <Image 
                            source={require('@/assets/images/icon-password.png')} 
                            style={styles.icons} 
                        />
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="*********" 
                        placeholderTextColor={'#818181'}
                        secureTextEntry={!showPassword} 
                    />
                    <TouchableOpacity 
                        style={styles.showPassword} 
                        onPress={() => setShowPassword(prev => !prev)}
                    >
                        <Image 
                            source={require('@/assets/images/icon-eye.png')} 
                            style={styles.icons} 
                        />
                    </TouchableOpacity>
                </View>  
            </View>

            <View style={styles.options}>
                <View style={styles.remember}>
                    <Checkbox 
                        value={marked}
                        onValueChange={setMarked}
                        color={'#155DFC'}
                    />
                    <Text style={styles.rememberText}>
                        Relembre-me
                    </Text>
                </View>

                <TouchableOpacity>
                    <Text style={styles.forgot}>
                        Esqueceu a senha?
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.Btn}>
                <TouchableOpacity style={styles.btnEntry}>
                    <Text style={styles.btnText}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.fastLogin}>
                <TouchableOpacity style={styles.fastLoginOptions}>
                    <Image source={require('@/assets/images/icon-google.png')}/>
                    <Text style={styles.fastLoginOptionsText}>
                        Google
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.fastLoginOptions}>
                    <Image source={require('@/assets/images/icon-facebook.png')}/>
                    <Text style={styles.fastLoginOptionsText}>
                        Facebook
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
        marginVertical: 5
    },

    borderInput: {
        borderWidth: 1,
        borderColor: '#D1D5DC',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },

    icons: {
        marginLeft: 10
    },

    showPassword: {
        marginRight: 10
    },

    textInput: {
        padding: 12,
        flex: 1
    },

    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10 
    },

    remember: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    rememberText: {
        marginHorizontal: 10
    },

    forgot: {
        color: '#0063F3'
    },

    Btn: {
        alignItems: 'center',
        marginTop: 20
    },

    btnEntry: {
        backgroundColor: '#155DFC',
        width: '100%',
        alignItems: 'center',
        borderRadius: 20,
        padding: 10
    },

    btnText: {
        color: 'white',
        fontSize: 16
    },

    fastLogin: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25
    },

    fastLoginOptions: {
        borderWidth: 1,
        borderColor: '#D1D5DC',
        borderRadius: 20,
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    fastLoginOptionsText: {
        color: '#818181',
        padding: 10,
    }
});