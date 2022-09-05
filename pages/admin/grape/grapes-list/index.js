
export default function GrapesList({list}){

    console.log('#########', list);
    return(
        <div>
            <h1>GRAPES LIST</h1>
        </div>
    );
}

export async function getServerSideProps(){

    const response = await fetch('http://localhost:3000/api/grape/grape-list',  {
        method: 'GET'
    });
    const data = await response.json();

    console.log('#######:::::::', data)
    return{
        props:{
            list: data
        }
    }
}