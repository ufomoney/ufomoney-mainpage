import React from 'react'
import Button from '../../Button'
import Card from '../../Card'
import CardContent from '../../CardContent'
import CardIcon from '../../CardIcon'
import CardTitle from '../../CardTitle'
import Spacer from '../../Spacer'
import styled from 'styled-components'

interface WalletCardProps {
  icon: React.ReactNode
  onConnect: () => void
  title: string
}

const WalletCard: React.FC<WalletCardProps> = ({ icon, onConnect, title }) => (
  <StylesContainer>
    <Card>
      <CardContent>
        <CardFlex>
          <CardIcon>{icon}</CardIcon>
          <CardTitle text={title} />
        </CardFlex>
        <Button onClick={onConnect} text="Connect" />
      </CardContent>
  </Card>
  </StylesContainer>
)

const StylesContainer = styled.div`
  width: 250px;
  > div {
    width: 250px;
    justify-content: space-around;
    @media (max-width: 530px) {
      width: 220px;
    }
    >div {
      flex: 0;
  flex-direction: row;
    }
  }
`

const CardFlex = styled.div`
  display: flex;
  justify-content: center;

  + button {
    width: 100px;
    height: 30px;
    background: #dcedff;
  }
`

export default WalletCard
