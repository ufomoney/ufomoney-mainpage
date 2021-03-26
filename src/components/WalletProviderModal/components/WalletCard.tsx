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
          <CardTitle text={''} />
        </CardFlex>
        <Button onClick={onConnect} text={title} />
      </CardContent>
  </Card>
  </StylesContainer>
)

const StylesContainer = styled.div`
  width: 250px;
  margin: 0 auto;

  > div {
    width: 220px;
    justify-content: space-around;
    margin:0 auto;
    &:first-child {
      
      margin-right: auto;
    }

    @media (max-width: 530px) {
      width: 220px;
    }
    >div {
      flex: none;
      flex-direction: row;
      align-items: center;
    }
  }
`

const CardFlex = styled.div`
  display: flex;
  justify-content: center;

  + button {
    height: 40px;
    background: #dcedff;
  }
`

export default WalletCard
