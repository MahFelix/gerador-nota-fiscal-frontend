import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: rgb(27, 26, 26);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  margin: 20px auto;
  text-align: center;
  width: 500px;

  /* Estilos específicos para mobile */
  @media (max-width: 768px) {
    padding: 15px;
    width: 95%;
    margin: 10px auto;
  }
  
  img {
   
    height: auto;
    
    @media (max-width: 768px) {
      margin-top: 250px;
      width: 30%;
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  color: #fff;
  font-size: 1.5em;
  text-align: center;
  font-family: 'Arial', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1.3em;
    margin-bottom: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1em;
  background-color: #f7f7f7;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    background-color: #fff;
    outline: none;
  }
  
  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.9em;
  }
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #4AB6ED;
  color: black;
  border: none;
  border-radius: 8px;
  font-size: 1em;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
  
  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.9em;
  }
`;

// Componente adicional para melhorar o espaçamento em mobile
export const MobileSpacer = styled.div`
  height: 20px;
  
  @media (max-width: 768px) {
    height: 10px;
  }
`;