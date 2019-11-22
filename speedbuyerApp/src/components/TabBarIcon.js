import React from 'react';
import styled from 'styled-components/native';

const TabBarIcon = styled.View`
    width:30px;
    height:20px;
    justify-content:center;
    align-items:center;
`;

const TabBarImg = styled.Image`
    width:30px;
    height:30px;
`;

const TabBatBadge = styled.View`
    width:15px;
    height:15px;
    border-radius:8px;
    background-color:#ff0000;
    position:absolute;
    justify-content:center;
    align-items:center;
    right:0;
    top:0;
`;

const TabBarBadgeCount = styled.Text`
    font-size:12px;
    color:#fff;
`;

export default (props)=>{
    let img = null;

    switch(props.route){
        case 'Welcome':
            img = (props.focused)?
            require('../images/active_home.png'):
            require('../images/inactive_home.png');
        break;
        case 'Login':
            img = (props.focused)?
            require('../images/active_message.png'):
            require('../images/inactive_message.png');
        break;

    }


    return (
        <TabBarIcon>
            <TabBarImg source={img} />
            {props.badge > 0 &&
            <TabBatBadge>
                <TabBarBadgeCount>{props.badge}</TabBarBadgeCount>
            </TabBatBadge>
            }
        </TabBarIcon>
    );
}