import React,{useEffect} from 'react'
import styled from 'styled-components/native';

const CustomTabBar = styled.SafeAreaView`
    margin:20px;
    flex:1;
    background-color:#000;
    flex-direction:row;
    border-radius:20px;
`;

const CustomTabBarButton = styled.TouchableOpacity`
    flex:1;
    justify-content:center;
    align-items:center;
`;

const CustomTabBarText = styled.Text`
    color:#FFF;
    font-size:10px;
`;


export default (props) =>{
let tabs = null;
    useEffect(()=>{
        
    },[]);

    

    return (
        <CustomTabBar>
            {props.items.map((item, index)=>{
            return(
                <CustomTabBarButton key={index} onPress={()=>props.navigation.navigate(item.route)}>
                    <CustomTabBarText>{item.text}</CustomTabBarText>
                </CustomTabBarButton>
            );
        })}
        </CustomTabBar>
        
    );
}