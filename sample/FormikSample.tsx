import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import axios from 'axios';
import * as yup from 'yup';


const FormikSample = () => {

    let addProductValidationSchema = yup.object().shape({
        name: yup.string().required('Name alanı boş geçilemez!'),
        unitPrice: yup.number().required('Unit Price boş geçilemez')
    })

    const submitForm = (values: any) => {


        axios.post('https://northwind.vercel.app/api/products', values)
            .then(res => {
                console.log('Success!');

            })

    }
    return (
        <View>
            <Formik
                validationSchema={addProductValidationSchema}
                initialValues={{
                    name: '',
                    unitPrice: '',
                    unitsInStock: ''
                }}
                onSubmit={submitForm}
            >
                {
                    ({ handleChange, handleBlur, handleSubmit, errors, values }) => (
                        <View>

                            <TextInput
                                placeholder='Name'
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                                style={styles.input}
                            />
                            {
                                errors.name && <Text  style={styles.validation}>{errors.name}</Text>
                            }

                            <TextInput
                                placeholder='Unit Price'
                                onChangeText={handleChange('unitPrice')}
                                onBlur={handleBlur('unitPrice')}
                                value={values.unitPrice}
                                style={styles.input}
                            />
                            {
                                errors.unitPrice && <Text style={styles.validation}>{errors.unitPrice}</Text>
                            }
                            <TextInput
                                placeholder='Units In Stock'
                                onChangeText={handleChange('unitsInStock')}
                                value={values.unitsInStock}
                                style={styles.input}
                            />

                            <Button title='Add' onPress={handleSubmit}></Button>

                        </View>
                    )
                }

            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    validation:{
        color:'tomato'
    }
});

export default FormikSample