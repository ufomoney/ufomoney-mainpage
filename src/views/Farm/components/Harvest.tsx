import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import Label from '../../../components/Label'
import Value from '../../../components/Value'
import useEarnings from '../../../hooks/useEarnings'
import useReward from '../../../hooks/useReward'
import { getBalanceNumber } from '../../../utils/formatBalance'

interface HarvestProps {
  pid: number
}

const Harvest: React.FC<HarvestProps> = ({ pid }) => {
  const earnings = useEarnings(pid)
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useReward(pid)

  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
            <CardIcon>👽</CardIcon>
            <Container>
              <Label text="UFO Earned" />
              <Value value={getBalanceNumber(earnings)} />
            </Container>
          </StyledCardHeader>
          <StyledCardActions>
            <Button
              disabled={!earnings.toNumber() || pendingTx}
              text={pendingTx ? 'Collecting UFO' : 'Harvest'}
              onClick={async () => {
                setPendingTx(true)
                await onReward()
                setPendingTx(false)
              }}
            />
          </StyledCardActions>
        </StyledCardContentInner>
      </CardContent>
    </Card>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 23px;

  > div {
    margin-top: 0;
  }
`

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-direction: row;
  margin-top: 10px;
`
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  // margin-top: ${(props) => props.theme.spacing[6]}px;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 10px;
  
  > button {
    font-family: 'Arial Rounded MT';
    color: #fff;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 129px;
    height: 32px;
    background: linear-gradient(90deg, #007ED9 16.36%, 
      rgba(0, 223, 252, 0.94) 106.83%);
    border-radius: 50px;

    > a {
      padding: 0;
      margin: 0 -5px;
      height: 100%;
      width: 100%;
    }
  }
`

const StyledSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export default Harvest
