
export default function GrapesList({list}){

    return(
        <div>
            <h1>GRAPES LIST</h1>
            <div>
            {
                <ul>
                    {
                        list.map(({grapeName, grapeDescription, _id})=>{
                            return (<li key={_id}>
                                <p>{grapeName}</p>
                                <p>{grapeDescription}</p>
                            </li>)
                        })
                    }
                </ul>
            }               
            </div>
        </div>
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