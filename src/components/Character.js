// Write your Character component here
import React from "react";
import styled, { keyframes } from 'styled-components'




const Styles = styled.div`
    
    h1 {
    color: black;
    }
   
`

const Character = ({name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films, species, vehicles, starships}) => {
    return(
        <Styles>
            <div>
                <h1>{name}</h1>
                <p>Height: {height}</p>
                <p>Mass: {mass} Kilograms</p>
                <p>Hair: {hair_color}</p>
                <p>Skin: {skin_color}</p>
                <p>Eyes: {eye_color}</p>
                <p>Born: {birth_year}</p>
                <p>Gender: {gender}</p>
                {/* <p>Homeworld: {homeworld}</p> */}
                <p>Appearances: {films}</p>
                {/* <p>Species: {species}</p> */}
                {/* <p>Vehicles: {vehicles}</p> */}
                {/* <p>Starships: {starships}</p> */}
            </div>
        </Styles>
    )
}

export default Character;