import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

export const ModalStyle = styled.div`
  max-width: 1200px;
  max-height: 800px;
  padding: 30px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 30px;
`;
