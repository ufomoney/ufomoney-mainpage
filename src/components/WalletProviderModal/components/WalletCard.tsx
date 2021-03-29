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

    @media (max-width: 540px) {
      width: 193px;
    }

    > div {
      flex: none;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      padding: 0;

      @media (max-width: 530px) {
        flex-direction: column;
      }

      > button {
        width: 150px;
        margin: 5px 0 0 0;
      }

      > div {
        width: 32px;
        height: 32px;
      }
    }
  }
`

const CardFlex = styled.div`
  display: flex;
  justify-content: center;


  + button {
    height: 40px;
    background: #dcedff;

    @media (max-width: 530px) {
      width: 160px;
      margin-top: 10px;
    }
  }
`

export default WalletCard
