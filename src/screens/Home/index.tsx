import React, { useState, useMemo } from 'react';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert, Image  } from "react-native";
import { ClipboardText } from 'phosphor-react-native';
import { TaskListCheckbox } from '../../components/TaskListCheckbox';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { styles } from "./styles";

export type Task = {
    id: string;
    content: string;
    completed: boolean;
}

export default function Home(){

    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskName, setTaskName] = useState('');

    const countCompletedTasks = useMemo(() => {
        return tasks.filter(task => !!task.completed).length
    }, [tasks]);
    

    function handleTasksAdd(){
        if (tasks.find(task => task.content === taskName)) {
            return Alert.alert("Tarefa já existe", "Já existe uma tarefa na lista com esse nome");
        }

        if(taskName.split(' ').join('') === '') {
        return Alert.alert("Campo vazio", "Esse campo não pode estar vazio." );
        }

        const task: Task = {
            id: uuidv4(),
            content: taskName,
            completed: false
        }

        setTasks(prevState => [...prevState, task]);
        setTaskName('');
    }

    function handleTaskRemove(task: Task){
        Alert.alert("Remover", `Deseja remover ${task.content} da lista de tarefas?`, [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(t => t.id !== task.id))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }

    function handleCompleteTask(task: Task){
        const findIndex = tasks.findIndex(t => t.id === task.id);

        const tasksList = [...tasks];

        tasksList[findIndex] = {
            ...tasksList[findIndex],
            completed: !tasksList[findIndex].completed,
        }

        setTasks(tasksList)
    }

    return(
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image 
                    style={styles.img}
                    source={require('../../assets/Logo.png')}
                />
            </View>
            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor='#6B6B6B'
                    onChangeText={setTaskName}
                    value={taskName}
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleTasksAdd}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            
            <View style={styles.info}>
                <View style={styles.criadas}>
                    <Text style={styles.textCriadas}>Criadas</Text>
                    <View style={styles.containerTextCounterCriadas}>
                        <Text style={styles.textCounterCriadas}>{tasks.length}</Text>
                    </View>
                </View>
                <View style={styles.concluidas}>
                    <Text style={styles.textConcluidas}>Concluídas</Text>
                    <View style={styles.containerTextCounterConcluidas}>
                        <Text style={styles.textCounterConcluidas}>{countCompletedTasks}</Text>
                    </View>
                </View>
            </View>
            <FlatList 
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TaskListCheckbox
                      key={item.id}
                      data={item} 
                      onRemove={() => handleTaskRemove(item)}
                      onComplete={() => handleCompleteTask(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.containerListEmptyText}>
                        <ClipboardText size={76} weight="thin" color="#3D3D3D"/>
                        <Text style={styles.listEmptyTitle}>
                            Você ainda não tem tarefas cadastradas. 
                        </Text>
                        <Text style={styles.listEmptySubtitle}>
                        Crie tarefas e organize seus itens a fazer. 
                        </Text>
                    </View>
                )}
            />  
       
            
        </View>
    )
}