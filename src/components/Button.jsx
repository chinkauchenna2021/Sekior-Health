import React from 'react';
import Bgimage from './image/Bgimage.jpeg';
import Bgholdside from './image/Bgholdside.jpeg';
import styled from 'styled-components';
import '../App.css';
import Bounce from 'react-reveal/Bounce';


function Button({colorz,text,textcolor,bolder}) {
  return (
    <Bounce left>
     <Btn textcolor={textcolor} colorz={colorz} className="my-5 mx-3 Nanum-sm">
    {/* Join Our Community */}
    {text}
  </Btn>
  </Bounce>
  )
}






const Btn = styled.div`
width:250px;
height:40px;
color:${(props)=>props.textcolor?props.textcolor:'#000000'};
background-color:${(props)=>props.colorz? props.colorz: '#ffffff'};
/* background-color:#a1ff0a; */
display:flex;
align-items:center;
justify-content:center;
font-weight:${(props)=>props.bolder?props.bolder:'bold'}
border-radius:20px;
font-size:${(props)=>props.size?props.size:13};
border-radius:20px;
cursor:pointer;
@media (max-width:768px){
    transform:translateY(-20px) ;

}




`;











export default Button