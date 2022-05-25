import React, { useState } from 'react';
import styled from 'styled-components/native';

const AdditemArea = styled.View`
    background-color:#CCC;
    padding:10px;
`;

const AddItemImput = styled.TextInput`
    background-color: #FFF;
    font-size:15px;
    height:50px;
    border-radius:5px;
    padding:10px;
`;

export default () => {
    const [ item, setItem ] = useState('');

    const handleSubmit = () => {
        alert("ITEM: " + item);
    }

    return (
        <AdditemArea>
            <AddItemImput 
                placeholder="Digite um novo item"
                value={item}
                onChangeText={e=>setItem(e)}
                onSubmitEditing={handleSubmit}
                returnKeyType="send"
            />
        </AdditemArea>
    );
}