import styled from "styled-components";
import { useState, useEffect } from "react";

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

export default function GrapeForm(){
    const [{grapeName, grapeDescription}, setGrapeData] = useState(()=>({grapeName: '', grapeDescription: ''}));
    const [missingDataError, setError] = useState(()=>false);

    useEffect(()=>{
        validateData();
    }, [grapeName, grapeDescription]);

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
            const response = await fetch('http://localhost:3000/api/grape/new-grape', {
                method: 'POST',
                body: JSON.stringify({
                    grapeDescription , 
                    grapeName 
                })
            });
            const data = await response.json();
            if(data.status === 200){
                setGrapeData(()=>({grapeName: '', grapeDescription: ''}))
            }
        }
    }

    return(
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

    )
}