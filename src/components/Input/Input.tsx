import React from 'react'
import styled from 'styled-components'

export interface InputProps {
  endAdornment?: React.ReactNode,
  onChange: (e: React.FormEvent<HTMLInputElement>) => void,
  placeholder?: string,
  startAdornment?: React.ReactNode,
  value: string,
}

const Input: React.FC<InputProps> = ({
  endAdornment,
  onChange,
  placeholder,
  startAdornment,
  value,
}) => {
  return (
    <StyledInputWrapper>
      {!!startAdornment && startAdornment}
      <StyledInput placeholder={placeholder} value={value} onChange={onChange} /> <span>&nbsp;&nbsp;</span>
      {!!endAdornment && endAdornment}
    </StyledInputWrapper>
  )
}

const StyledInputWrapper = styled.div`
  // background-color: ${props => props.theme.color.grey[200]};
  // border-radius: ${props => props.theme.borderRadius}px;
  // box-shadow: inset 4px 4px 8px ${props => props.theme.color.grey[300]},
  //   inset -6px -6px 12px ${props => props.theme.color.grey[100]};
  width: 300px;
  align-items: center;
  background: linear-gradient(90deg, rgba(62, 143, 181, 0.09) 1.35%, rgba(144, 194, 217, 0.48) 50.83%, 
  rgba(62, 143, 181, 0.18) 100%, rgba(62, 143, 181, 0.12) 100%);
  display: flex;
  height: 72px;
  padding: 0 ${props => props.theme.spacing[3]}px;
`

const StyledInput = styled.input`
  background: none;
  border: 0;
  text-align: right;
  // color: ${props => props.theme.color.grey[600]};
  color: #fff;
  font-size: 18px;
  flex: 1;
  height: 56px;
  margin: 0;
  padding: 0;
  outline: none;
  width: 100%;

  &::placeholder {
    color: #fff
  }
`

export default Input