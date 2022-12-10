import styled from 'styled-components';

export const Card = styled.div`
  width: 350px;
  height: 430px;
  
  background-color: #EFEEEE;
  border-radius: 0.3rem;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.5);

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 2rem;

  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 20%;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  color: #000;

  margin-bottom: 0.5rem;
`;

export const SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: 300;
  color: #7E8697;

  margin-bottom: 2rem;
`;

export const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 400;
  color: #344054;

  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;

  border-radius: 0.3rem;
  border: 1px solid #DDD;

  background-color: #FFF;

  margin-bottom: 1rem;

  font-weight: 300;
`;

export const LoginButton = styled.button`
  font-size: 1rem;
  font-weight: 300;

  padding: 0.5rem 0;
  width: 100%;

  border-radius: 0.3rem;
  color: #FFF;
  cursor: pointer;

  background-color: #2D8CFF;

  margin: 1rem 0 2rem 0;
`;

export const SignUpText = styled.span`
  font-weight: 300;
  font-size: 0.85rem;
  color: #7E8697;

  width: 100%;
  text-align: center;
`;