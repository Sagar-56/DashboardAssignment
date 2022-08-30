import React from "react";
import styled from 'styled-components';
import {BsFacebook} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {FaInstagramSquare} from 'react-icons/fa';

const FooterHead = styled.div`
     width: 100%;
     height: 400px;
     background: #181a1a;
     position: relative;
     display: inline-block;

     @media screen and (max-width: 768px){
        width: 100%;
        min-height: 1200px;
        display: inline-block;  
  }
  @media screen and (min-width: 768px) and (max-width: 1100px){
    width: 100%;
    min-height: 700px;
}
       
`;
const FooterBorder = styled.div`
     width: 100%;
     height: 30px;
     background: #ECC30D;
     position: relative;
`;
const FooterContainer = styled.div`
     width: 70%;
    position: relative;
    display: flex;
    justify-content: space-between;

    ul{
        position: relative;
        float: left;
        display: inline-block;
    }
    ul h3{
        color: gray;
        font-family: 'Poppins', sans-serif;
        padding-bottom: 25px;
        border-bottom: 2px solid #ECC30D;

    }
    ul li{
        position: relative;
        color: #fff;
        font-size: 16px;
        list-style: none;
        line-height: 3.2rem;
        letter-spacing: 1px;

        &:hover{
            text-decoration: underline;
            text-underline-offset: 5px;
            text-underline-position: below;
            color: #ECC30D;
        }
    } 


    @media screen and (max-width: 768px){
        width: 100%;
        display: inline-block;  
  }
  @media screen and (min-width: 768px) and (max-width: 1100px){
    // width: 100%;
    // min-height: 600px;
    display: inline-block;
}
      
`;

const FootSocial = styled.div`
            margin-right: 20px;
            margin-top: -70px;
            float: right;
            position: relative;
            width: 120px;
            height: 30px;
            padding: 2px 10px;
            color: #fff;
            display: flex;
            justify-content: space-between;

            p{
                position: relative;
                margin-top: 3px;
                margin-left: 7px;
            }
`;

const CopyRight = styled.div`
    position: relative;
      p{
        margin-top: 50px;
        margin-left: 50px;
        color: gray;

      }
`;

const CustomerLogo = styled(BsFacebook)`
`;

const CustomerLogoTwo = styled(BsLinkedin)`
`;
const CustomerLogoThree = styled(FaInstagramSquare)`
`;


const Footer = () => {
    return(
        <>
            <FooterHead>
                <FooterBorder></FooterBorder>
                <FooterContainer>
                          <ul>
                            <h3>Cars Name</h3>
                            <li>Aston Martin</li>
                            <li>Audi</li>
                            <li>BMW</li>
                            <li>Cadillac</li>
                            <li>Chevrolet</li>
                          </ul>
                          <ul>
                            <h3>parts Name</h3>
                            <li>Hinges and springs</li>
                            <li>Bonnet/hood</li>
                            <li>Exposed Bumper</li>
                            <li>Sunroof motor</li>
                            <li>Sunroof Rail</li>
                          </ul>
                          <ul>
                            <h3>Latest Launched Cars</h3>
                            <li>BMW. X4</li>
                            <li>Lexus. NX. Starts @ ₹ 64.90 Lakh</li>
                            <li>MG. ZS EV. Starts @ ₹ 21.99 Lakh</li>
                            <li>MINI. SE. Starts @ ₹ 48.70 Lakh</li>
                            <li>Kia. Carens. Starts @ ₹ 9.60 Lakh</li>
                          </ul>
                          <ul>
                            <h3>Brand</h3>
                            <li>Maruti Suzuki</li>
                            <li>Hyundai</li>
                            <li>Toyota</li>
                            <li>Mahindra</li>
                            <li>Tata Motors</li>
                          </ul>
                          
                </FooterContainer>
                <CopyRight>
                    <p><b>&copy; Commercial Website 2022</b></p>
                </CopyRight>
                <FootSocial>
                    <span><CustomerLogo /></span>
                    <span><CustomerLogoTwo /></span>
                    <span><CustomerLogoThree /></span>
                </FootSocial>
            </FooterHead>
        </>
    )
}

export default Footer;