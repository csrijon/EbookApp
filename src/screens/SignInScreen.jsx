import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // ← Back icon

const SignInScreen = () => {
    return (
        <View style={styles.container}>
            {/* Back icon */}
            <TouchableOpacity style={styles.backButton}>
                <Icon name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.title}>Sign In</Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#bbb"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#bbb"
                secureTextEntry
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>or Sign In with</Text>

            <View style={styles.socialContainer}>
                <Image
                    source={require('../assets/Google_logo.png')}
                    style={styles.socialIcon}
                />
                <Image
                    source={require('../assets/f.png')}
                    style={styles.socialIcon}
                />
                <Image
                    source={require('../assets/Apple_logo.png')}
                    style={styles.socialIcon}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#220052',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginTop: 100,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
        paddingVertical: 10,
        marginBottom: 25,
        color: '#fff',
    },
    button: {
        backgroundColor: '#b58de6',
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: 30,
        marginTop: 10,
        marginBottom: 30,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    orText: {
        color: '#aaa',
        marginBottom: 10,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 150,
    },
    socialIcon: {
        width: 35,
        height: 35,
        borderRadius: 50,
        backgroundColor: '#fff',
        padding: 10,
        resizeMode: 'contain',
    },
});

export default SignInScreen;
