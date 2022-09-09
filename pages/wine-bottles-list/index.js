import {useState} from 'react';

export default function WineBottles({data = []}){
    const [{filter, bottlesList}, setFilter] = useState(()=>({bottlesList: data, filter: ''}));

    const setBottleFilter = async({target})=>{
        const response = await fetch(`/api/wine-bottles/bottles-filter/?wineType=${target.id}`);
        const {data} = await response.json();
    
        setFilter(()=>({bottlesList: data, filter: target.id}))
    }

    return(
        <div>
            <h1>Wine Bottles</h1>
            <button onClick={setBottleFilter} id={'Red'}>Red</button>
            <button onClick={setBottleFilter} id={'White'}>White</button>
            <button onClick={setBottleFilter} id={'Rose'}>Rose</button>

            <ul>
                {
                    bottlesList.map(({_id, wineBottleName})=><li key={_id}>{wineBottleName}</li>)
                }
            </ul>
        </div>
    )
}

export async function getServerSideProps(){
    const response = await fetch('http://localhost:3000/api/wine-bottles/bottles-filter');
    const {data} = await response.json();
    return {
        props: {
            data
        }
    }
}