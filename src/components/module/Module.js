import React, {useState} from "react";
import {RectButtonSmall} from "../../views/Button";
import styled from "styled-components";
import {DateLabel} from "../task/Tasks";
import {Task} from "../task/Task";
import ShadowScrollbars from "../../views/design/Scrollbars";
import Group from "../group/AllAppGroups";
import {useHistory} from "react-router-dom";
import {ModuleDetail} from "./ModuleDetail";
import {api, handleError} from "../../helpers/api";

const ModuleBox = styled.div`
  height: 60px;
  width: 99%;
  display grid;
  grid-template-columns: 40% 40% 15%;
  grid-template-rows: 1;
  grid-column-gap: 1em;
  margin-top: 1%;
  margin-bottom: 1%;
  border: 1px solid black;
  background: white;
  border-radius: 10px;
`;

const InboxLabel = styled.div`
  color: black;
  font-size: 25px;
  place-self: center;
`;

const InboxButtonContainer = styled.div`
  place-self: center;
  width: 80%;
`;

async function postModule(id){
    try {
        const response = await api.post('/users/'+localStorage.getItem('id')+'/modules/'+id)

    } catch (error) {
        alert(`Something went wrong during post module: \n${handleError(error)}`);
    }
}

function infoButton(history, module){
    return(
    <InboxButtonContainer>
        <RectButtonSmall
            width="100%"
            onClick={() => {
                history.push({
                    pathname: '/moduleDetail',
                    module: module
                });
                //history.push('/moduleDetail');
                //{ModuleDetail(props.id)}
            }}
        >
            Info
        </RectButtonSmall>
    </InboxButtonContainer>
    )
}


export const Module = props => {
    const history = useHistory()

    return (
        <ModuleBox>
            <InboxLabel>{props.module.name}</InboxLabel>
            <InboxLabel>{props.module.description}</InboxLabel>
            {infoButton(history, props.module)}
        </ModuleBox>
    )
}

export const JoinModule = props => {
    const history = useHistory()

    return (
        <ModuleBox>
            <InboxLabel>{props.module.name}</InboxLabel>
            <InboxButtonContainer style={{width: '30%'}}>
                <RectButtonSmall
                    onClick={() => {
                        postModule(props.module.id);
                        history.push('/modules');
                    }}
                >
                    Join
                </RectButtonSmall>
            </InboxButtonContainer>
            {infoButton(history, props.module)}
        </ModuleBox>
    )
}



export function ModuleList(props) {
    const modules = props.modules

    return (
        <ShadowScrollbars style={{height: 430}}>
            {modules.map(module => {
                return (
                    <Module module={module}/>
                );
            })}
        </ShadowScrollbars>
    )

}

export function JoinModuleList(props) {
    const modules = props.modules

    return (
        <ShadowScrollbars style={{height: 430}}>
            {modules.map(module => {
                return (
                    <JoinModule module={module}/>
                );
            })}
        </ShadowScrollbars>
    )

}