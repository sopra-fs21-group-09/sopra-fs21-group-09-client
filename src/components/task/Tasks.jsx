import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {Colors} from "../../views/design/Colors";
import {TaskList} from "./Task"
import styled from "styled-components";
import "./Task.css"
import {Label} from "../../views/Labels";
import Header from "../../views/design/Header";
import {CircleButton, RectButton} from "../../views/Button";
import Rodal from "rodal";
import {api, handleError} from '../../helpers/api';
import {AddTaskRodal} from "./AddTaskRodal";
import {add} from "../home/Dates";

//Constants we need for this page
export const AddButton = styled(CircleButton)`
    position: 'absolute';
    top: 22px;
    right: 30px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;


export function Tasks(){
    const [tasks, setTasks] = useState([])
    const [displayRodal, setDisplayRodal] = useState(false)
    const [changeOccurred, setChangeOccurred] = useState(false)


    async function getTasks(){
        try {
            const response = await api.get('/users/'+ localStorage.getItem('id')+'/tasks')


            const array = []
            let i;
            for (i = 0; i < response.data.length; i++) {
                array.push(response.data[i]);
            }

            console.log('TASKS')
            console.log(response.data)

            setTasks(array)

        } catch (error) {
            alert(`Something went wrong during get Tasks: \n${handleError(error)}`);
        }
    }

    // this will run, when the component is first initialized
    useEffect(() => {
        document.body.style.backgroundColor = Colors.COLOR13;
        console.log('Runs only when initialized')
        getTasks()

    }, []);



    useEffect(() => {
        document.body.style.backgroundColor = Colors.COLOR13;
        getTasks()
        console.log('displayRodal changed')
        console.log('displayRodal: '+displayRodal)
    }, [displayRodal]);


    useEffect(()=>{
        document.body.style.backgroundColor = Colors.COLOR11;
        console.log('runs every other time')
    })


    return (
        <div style={{padding: '0px'}}>
            <AddTaskRodal displayRodal={displayRodal} changedOccured={changeOccurred}/>
            <AddButton
                onClick={() => {
                    setDisplayRodal(true)
                    setChangeOccurred(!changeOccurred)//props have to change
                }}>
                <i className="fas fa-plus fa-2x"/>
            </AddButton>
            <Header title='MY TASKS'>
            </Header>
            <TaskList tasks={tasks}/>
        </div>
    )
}