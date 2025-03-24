import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 20px auto;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
  font-size: 1.8em;
  text-align: center;
  font-family: 'Arial', sans-serif;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1em;
  background-color: #f7f7f7;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bff;
    background-color: #fff;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1em;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;
