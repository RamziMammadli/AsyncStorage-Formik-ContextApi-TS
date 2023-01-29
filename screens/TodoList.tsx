import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext } from 'react'
import { TodoContext } from '../store/todoContext'

const TodoList = () => {

    let result = useContext(TodoContext);

    const deleteItem = (id:number) => {

        result?.deleteTodo(id);
    }

    return (
        <View style={{ padding: 10 }}>
            {
                result?.todos.map(item => {
                    return <View key={item.id}>
                        <Text style={styles.text}>{item.id}</Text>
                        <Text style={styles.text}>{item.title}</Text>
                        <Text style={styles.text}>{item.description}</Text>
                        <Text style={styles.text}>{item.status}</Text>
                        <Button onPress={() => deleteItem(item.id)} title='Delete'></Button>
                    </View>
                })
            }
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 25
    }
})

export default TodoList