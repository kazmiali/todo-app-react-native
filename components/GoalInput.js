import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Button, Modal } from 'react-native';

const GoalInput = ({ addGoalHandler, isModalOpen, cancelModal }) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    };

    const addAndClearGoalHandler = () => {
        addGoalHandler(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={isModalOpen} animationType='fade'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Write Goal'
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button
                            title='CANCEL'
                            color='red'
                            onPress={() => cancelModal()}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            style={styles.addButton}
                            title='ADD +'
                            onPress={addAndClearGoalHandler}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    input: {
        padding: 10,
        backgroundColor: 'white',
        width: '80%',
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 10,
    },
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButton: {
        padding: 22,
        color: 'white',
        backgroundColor: 'red',
        height: '100%',
    },
    buttonsContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: '40%',
    },
});
