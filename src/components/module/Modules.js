import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../views/Layout';
import { api, handleError } from '../../helpers/api';
import {useHistory} from "react-router-dom";
import {RectButtonBig} from '../../views/Button';
import {PageTitle} from '../../views/Labels';
import { Colors } from "../../views/design/Colors";
import {NavBar} from "../navigation/navBar";
import {ModuleList} from "./Module";
import {Spinner} from "../../views/design/Spinner";

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



export function Modules(props) {
    const [modules, setModules] = useState([])
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    /**
     * HTTP GET request is sent to the backend.
     * If the request is successful, the modules are shown
     */
    async function getModules() {
        try {
            const response = await api.get('/users/'+ sessionStorage.getItem('id')+'/modules')

            console.log('MODULES')
            console.log(response.data)
            setModules(response.data)

        } catch (error) {
            alert(`Something went wrong during get Modules: \n${handleError(error)}`);
        }
    }

    // this will run, when the component is first initialized
    useEffect(() => {
        document.body.style.backgroundColor = Colors.COLOR11;

        setTimeout(() => {
            setLoading(true)

        }, 1000)

        if (!loading) return null
        getModules()
    }, [loading]);

    useEffect(() => {
        document.body.style.backgroundColor = Colors.COLOR11;
    }, [history]);

        return (
            <BaseContainer>
                <NavBar/>
                <PageTitle>My Modules</PageTitle>
                {!loading ? (
                    <Spinner />
                ) : (
                    <BigContainer>
                        <Line>
                            <Label>Module Name</Label>
                            <Label>TYPE OF MODULE</Label>
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
                )}
            </BaseContainer>
        )
}
