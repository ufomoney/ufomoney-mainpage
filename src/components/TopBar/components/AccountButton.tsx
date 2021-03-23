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
        <StyledWalletButton onClick={onPresentAccountModal}>My wallet</StyledWalletButton>
      )}
      <a href="https://ufo.money" style={{textDecoration: 'none'}}>
        <StyledUFOButton>
          <img src={earnUfo}/>
          Earn UFO</StyledUFOButton>
      </a>
      
    </StyledAccountButton>
  )
}

const StyledAccountButton = styled.div`display: flex;`

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
`

export default AccountButton
