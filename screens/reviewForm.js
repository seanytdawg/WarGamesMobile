import {Formik} from 'formik'
import React from 'react'
import {TextInput, View, Button} from 'react-native'
export default  ReviewForm=()=>{

    return (
        <View>
            <Formik 
            initialValues={{title: '', body: "", rating: ''}}
            onSubmit={(values)=>{
                console.log(values)
            }}
            >
            {(props)=>(

                 <View>
                  <TextInput
                  placeholder='Movie Title'
                  onChangeText={props.handleChange('')}
                  value={props.values.title}
                  />   
                  <TextInput
                  placeholder='Reviw'
                  onChangeText={props.handleChange('')}
                  value={props.values.title}
                  />   
                  <TextInput
                  placeholder='Rate Movie'
                  onChangeText={props.handleChange('')}
                  value={props.values.title}
                  />   
                  <Button title="submit" color="Maroon" onPress={props.handleSubmit}/>
                 </View>
            )}

            </Formik>

        </View>
    )

}