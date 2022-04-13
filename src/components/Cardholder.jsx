import React from 'react';
import styled from 'styled-components';
import '../App.css';
import Bounce from 'react-reveal/Bounce';

function Cardholder({lefts,rights,tops,firsttitle,sectitle,desc,smtops}) {
  return (
      <Holder className="col-md-4" lefts={lefts} rights={rights} tops={tops} smtops={smtops}>
        <Bounce bottom>
       <Cardall className="card">
           <Innercard className="card-header Oxy ">
           {firsttitle}<br />
    {sectitle}
               {/* Sekior DRM<br />
            (Decentralized Records Manager) */}
           </Innercard>

           <Cardbody className="card-body Oxy-sm">
                {desc}
           {/* A Decentralized records management system which utilizes blockchain
           protocol in managing authentication,confidentiality,integrity,and easy sharing of data which provide patients with a detailed,immutable history and allows easy access to their respective healthcare information
           accross various providers and treatment institution.   */}
           </Cardbody>



       </Cardall>




    </Bounce>

    </Holder>
  )
}

const Innercard = styled.div`
background-color:transparent !important;
border:none !important;
text-align:center;
font-size:18px !important;
color:#a1ff0ad1;
`;

const Cardbody = styled.div`
min-height:100%;
background-color:transparent !important;
border:none !important;
color:#00b4d8 !important;
text-align:center !important;
padding:0px 90px;
padding-top:30px;
font-size:14px;

@media (max-width: 768px){
  padding-left:5px;
  padding-right:5px;

}

`;

const Cardall = styled.div`
background-color:transparent !important;
border:none !important;

`;
const Holder = styled.div`
    position:absolute;
    top:${(props)=>props.tops};
    left:${(props)=>props.lefts};
    right:${(props)=>props.rights};


    @media (max-width: 768px){
      left:0;
      right:0;
      top:${(props)=>props.smtops};
    }
    
`;

export default Cardholder