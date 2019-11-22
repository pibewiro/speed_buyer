import React, {useState} from 'react';
import styled from 'styled-components/native';


const AddItemArea = styled.KeyboardAvoidingView`
    background-color:#ccc;
    padding:10px;
`;

const AddItemInput = styled.TextInput`
    background-color:#fff;
    font-size:15px;
    height:50px;
    border-radius:5px;
`;


export default (props) => {
    
    const [item, setItem] = useState(' ');

    const handleSubmit = () =>{               
           if(item.trim() != ''){
               props.onAdd(item.trim());
               setItem('');
           }
       
        
    }

        return (
          <AddItemArea behavior="height">
            <AddItemInput placeholder="Digite um novo item"
                value={item}
                onChangeText={e=>setItem(e)} 
                onSubmitEditing={handleSubmit} 
                returnKeyType="send"         
             />

          </AddItemArea>
        );
    
}

