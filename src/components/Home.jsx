import React from 'react';
import Big from './image/Big.png';
import Bgholdside from './image/Bigside.png';
import styled from 'styled-components';
import '../App.css';
import Button from './Button';
import Navbar from './Navbar';
import Cardholder from './Cardholder';
import Bounce from 'react-reveal/Bounce';

function Home() {
  return (
    <div  className="row col-md-12 p-0 m-0" style={{minHeight:'100vh',backgroundColor:'#14213d'}}>
             <Navbar/>
        <div className="col-md-6 p-0 m-0 ">
                <HeaderHolder className="row p-0 m-0 position-relative ">
                <Bounce left>

                  <Headers className="col-md-12 Oxy position-absolute" style={{color:'#ffffff'}}>
                          We make healthcare delivery <br/> and access hitch-free.
                  </Headers>
                  </Bounce>


                  <Bounce bottom>
                  <Small className="text-left Nanum-sm" style={{color:"#ffffff"}}>
                      Sekior is a completely decentralized platform , where users are in control of their medical data, ensuring a transparent , secure,
                      immutable exchange of such between users and healthcare<div className="d-none d-md-block" ></div> providers for a better health outcome.
                  </Small>
                  </Bounce>

                 
                  <Button className="my-md-2" textcolor={'#ffffff'} colorz={'#a1ff0a'} text={'Join Our Community'}/>
                  
                </HeaderHolder>



        </div>
        <div className="col-md-6 p-0 m-0">
            <Images sources={Big} className="img img-fluid" />
        </div>

<SecondHolder className="p-0 m-0  mt-5">
    <Img src={Bgholdside} />


<SecondSec className="row p-0 m-0" style={{}}>
<div className="col-md-12 d-flex justify-content-center align-items-center" style={{color:'#fff'}}>
    <div className="col-md-6 row  mt-5">
        <Holdsmall className="col-md-6 d-flex align-items-center justify-content-center Oxy"  style={{backgroundColor:'#00b4d8',fontSize:'35px',fontWeight:'bold',color:'#fff'}}>The Vision</Holdsmall>
        <Holdsmall className="col-md-6 d-flex align-items-center justify-content-center Nanum-sm -5 py-4" style={{backgroundColor:'#14213d',fontSize:'12px',paddingLeft:'40px',paddingRight:'30px'}}>At Sekior Health , we envision a blockchain-powered healthcare system where users have complete ownership and control of their health data in a highly secure manner, making access to this data seamless and powering delay-free healthcare delivery.</Holdsmall>
    </div>
 
</div>

<div className="col-md-12 d-flex align-items-center justify-content-center">
    <Button text={"View White Paper"} className="mb-3"/>
</div>


</SecondSec>


</SecondHolder>


<ThirdHolder  className="row p-0 m-0 col-md-12">
            <Littleholder className="p-0 m-0 col-md-12 d-flex justify-content-center Oxy">Ecosystem</Littleholder>
    
            <Littleholders className="p-0 m-0 col-md-12 d-flex justify-content-center Oxy">Ecosystem</Littleholders>
          
    <Cardholder smtops={'400px'} lefts={'35%'} rights={''} tops={'160px'} desc="A Decentralized records management system which utilizes blockchain
           protocol in managing authentication,confidentiality,integrity,and easy sharing of data which provide patients with a detailed,immutable history and allows easy access to their respective healthcare information
           accross various providers and treatment institution."  sectitle={"(Decentralized Records Manager)"} firsttitle={"Sekior DRM"} />




<Cardholder smtops={'650px'} lefts={''} rights={'60px'} tops={'300px'} desc="A decentralized healthcare insurance policy provider powered bythe Sekior token. SekiorPlan aims to simplify the sale and efficient management of medical insurance 
,lower operational cost and provide greater transparency in the management of medical insurance policies. This will decentralise medical insurance by elimination intermediaries and in-betweens. SekiorPlan will allow users to own a health insurance policy that appreciates in value. "  sectitle={"SekiorPlan"} firsttitle={""} />


<Cardholder smtops={'140px'} lefts={'80px'} rights={''} tops={'380px'} desc="A multi-chain wallet with defi function such as swapping, staking, yield farming, etc. With one identity, use your mne,onics to control your assets and 
and medical data.With high throughput, low latency. powerful query functionality, decentralized control, immutable health record (data) storage and built-in asset support."  sectitle={"SekiorSwap"} firsttitle={""} />


<Cardholder smtops={'950px'} lefts={''} rights={'200px'} tops={'700px'} desc="A decentralized platform which allow users access to board-certified telhealth services remotely.This platform allows long-distance patients and clinicians contact, care advice, remainders,education,interventions and monitoring."  sectitle={"SekiorConnect"} firsttitle={""} />

<Cardholder smtops={'1150px'} lefts={'200px'} rights={''} tops={'700px'} desc="a failsafe medical supply chain system built on the blockchain to eliminate the complexity, improve efficiency and security thereby eliminating the possiblilities for fraud through data transparency and product traceability."  sectitle={"SekiorChain"} firsttitle={""} />




  
   <ImageHolders className="col-md-12 d-none d-md-block">
     
     <Imagecenter  src={Bgholdside}  className="img img-fluid" />
     
  </ImageHolders>   

</ThirdHolder>





    </div>
  )
}


const Littleholders = styled.div`
height: 100px;
 text-align:center;
  font-size:90px;
  position:absolute ;
  color:#1e2d4b;
  letter-spacing:4px;

  @media (max-width: 768px){
      font-size:40px;



  }


`;



const Littleholder = styled.div`
height: 100px;
font-size:45px ;
color:#fff;
display:flex ;
text-align:center;
align-items:center ;
position:relative ;
top:25px;
z-index:10;


@media (max-width: 768px){
      font-size:20px;
      top:-20px;



  }


/* &::after{
  content:'Ecosystem';
  text-align:center;
  font-size:60px;
  position:absolute ;
  top:-20px;
  color:#1e2d4b;
  
  



} */




`;


// const Little = styled.div`
// width:100%;
// display:flex;
// justify-content:center;
// color:white;
// z-index:10 ;
// position:absolute;
// top:70px;
// font-size:45px;


// @media (max-width: 768px){
//     font-size:20px;


// }

// `;


// const Embadedtest = styled.div`
// width: 100%;
// position: relative;
// display:flex ;
// align-items: center;
// justify-content: center;
// &::after{
//   content:'Ecosystem';
//   width: 99%;
//   display:flex;
//   height:100%;
//   align-items: center;
//   justify-content: center;
//   color:#1e2d4b;
//   font-size:100px;
//   font-weight:bold;
//   position:absolute;
//   top:100px;
//   z-index:2;

//   @media (max-width: 768px){
//     top:0px;
//     font-size:40px;
//     transform: translateY(-618px);


//   }

//   @media (max-width: 768px){

//   }

// }






// `;




const Imagecenter = styled.img`
height:280px;
width:280px;
position:absolute;
top:-20%;
left:calc(100% - 59%);


`;



const ImageHolders = styled.div`
/* height: 100%; */
/* width: 100%; */
position:relative ;
display:flex;
justify-content: center;
align-items: center;
/* position: relative; */
/* margin-top:300px; */
`;

const ThirdHolder = styled.div`
height:170vh;
width:100%;
background-color:#14213d;
/* display:flex ;
justify-content: center;
align-items: center; */
position: relative;


@media (max-width: 768px){
  min-height:250vh;
}








`;






const SecondSec = styled.div`
position: absolute;
width:100%;
height:100%;
display:flex;
justify-content: center;
align-items:center;
z-index:10 ;

@media (max-width: 768px){
position: relative;



}



`;

const Holdsmall = styled.div`
@media (max-width: 768px){
    min-height:200px !important ;
    transform:translateY(-50px) !important;
    width: 100%;

}

`;


const Img = styled.img`
height: 140%;
position: absolute;
left: 120px;
top:-45px;


`;

const SecondHolder = styled.div`
min-height:320px !important;
position:relative; 
margin-top:150px !important;
width:100%;
overflow: hidden;
&::before {
content:'';
display:block;
width:100%;
height:100%;
background-color:#a1ff0ad1;
z-index:10;
position:absolute;



@media (max-width: 768px){
    height:4020px !important;
    
}

}

@media (max-width: 768px){
    transform: translateY(-50px) !important ;
    margin-top:0px !important;

}



`;




const Small = styled.div`
margin-top:130px;
font-size:13px !important;
word-spacing:1px !important;
font-weight:300 !important;
padding-right:100px;

@media (max-width: 768px){
  /* margin-top:200px ; */
  padding-right:20px ;

}



`;

const HeaderHolder = styled.div`
  padding-left:130px !important;
  padding-top:150px !important;
  @media (max-width: 768px){
   padding-left:0px !important;
   padding-top:20px !important;


  }


`;

const Headers = styled.div`

   font-size:42px;
   font-weight:bolder;
   color:rgba(24,160,251,1) !important;
   line-height:55px;
   letter-spacing:1px !important;
   @media (max-width: 768px){
       line-height:35px;
       font-size:25px;

   }





`;
const Images = styled.div`

height:100% ;
  width:100%;
  margin-top:150px;
  background-image:${(props)=>`url(${props.sources})`};
  background-color:transparent;
  background-position:center;
  background-size:contain;
  background-repeat:no-repeat;
  @media (max-width: 768px){
      width:100% !important;
    min-height:300px ;
   margin-top:0px;


  }



`;
export default Home