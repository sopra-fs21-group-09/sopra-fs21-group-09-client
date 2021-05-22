import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../views/Layout';
import {withRouter} from "react-router-dom";
import { Colors } from "../../views/design/Colors";
import {NavBar} from "../navigation/navBar";
import {PageTitle} from "../../views/Labels";
import {CircleButton, RectButton} from "../../views/Button";
import {GroupTaskList} from "./GroupTaskList";
import {api, handleError} from "../../helpers/api";
import {ButtonContainer} from "../../views/design/logo/AuthConstants";
import {AddTaskRodal} from "../task/AddTaskRodal";

//Constants we need for this page
const BigContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const LeftContainer = styled.div`
  width: 100%;
`;

const RightContainer = styled.div`
  width: 100%;
  padding-left: 5%;
  border: 1px solid #11244E;
`;

const AddButton = styled(CircleButton)`
    position: 'absolute';
    display: flex;
    justify-content: center;
    top: 22px;
    width: 95px;
    height: 30px;
    right: 30px;
    border-radius: 20px;
    background: ${Colors.BUTTON};
    color: white;
    border: 1px solid #11244E;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const GroupDetail = props => {
    const [displayRodal, setDisplayRodal] = useState(false)
    const [changeOccurred, setChangeOccurred] = useState(false)
    const [tasks, setTasks] = useState([])

    async function getGroupTasks(id){
        try {
            console.log(id);
            const response = await api.get(`/groups/${id}/tasks`)

            const array = []
            let i;
            for (i = 0; i < response.data.length; i++) {
                array.push(response.data[i]);
            }

            setTasks(array)

        } catch (error) {
            alert(`Something went wrong during get Tasks: \n${handleError(error)}`);
        }
    }


    // this will run, when the component is first initialized
    useEffect(() => {
        //Change the whole background for just this file
        document.body.style.backgroundColor = Colors.COLOR11;

        console.log(props)

        getGroupTasks(props.location.detail.id)
    }, []);

    useEffect(()=>{
        document.body.style.backgroundColor = Colors.COLOR11;

    })

    useEffect(()=>{
        document.body.style.backgroundColor = Colors.COLOR11;
        console.log(props)
        setDisplayRodal(false);
        getGroupTasks(props.location.detail.id)
    }, [props])

    return (
        <BaseContainer>
            <NavBar/>
            <PageTitle>{ props.location.detail ? props.location.detail.name : ''} Details</PageTitle>
            <BigContainer>
                <LeftContainer>
                    <div style={{padding: '0px'}}>
                        <AddButton>
                            Leave Group
                        </AddButton>
                        <AddTaskRodal displayRodal={displayRodal} changeOccurred={changeOccurred} groupId={props.location.detail ? props.location.detail.id : ''}/>
                        {/*TODO: Ask Jonas about GroupId*/}
                        <GroupTaskList tasks={tasks}/>
                        <ButtonContainer>
                            <RectButton
                                onClick={() => {
                                    setDisplayRodal(true)
                                    setChangeOccurred(!changeOccurred)
                                }}>
                                Add Task
                            </RectButton>
                        </ButtonContainer>
                    </div>
                </LeftContainer>
                <RightContainer>Here will be the Chat/Whiteboard</RightContainer>
            </BigContainer>
        </BaseContainer>
    )
}

export default withRouter(GroupDetail);