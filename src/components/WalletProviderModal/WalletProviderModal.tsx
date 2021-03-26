import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'


import wc_icon from '../../assets/img/wc_logo.svg'
import binance from '../../assets/img/binance.svg'

import Button from '../Button'
import Modal, { ModalProps } from '../Modal'
import ModalActions from '../ModalActions'
import ModalContent from '../ModalContent'
import ModalTitle from '../ModalTitle'
import Spacer from '../Spacer'

import WalletCard from './components/WalletCard'

const WalletProviderModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { account, connect } = useWallet()

  useEffect(() => {
    if (account) {
      onDismiss()
    }
  }, [account, onDismiss])

  return (
    <Modal>
      <ModalTitle text="Select a wallet provider" />

      <ModalContent>
        <StyledWalletsWrapper>
          <StyledWalletCard>
            <WalletCard
              icon={<img src={binance} style={{ height: 32 }} />}
              onConnect={() => connect('injected')}
              title="Any BSC Wallet"
            />
          </StyledWalletCard>
          <Spacer size="sm" />
          <StyledWalletCard>
            <WalletCard
              icon={<img src={wc_icon} style={{ height: 24 }} />}
              onConnect={() => connect('walletconnect')}
              title="WalletConnect (View only)"
            />
          </StyledWalletCard>
        </StyledWalletsWrapper>
      </ModalContent>

      <ModalActions>
        <Button text="Cancel" variant="secondary" onClick={onDismiss} />
      </ModalActions>
    </Modal>
  )
}

const StyledWalletsWrapper = styled.div`
  display: flex;

  @media (max-width: 530px) {
    flex-direction: column;
  }

  // flex-wrap: wrap;
  // @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
  //   flex-direction: column;
  //   flex-wrap: none;
  // }
`

const StyledWalletCard = styled.div`
  // flex-basis: calc(50% - ${(props) => props.theme.spacing[2]}px);
  align-items: center;
  
`

export default WalletProviderModal
