import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



function Parent(props) {
    const [name, setName] = useState("")
    return (
        <ContainerDiv>
            {/* <h1>{props.name}</h1> */}
        </ContainerDiv>
    )
}

export default Parent;

const ContainerDiv = styled.div`

`