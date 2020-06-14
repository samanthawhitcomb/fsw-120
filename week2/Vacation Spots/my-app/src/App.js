import React from 'react'
import Spots from "./Spots"
import vacaData from "./vacationSpots"

function App() {
    const vacationSpots = vacaData.map(spots => <Spots place={spots.place} price={spots.price} timeToGo={spots.timeToGo} />)
    console.log(vacationSpots)
    
    return (
        <div>
            {vacationSpots}            
        </div>
    )
}

export default App