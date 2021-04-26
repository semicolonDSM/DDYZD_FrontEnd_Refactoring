import styled from '@emotion/styled';
import {color} from '@/src/styles'

interface IheaderCotainer{
    state: number,
    color: string,
}
export const Header = styled.header`
    width:100%; 
    background-color:white; 
    min-width: 1200px;
`
export const TopHeader = styled.div<IheaderCotainer>`
    height: 60px;
    position : ${(props)=>props.state>=60 ? "fixed" : null};
    width : ${(props)=>props.state>=60 ? "100%" : null};
    top: 0;
    z-index: 99;  
    backdrop-filter: saturate(180%) blur(20px);
    background-color: hsla(0,0%,100%,.75)!important;
  
    /* #350871" */
    background-color: ${(props)=>props.color=="purple"?color.purple300:props.color=="white"?"white":color.purple300};
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding:0 250px;
    border-bottom:1px solid ${color.grey300};
    a{
        text-decoration:none;
        font-size:16px;
        color:${(props)=>props.color=="white"?"black":props.color=="purple"?"white":"white"};
        display: flex;
        align-items: center;
    }
    `

export const BottomHeader = styled.div`
    padding:0 250px;
    height: 60px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color:white;
    ul{
        align-items:center;
        padding: 0;
        margin: 0;
        display:flex;  
        list-style: none; 
        h3{
            font-size: 16px;  
            font-weight:500;
            margin: 0;
            margin-left: 15px;
            margin-right: 10px;
        }
        li{
            text-decoration:none;
            & a{
                color: black;
            }
            font-size: 14px;
            margin-left: 20px;
            cursor: pointer;
            :hover{
                color:tomato !important;
        }
    }
        
}
`
