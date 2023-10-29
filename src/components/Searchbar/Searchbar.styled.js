import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  color: black;
  background-color: #d5f9ed;
  padding: 15px 0;
  box-shadow: rgb(67, 135, 112) 9px 9px 18px, rgb(149, 255, 248) -9px -9px 18px;
`;

export const Button = styled.button`
  color: #00a97f;
  padding: 0.6em 1.3em;
  background-color: transparent;
  border-top-left-radius: 0.3em;
  border-bottom-left-radius: 0.3em;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.5s;
  font-weight: 400;
  font-size: 17px;
  border: 1px solid;
  border-right: none;
  font-family: inherit;
  text-transform: uppercase;
  color: #00a97f;
  z-index: 1;
  

  &::before,
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 50px;
    transform: translate(-50%, -50%);
    position: absolute;
    border-radius: 50%;
    z-index: -1;
    background-color: #00a97f;
    transition: 1s ease;
  }

  &::before {
    top: -1em;
    left: -1em;
  }

  &::after {
    left: calc(100% + 1em);
    top: calc(100% + 1em);
  }

  &:hover::before,
  &:hover::after {
    height: 410px;
    width: 410px;
  }

  &:hover {
    color: rgb(10, 25, 30);
  }

  &:active {
    filter: brightness(0.8);
  }

  &:focus {
    outline: #00a97f;
    border: 1px solid #007356;
    background-color: #00a97f;
    color: black;
  }
`;

export const InputList = styled.input`
  color: #00a97f;
  padding: 0.6em 1.3em;
  background-color: transparent;
  border-top-right-radius: 0.3em;
  border-bottom-right-radius: 0.3em;
  transition: 0.5s;
  font-weight: 400;
  font-size: 17px;
  border: 1px solid;
  font-family: inherit;
  color: #00a97f;
  width: 245px;
  
  &:hover {
    color: rgb(10, 25, 30);
    outline: #007356;
    border: 1px solid #007356;
  }

  &:active {
    filter: brightness(0.8);
  }
  
  &:focus {
    outline: #00a97f;
    border: 1px solid #007356;
    background-color: #00a97f;
    color: black;
  }
`;