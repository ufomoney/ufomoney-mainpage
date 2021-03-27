import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import useModal from '../../../hooks/useModal'
import earnUfo from '../../../assets/img/earn_ufo.png'
import Button from '../../Button'
import WalletProviderModal from '../../WalletProviderModal'
import AccountModal from './AccountModal'

interface AccountButtonProps {}

const AccountButton: React.FC<AccountButtonProps> = (props) => {
  const [onPresentAccountModal] = useModal(<AccountModal />)
  const [onPresentWalletProviderModal] = useModal(
    <WalletProviderModal />,
    'provider',
  )

  const { account } = useWallet()

  const handleUnlockClick = useCallback(() => {
    onPresentWalletProviderModal()
  }, [onPresentWalletProviderModal])

  return (
    <StyledAccountButton>
      {!account ? (
        // <Button onClick={handleUnlockClick} size="sm" text="Unlock Wallet" />
        <StyledWalletButton onClick={handleUnlockClick}>Connect wallet</StyledWalletButton>
      ) : (
        // <Button onClick={onPresentAccountModal} size="sm" text="My Wallet" />
        <StyledMyWalletButton onClick={onPresentAccountModal}>My wallet</StyledMyWalletButton>
      )}
      <a href="https://ufo.money" style={{textDecoration: 'none'}}>
        <StyledUFOButton>
          <img src={earnUfo}/>
          Earn UFO</StyledUFOButton>
      </a>
      
    </StyledAccountButton>
  )
}

const StyledAccountButton = styled.div`
  display: flex;
  align-items: center;
`

const StyledWalletButton = styled.button`
  background: #fff;
  border-radius: 50px;
  width: 207px;
  height: 46px;
  color: #1d4273;
  text-align: center;
  outline: none;
  border: none;
  font-weight: bolder;
  font-size: 16px;
  cursor: pointer;
  margin-right: 15px;

  &:hover {
    background: linear-gradient(182.61deg, rgba(96, 224, 170, 0.67) 2.17%,
     rgba(95, 233, 175, 0.48) 97.82%);
     color: #fff;
  }
  @media (max-width: 933px) {
    width: 100px;
  }
`
const StyledMyWalletButton = styled.button`
  background: linear-gradient(180deg, rgba(154, 222, 237, 0.63) 0%,
   rgba(101, 181, 255, 0.72) 100%);;
  border-radius: 50px;
  width: 207px;
  height: 46px;
  color: #fff;
  text-align: center;
  outline: none;
  border: none;
  font-weight: bolder;
  font-size: 16px;
  cursor: pointer;
  margin-right: 15px;
  @media (max-width: 933px) {
    width: 100px;
  }
  &:hover {
    border: 3px solid #fff;
  }
`

const StyledUFOButton = styled.button`
  background: none;
  width: 167px;
  height: 47px;
  border: 1px solid #0877bb;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  font-weight: bolder;
  font-size: 16px;
  cursor: pointer;
  border-radius: 50px;
  outline: none;

  @media (max-width: 933px) {
    width: 100px;
  }
`

export default AccountButton
