import styled from "styled-components";

export default function GrapesList({list}){

    return(
            <FormContainer>
            <PageTitle>GRAPES LIST</PageTitle>

            {
                <List>
                    {
                        list.map(({grapeName, grapeDescription, _id})=>{
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

export async function getServerSideProps(){

    const response = await fetch('http://localhost:3000/api/grape/grape-list',  {
        method: 'GET'
    });
    const {data} = await response.json();

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