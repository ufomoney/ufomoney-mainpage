import React from 'react'
import styled, { keyframes } from 'styled-components'

export interface ModalProps {
  onDismiss?: () => void
}

const Modal: React.FC = ({ children }) => {
  return (
    <StyledResponsiveWrapper>
      <StyledModal>{children}</StyledModal>
    </StyledResponsiveWrapper>
  )
}

const mobileKeyframes = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`

const StyledResponsiveWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  max-width: 550px;z
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    flex: 1;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    max-height: calc(100% - ${(props) => props.theme.spacing[4]}px);
    animation: ${mobileKeyframes} 0.3s forwards ease-out;
  }
`

const StyledModal = styled.div`
  // padding: 0 20px;
  // background: ${(props) => props.theme.color.grey[200]};
  // border: 1px solid ${(props) => props.theme.color.grey[300]}ff;
  background: linear-gradient(180.33deg,rgb(105 103 235) 6.78%, 
  rgb(62 146 116 / 98%) 99.71%);
  border-radius: 12px;
  // box-shadow: inset 1px 1px 0px ${(props) => props.theme.color.grey[100]};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
`

const StyledModalContent = styled.div``

export default Modal
