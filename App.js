import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, ToastAndroid, Image, StyleSheet, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const InputBox = ({ label, onChangeText }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} onChangeText={onChangeText} placeholderTextColor="#999" />
        </View>
    );
};

const MyApp = () => {
    const [name, setName] = useState('');
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [third, setThird] = useState('');

    const correctAnswers = {
        first: 'Tulips',
        second: 'Sunflower',
        third: 'Roses',
    };

    const checkAnswers = () => {
        if (!name.trim()) {
            ToastAndroid.show("Please enter your name", ToastAndroid.SHORT);
            return;
        }

        let correctCount = 0;
        if (first === correctAnswers.first) correctCount++;
        if (second === correctAnswers.second) correctCount++;
        if (third === correctAnswers.third) correctCount++;

        let message;
        switch (correctCount) {
            case 3:
                message = `Congratulations ${name}!! all answers are correct!!`;
                break;
            case 2:
                message = `Good Job ${name}! 2/3 answers are correct!!`;
                break;
            case 1:
                message = `Good try ${name}, but only one answer is correct!!`;
                break;
            default:
                message = `Better luck next time ${name} :(`;
                break;
        }

        ToastAndroid.show(message, ToastAndroid.SHORT);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Zic's Quiz</Text>

            <InputBox label="User Name:" onChangeText={(text) => setName(text)} />
            <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">
                <View style={styles.questionContainer}>
                    <Image source={require('./assets/tulips.jpg')} style={styles.image} />
                    <Text style={styles.questionText}>Q1) What is this flower? :</Text>
                    <RNPickerSelect
                        onValueChange={(value) => setFirst(value)}
                        items={[
                            { label: 'Tulips', value: 'Tulips' },
                            { label: 'Morning Breath', value: 'Morning Breath' },
                            { label: 'Orchids', value: 'Orchids' },
                        ]}
                        placeholder={{ label: "Select your answer", value: null }}
                        style={pickerSelectStyles}
                    />
                </View>

                <View style={styles.questionContainer}>
                    <Image source={require('./assets/sunflower.jpg')} style={styles.image} />
                    <Text style={styles.questionText}>Q2) What is this flower? :</Text>
                    <RNPickerSelect
                        onValueChange={(value) => setSecond(value)}
                        items={[
                            { label: 'Chrysanthemum', value: 'Chrysanthemum' },
                            { label: 'Sunflower', value: 'Sunflower' },
                            { label: 'Daisy', value: 'Daisy' },
                        ]}
                        placeholder={{ label: "Select your answer", value: null }}
                        style={pickerSelectStyles}
                    />
                </View>

                <View style={styles.questionContainer}>
                    <Image source={require('./assets/roses.jpg')} style={styles.image} />
                    <Text style={styles.questionText}>Q3) What is this flower? :</Text>
                    <RNPickerSelect
                        onValueChange={(value) => setThird(value)}
                        items={[
                            { label: 'Lily', value: 'Lily' },
                            { label: 'Hydrangea', value: 'Hydrangea' },
                            { label: 'Roses', value: 'Roses' },
                        ]}
                        placeholder={{ label: "Select your answer", value: null }}
                        style={pickerSelectStyles}
                    />
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={checkAnswers}>
                <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        padding: 16,
    },
    header: {
        fontSize: 28,
        color: '#FFB6C1',  // baby pink
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 16,
    },
    inputContainer: {
        marginVertical: 12,
    },
    label: {
        color: '#FFB6C1',  // baby pink
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 8,
        color: '#FFF',
        backgroundColor: '#333',
    },
    scrollView: {
        paddingBottom: 20,
    },
    questionContainer: {
        marginVertical: 12,
    },
    questionText: {
        color: '#FFF',
        fontSize: 18,
        marginVertical: 8,
    },
    image: {
        width: '100%',
        height: 400,
        borderRadius: 8,
        marginBottom: 8,
    },
    button: {
        backgroundColor: '#FFB6C1',  // baby pink
        paddingVertical: 12,
        borderRadius: 8,
        marginVertical: 16,
    },
    buttonText: {
        color: '#1a1a1a',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

const pickerSelectStyles = {
    inputAndroid: {
        color: '#FFF',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 10,
        marginVertical: 8,
    },
    placeholder: {
        color: '#999',
    },
};

export default MyApp;
