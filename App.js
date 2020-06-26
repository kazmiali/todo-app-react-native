import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    FlatList,
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addGoalHandler = goal => {
        if (goal.length === 0) {
            return;
        }
        setCourseGoals(currentGoals => [
            ...currentGoals,
            { id: Math.random().toString(), value: goal },
        ]);
        cancelModal();
    };

    const removeGoalHandler = goalId => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter(item => item.id !== goalId);
        });
    };

    const cancelModal = () => {
        setIsModalOpen(false);
    };

    return (
        <View style={styles.screen}>
            <Button title='Add New Goal' onPress={() => setIsModalOpen(true)} />
            <GoalInput
                isModalOpen={isModalOpen}
                addGoalHandler={addGoalHandler}
                cancelModal={cancelModal}
            />
            <FlatList
                data={courseGoals}
                renderItem={itemData => (
                    <GoalItem
                        id={itemData.item.id}
                        value={itemData.item.value}
                        removeGoalHandler={removeGoalHandler}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        padding: 30,
    },
});

export default App;
