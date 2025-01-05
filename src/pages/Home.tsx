import {AvatarsList, CardComponent, CustomChart, CustomTable, Header } from "@/components"
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

    const mockTableData = {
      headers: ['name', 'email', 'actions'],
      rows: [
        [
          <span>Nome1</span>,
          <span>Nome1@email</span>,
          <button>ACTION</button>,
        ],
        [
          <span>Nome2</span>,
          <span>Nome2@email</span>,
          <button>ACTION</button>,
        ],
        [
          <span>Nome3</span>,
          <span>Nome3@email</span>,
          <button>ACTION</button>,
        ],
      ]
    }
    return (
      <>
       
       <Header />
       <Container maxWidth="lg">
            <CardComponent >Card</CardComponent>
            <CardComponent >
              <AvatarsList listdata={mockListData}/>
            </CardComponent>
            <CardComponent >
              <CustomTable headers={mockTableData.headers} rows={mockTableData.rows}/>
            </CardComponent>
            <CardComponent>
              <CustomChart 
              labels={['jan', 'fav', 'mar', 'abr', 'mai']} 
              data={[1000.12, 2456.54, 986.32, 654.89, 789.54, 478.69]} 
              type='bar' 
              />
            </CardComponent>
       </Container>
       
      </>
    )
  } 
  export default Home