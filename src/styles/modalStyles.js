import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.7;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

export const ModalBody = styled.div`
  z-index: 2;
  background: white;
  position: relative;
  margin: 1.5rem auto;
  border-radius: 0.5rem;
  max-width: 54rem;
  padding: 2rem;
`;
