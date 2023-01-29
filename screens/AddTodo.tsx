import { View, TextInput, Button, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import { ITodo } from '../store/models/ITodo';
import { TodoContext } from '../store/todoContext';

const AddTodo = () => {

    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');


    let result = useContext(TodoContext);

    const addNewTodo = () => {

        let newTodo : ITodo = {
            id: Math.floor(Math.random() * 99999999),
            title:title,
            description:description,
            status:true
        };

        result?.addTodo(newTodo);

    }

    return (
        <View>
            <TextInput
                placeholder='Title'
                onChangeText={settitle}
                style={styles.input}
            />
             <TextInput
                placeholder='Description'
                onChangeText={setdescription}
                style={styles.input}
            />
            <Button title='Add' onPress={addNewTodo}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});

export default AddTodo