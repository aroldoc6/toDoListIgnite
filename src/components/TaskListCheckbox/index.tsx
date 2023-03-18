import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles';

import { Task } from '../../screens/Home';


interface TaskProps {
    data: Task;
    onRemove: () => void;
    onComplete: () => void;
}

export function TaskListCheckbox({ data, onRemove, onComplete }: TaskProps) {
    const { content, completed } = data;


    return(

        <View style={styles.container}>
            <Checkbox
                status={completed ? 'checked' : 'unchecked'}
                onPress={onComplete}
                color="#5E60CE"
                uncheckedColor="#4EA8DE"
                
            />
            {
                completed ? 'checked' && (
                    <Text style={styles.nameChecked}>
                        {content}
                    </Text>

                ) : 'unchecked' && (
                    <Text style={styles.name}>
                        {content}
                    </Text>
                )
            }

            <TouchableOpacity
                style={styles.button}
                onPress={onRemove}
            >
                <Ionicons name="trash" size={22} color="#3D3D3D" />
            </TouchableOpacity>


        </View>
    )
}