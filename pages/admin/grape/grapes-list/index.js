import styled from "styled-components";
import {connectMongo} from 'utils/connect';
import Grape from 'models/grape';
import {getSession} from 'next-auth/react';
import getHost from "utils/getHost";
import { useState } from "react";

export default function GrapesList({list =[], error}){

    const [currentFilter, setFilter] = useState(()=>0);
    const [filteredList, setFilteredList] = useState(()=>list);
 
    const fetchFilteredList = async ()=>{
        const response = await fetch(`${getHost()}/api/grape/grape-filter?filter=${currentFilter}`);
        const data = await response.json();
        console.log('!!!!!!!!!!!!', data)
    };

    const updateFilter = ({target})=>{
        console.log(target.id);
        setFilter(()=>target.id);
        fetchFilteredList();
    }

    return(
            <FormContainer>
            <PageTitle>GRAPES LIST</PageTitle>

            {
                <>
                    <p>Filter by: </p>
                    <button onClick={updateFilter} id={2}>White</button>
                    <button onClick={updateFilter} id={1}>Red</button>
                    <button onClick={updateFilter} id={0}>Reset</button>

                </>
            }

            {
                error ? <p>{error}</p>: null
            }


            {
                <List>
                    {
                        filteredList.map(({grapeName, grapeDescription, _id})=>{
                            return (<li key={_id}>
                                <GrapeName>{grapeName}</GrapeName>
                                <p>{grapeDescription}</p>
                            </li>)
                        })
                    }
                </List>
            }               
            </FormContainer>
    );
}

export async function getServerSideProps(context){

    const session = await getSession(context);

    if(!session){
        return {
            redirect:{
                destination: `/api/auth/signin?callbackUrl=${getHost()}/admin/grape/grapes-list`,
                permanent: false
            }
        }
    }

    let data = [];

    try{
        const client = await connectMongo();
        const response = await Grape.find();
        data = JSON.parse(JSON.stringify(response));    
        client.disconnect();
        return{
            props:{
                list: data
            }
        }

    }catch (e){
        return{
            props:{
                list: data,
                error: 'Something wrong happend'
            }
        }
    }

}

const FormContainer = styled.div`
    display: block;
    margin: auto;
    width: 80%;
    height: 100vh;
`

const PageTitle = styled.h1`
    margin: auto;
    width: 50%;
    text-align: center;
`

const List = styled.ul`
    margin: auto;
    width: 50%;
    text-align: center;
    list-style: none;
`

const GrapeName = styled.p`
font-weight: bold;
`