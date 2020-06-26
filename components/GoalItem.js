import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({ value, id, removeGoalHandler }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => removeGoalHandler(id)}
        >
            <View style={styles.goal}>
                <Text>{value}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goal: {
        flex: 1,
        padding: 15,
        marginTop: 10,
        backgroundColor: '#eeefff',
        textAlign: 'center',
        width: 400,
        borderColor: 'blue',
        borderWidth: 1,
    },
});
