import {AvatarsList, CardComponent, Header } from "@/components"
import { Container } from "@mui/material"
import { currencyConverter } from "@/utils"


function Home() {
    const mockListData = [
      {
        avatar: '/dnc-avatar.jpg',
        name: 'nome sobrenome 1',
        subtitle: currencyConverter(1234.54),
      },
      {
        avatar: '/dnc-avatar.jpg',
        name: 'nome sobrenome 2',
        subtitle: currencyConverter(1974.54),
      },
      {
        avatar: '/dnc-avatar.jpg',
        name: 'nome sobrenome 3',
        subtitle: currencyConverter(15834.54),
      },
    ]
    return (
      <>
       
       <Header />
       <Container maxWidth="lg">
            <CardComponent >Card</CardComponent>
            <CardComponent >
              <AvatarsList listdata={mockListData}/>
            </CardComponent>
       </Container>
       
      </>
    )
  } 
  export default Home