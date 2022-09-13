import styled from "styled-components";
import {connectMongo} from 'utils/connect';
import Grape from 'models/grape';
import {getSession} from 'next-auth/react';
import getHost from "utils/getHost";
export default function GrapesList(props){

    return(
            <FormContainer>
            <PageTitle>GRAPES LIST</PageTitle>

            {
                <List>
                    {
                        props.list.map(({grapeName, grapeDescription, _id})=>{
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
                destination: `/api/auth/signin?callbackUrl=${getHost()}`,
                permanent: false
            }
        }
    }

    let data = [];
    const client = await connectMongo();
    const response = await Grape.find();
    data = JSON.parse(JSON.stringify(response));    
    client.disconnect();
    return{
        props:{
            list: data
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