import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../views/Layout';
import { api, handleError } from '../../helpers/api';
import {useHistory, withRouter} from "react-router-dom";
import {CircleButton, RectButtonBig, RectButtonSmall} from '../../views/Button';
import {PageTitle} from '../../views/Labels';
import { Colors } from "../../views/design/Colors";
import ShadowScrollbars from "../../views/design/Scrollbars";
import {NavBar} from "../navigation/navBar";
import {Module, ModuleList} from "./Module";

//Constants we need for this page
const BigContainer = styled.div`
  width: 100%;
  padding-left: 15px;
  margin-left: 3%;
  margin-right: 7%;
  border: none;
  margin-bottom: 20px;
`;

const Line = styled.div`
  display grid;
  grid-template-columns: 40% 40% 15%;
  grid-template-rows: 1;
  grid-column-gap: 1em;
  width: 99%;
  height: 70px;
`;

const Label = styled.label`
  place-self: center;
  text-transform: uppercase;
  color: orange;
  font-size: 25px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2%;
  width: 100%;
`;



export function Modules() {
    const [modules, setModules] = useState([])
    const history = useHistory()

    /**
     * HTTP GET request is sent to the backend.
     * If the request is successful, the modules are shown
     */
    async function getModules() {
        try {
            const response = await api.get('/modules')

            setModules(response.data)

        } catch (error) {
            alert(`Something went wrong during get Modules: \n${handleError(error)}`);
        }
    }

    // this will run, when the component is first initialized
    useEffect(() => {
        document.body.style.backgroundColor = Colors.COLOR11;
        console.log('Run only when initialized')
        getModules();
    }, []);

        return (
            <BaseContainer>
                <NavBar/>
                <PageTitle>My Modules</PageTitle>
                <BigContainer>
                    <Line>
                        <Label>Module Name</Label>
                        <Label>Description</Label>
                    </Line>
                    <ModuleList modules={modules}/>
                    <ButtonContainer>
                        <RectButtonBig
                            width="100%"
                            onClick={() => {
                                history.push('/joinModules');
                            }}
                        >
                            Join a Module!
                        </RectButtonBig>
                    </ButtonContainer>
                </BigContainer>
            </BaseContainer>
        )
}