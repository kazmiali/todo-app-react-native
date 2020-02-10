import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
    const [text, setText] = useState(
        'Open up App.js to start working on your app!',
    );

    const handleText = () => {
        setText('New text is here');
        setTimeout(() => {
            setText('another text');
        }, 2000);
    };
    return (
        <View style={styles.container}>
            <Text>{text}</Text>
            <Button
                style={styles.button}
                onPress={handleText}
                title='Click to change Text'
            ></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: '22px',
        color: 'white',
        backgroundColor: 'red',
    },
});

export default App;
