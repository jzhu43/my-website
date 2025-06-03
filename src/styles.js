import styled from "styled-components";
import { motion } from "framer-motion";
//Styled Components
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0rem 7rem;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const Image = styled.div`
  flex: 0.75;
  overflow: hidden;
  z-index: 2;
  border-radius: 90%;
  img {
    width: 100%;
    height: 65vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const BorderBox = styled.div`
  box-sizing: border-box;
`;

export const Contact = styled(motion.div)`
  // outline-style: solid;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem 1rem;
  color: white;
  .thank-you-message {
    color: #4c72cb;
    font-weight: bold;
    font-size: 16px;
    animation: fadeInOut 5s ease-in-out forwards;
  }
  @keyframes fadeInOut {
    0% { opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { opacity: 0; }
  }
  @media (max-width: 600px) {
    display: block;
    text-align: center;
    h2{
    padding: 0rem 0rem 0rem 3rem;
    }
  }
`;

export const ContactForm = styled(motion.div)`
  // outline-style: solid;
  width: 100%;
  max-width: 500px;
  min-height: 40vh;
  z-index: 2;
  color: white;
  padding: 0 1rem;
  form{
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
  .contact-inputs{
    background-color: #1b1b1b;
    color: white;
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    box-sizing: border-box;
  }
  button{
    align-self: flex-end;
    width: auto;
  }
    
  @media (max-width: 600px) {
    display: block;
    padding: 0 0rem 0 7rem;
    align-items: center;
    .contact-inputs {
      font-size: 14px;
      align-items: center;
    }
    form{
      align-items: stretch;
    }

    button {
      font-size: 14px;
    }
  }
`;