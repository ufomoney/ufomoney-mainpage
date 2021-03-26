import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import Label from '../../../components/Label'
import Spacer from '../../../components/Spacer'
import Value from '../../../components/Value'
import SushiIcon from '../../../components/SushiIcon'
import useAllEarnings from '../../../hooks/useAllEarnings'
import useAllStakedValue from '../../../hooks/useAllStakedValue'
import useFarms from '../../../hooks/useFarms'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useSushi from '../../../hooks/useSushi'
import { getSushiAddress, getSushiSupply } from '../../../sushi/utils'
import { getBalanceNumber } from '../../../utils/formatBalance'

const PendingRewards: React.FC = () => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)
  const [scale, setScale] = useState(1)

  const allEarnings = useAllEarnings()
  let sumEarning = 0
  for (let earning of allEarnings) {
    sumEarning += new BigNumber(earning)
      .div(new BigNumber(10).pow(18))
      .toNumber()
  }

  const [farms] = useFarms()
  const allStakedValue = useAllStakedValue()

  if (allStakedValue && allStakedValue.length) {
    const sumWeth = farms.reduce(
      (c, { id }, i) => c + (allStakedValue[i].totalWethValue.toNumber() || 0),
      0,
    )
  }

  useEffect(() => {
    setStart(end)
    setEnd(sumEarning)
  }, [sumEarning])

  return (
    <span
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'right bottom',
        transition: 'transform 0.5s',
        display: 'inline-block',
      }}
    >
      <CountUp
        start={start}
        end={end}
        decimals={end < 0 ? 4 : end > 1e5 ? 0 : 3}
        duration={1}
        onStart={() => {
          setScale(1.25)
          setTimeout(() => setScale(1), 600)
        }}
        separator=","
      />
    </span>
  )
}

const Balances: React.FC = () => {
  const [totalSupply, setTotalSupply] = useState<BigNumber>()
  const sushi = useSushi()
  const sushiBalance = useTokenBalance(getSushiAddress(sushi))
  const { account, ethereum }: { account: any; ethereum: any } = useWallet()

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getSushiSupply(sushi)
      setTotalSupply(supply)
    }
    if (sushi) {
      fetchTotalSupply()
    }
  }, [sushi, setTotalSupply])

  return (
    <StyledWrapper>
      <Card>
        <CardContent>
          <StyledBalances>
            <StyledBalance>
              <SushiIcon />
              <Spacer />
              <div style={{ flex: 1 }}>
                <Label text="Your UFO Balance" />
                <Value
                  value={!!account ? getBalanceNumber(sushiBalance) : 'Locked'}
                />
              </div>
            </StyledBalance>
          </StyledBalances>
        </CardContent>
        <Footnote>
          <div>Pending harvest</div>
          <FootnoteValue>
            <PendingRewards/> <span>&nbsp;&nbsp;</span> UFO
          </FootnoteValue>
        </Footnote>
      </Card>
      <StyledLineContainer>
        <StyledLine/>
      </StyledLineContainer>
      <Card>
        <CardContent>
        <StyledBalances>
            <StyledBalance>
              <SushiIcon />
              <Spacer />
              <div style={{ flex: 1 }}>
              <Label text="Total UFO Supply" />
              <Value
                value={totalSupply ? getBalanceNumber(totalSupply) : 'Locked'}
              />
              </div>
            </StyledBalance>
          </StyledBalances>
        </CardContent>
        <Footnote>
          <div>New rewards per block</div>
          <FootnoteValue>0.0008888 UFO</FootnoteValue>
        </Footnote>
      </Card>
    </StyledWrapper>
  )
}

const Footnote = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;  
  font-size: 14px;
  font-family: 'Arial Rounded MT';
  font-weight: bolder;
  // padding: 8px 20px;
  padding-bottom: 10px;
  // color: ${(props) => props.theme.color.grey[400]};
  color: #243e60;
  // border-top: solid 1px ${(props) => props.theme.color.grey[300]};

`
const FootnoteValue = styled.div`
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
`

const StyledWrapper = styled.div`
  align-items: center;
  position: relative;
  display: flex;

  > div:first-child {
    margin-right: 20px;

    @media (max-width: 400px) {
    margin-right: 0;
  }
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: stretch;
  }
`

const StyledBalances = styled.div`
  display: flex;
`

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  padding-left: 10px;
`
const StyledLineContainer = styled.div`
  width: 471px;
  height: 210px;
  position: absolute;
  left: 18%;
  z-index: -1;
  @media (max-width: 769px) {
    left: -20%;
    right: 40%;
    top: 10%;
  }

  @media (max-width:450px) {
    display:none;
  }
`
const StyledLine = styled.div`
  width: 100%;
  height: 100%;
  position:relative;
  
  &::before {
    content:"";
    top:0;
    left:0;
    right:0;
    bottom:0;
    position:absolute;
    z-index:-1;
    padding: 2px;
    border-radius: 35px;
    background: linear-gradient(to right, #0283DA, #02d9f9fa); 
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`

export default Balances
