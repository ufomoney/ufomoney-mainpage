import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import Button from '../../../components/Button'
import Modal, { ModalProps } from '../../../components/Modal'
import ModalActions from '../../../components/ModalActions'
import ModalTitle from '../../../components/ModalTitle'
import TokenInput from '../../../components/TokenInput'
import { getFullDisplayBalance } from '../../../utils/formatBalance'
import styled from 'styled-components'

interface WithdrawModalProps extends ModalProps {
  max: BigNumber
  onConfirm: (amount: string) => void
  tokenName?: string
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({
  onConfirm,
  onDismiss,
  max,
  tokenName = '',
}) => {
  const [val, setVal] = useState('')
  const [pendingTx, setPendingTx] = useState(false)

  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max)
  }, [max])

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal(e.currentTarget.value)
    },
    [setVal],
  )

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance)
  }, [fullBalance, setVal])

  return (
    <Modal>
      <ModalTitle text={`Withdraw ${tokenName}`} />
      <TokenInput
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        value={val}
        max={fullBalance}
        symbol={tokenName}
      />
      <ModalActions>
        <StyledButton>
          <Button text="Cancel" variant="secondary" onClick={onDismiss} />
          <Button
            disabled={pendingTx}
            text={pendingTx ? 'Pending Confirmation' : 'Confirm'}
            onClick={async () => {
              setPendingTx(true)
              await onConfirm(val)
              setPendingTx(false)
              onDismiss()
            }}
          />
        </StyledButton>
      </ModalActions>
    </Modal>
  )
}

const StyledButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
> button {
  width: 100px;
}
`

export default WithdrawModal
