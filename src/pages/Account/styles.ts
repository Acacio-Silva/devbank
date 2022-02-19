import styled from "styled-components";

export const Container = styled.main`
display:flex;
justify-content:space-around;

`
export const ContainerForm = styled.form`
margin-top:0.5rem;
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;
border: 1px solid #000;
padding: 1rem;
border-radius: 10px;
`
export const Input = styled.input`
padding:0.3rem;
margin-bottom:0.5rem;
border-radius:10px;
border-color:#fff;
width: 15rem;
text-align:center;
`
export const Button = styled.button`
padding:0.2rem;
border-radius:10px;
border-color:#fff;
width: 15rem;
background-color:LimeGreen;
color: #fff;
font-size:1.3rem;
`

export const ContentSearch  = styled.form`
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;
border: 1px solid #000;
padding: 1rem;
border-radius: 10px;
margin:0.9rem 0;
`
export const ContentAccount = styled.form`
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;
border: 1px solid #000;
padding: .5rem;
border-radius: 10px;
margin:0.9rem 0;

        p{
        font-weight:bold;
        text-align:center;
        margin-bottom:0.6rem;
             }

         form{
            display: flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            border: 1px solid #000;
            padding: 1rem;
            border-radius: 10px;
            margin:0.9rem 0;

         }    
`;

export const ContainerStatment = styled.div`
background-color:#fff;
display: flex;
flex-direction:column;
align-items:center;
border: 1px solid #000;
padding: 1rem 0;
border-radius: 10px;
margin:0.9rem 0;
height:29rem;
overflow:visible;
overflow-y: scroll;
   h3{
       background-color:#ccc;
       position:absolute;
       padding: 0.4rem 0.8rem;
       border-radius: 10px;
       margin: -16px;
   }
`

export const ContentStatement = styled.div`
display: flex;
flex-direction: column;
align-items:center;
margin:2rem 0 0 0;

span{
    margin: 0.1rem 0;
    text-align:center;
        }
    p{
        font-weight:bold;
        text-align:center;
    }
`