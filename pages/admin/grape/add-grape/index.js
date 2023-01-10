import styled from "styled-components";
import { useState, useEffect } from "react";
import getHost from "utils/getHost";
import {getSession} from 'next-auth/react';

const Button = styled.button`
    display: block;
    margin: 20%;
    margin-top: 3%;
    width: 60%;
    height: 5%;

`
const Input = styled.input`
    margin: auto;
    width: 20%;
    display: block;
`

const FormContainer = styled.div`
    display: block;
    margin: auto;
    width: 80%;
    height: 100vh;
`

const PageTitle = styled.h1`
    margin: auto;
    width: 10;
    text-align: center;
`
const Label = styled.label`
    margin: 1%;
    text-align: center;
    display: block;
`

const Field = styled.div`
    height: 10%;
    margin: auto;
    width: 80%
`

const ErrorData = styled.p`
    color: red;
    text-align: center;
`

export default function GrapeForm({isUserAuthenticated}){
    const [{grapeName, grapeDescription}, setGrapeData] = useState(()=>({grapeName: '', grapeDescription: '', grapeType: 1}));
    const [missingDataError, setError] = useState(()=>false);

    const handleGrapeData = ({target})=>{
        setGrapeData((prevState)=>({...prevState, [target.id]: target.value}));
    }

    const validateData = ()=>{

        if((!grapeName && grapeDescription) || (grapeName && !grapeDescription)){
            setError(()=>true);
        }else{
            setError(()=>false);
        }
    }

    const saveGrape = async ()=>{
        validateData();
        if(!missingDataError){
            const response = await fetch(`${getHost()}/api/grape/new-grape`, {
                method: 'POST',
                body: JSON.stringify({
                    grapeDescription , 
                    grapeName,
                    grapeType: 1 
                })
            });
            const data = await response.json();
            if(data.status === 200){
                setGrapeData(()=>({grapeName: '', grapeDescription: ''}))
            }
        }
    }

    return isUserAuthenticated ? (
        <FormContainer>
            <PageTitle>GRAPE</PageTitle>

            <Field>
            <Label>Name</Label>
            <Input value={grapeName} id={'grapeName'} onChange={handleGrapeData}/>
            </Field>

            <Field>
            <Label>Description</Label>
            <Input value={grapeDescription} id={'grapeDescription'} onChange={handleGrapeData}/>
            </Field>

            <Field>
            {missingDataError ? <ErrorData>Fill all data</ErrorData> : null}

            </Field>

            <Button onClick={saveGrape}>Save</Button>
        </FormContainer>
    ): <p>loading...</p>
}

export async function getServerSideProps(context){
    const session = await getSession(context);

    if(!session){
        return {
            redirect:{
                destination: `/api/auth/signin?callbackUrl=${getHost()}/admin/grape/add-grape`,
                permanent: false
            }
        }
    }

    return {
        props:{
            isUserAuthenticated: true
        }
    }

}
