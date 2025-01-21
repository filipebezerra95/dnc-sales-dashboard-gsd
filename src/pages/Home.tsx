//COMPONENTS
import {
  AvatarsList, 
  CardComponent, 
  CustomChart, 
  CustomTable, 
  Header,
  StyledH2,
  StyledH3,
  StyledSpan
} from "@/components"
import { Container, Grid } from "@mui/material"

//HOOKS
import { useGet } from "@/hooks"

// UTILS
import { currencyConverter } from "@/utils"

//TYPES
import { HighlightsData, StarsData, NewsData } from "@/types"


function Home() {
  const {
    data: highlightsData,
    loading: highlightsLoading,
    error: highlitghtsError,
  } = useGet<HighlightsData[]>('sales/highlights')
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
       <Container maxWidth='lg'>
           <Grid container spacing={4}>
            {
              !highlitghtsError && (
                <>
                  <Grid item xs={12} md={4}>
                      <CardComponent 
                      className={highlightsLoading
                       ? 'skeleton-loading skeleton-loading-mh-1' 
                       : ''
                       }
                       >
                        {!highlightsLoading && highlightsData && (
                          <>
                            <StyledH2 className="mb-1">
                              Total de vendas no mês
                            </StyledH2>
                            <StyledH3>
                              {currencyConverter(highlightsData[0].value)}                             
                            </StyledH3>
                            <StyledSpan>
                              {highlightsData[0].subtitle}
                            </StyledSpan>
                          </>
                        )}
                        
                      </CardComponent>
                  </Grid>
                  <Grid item xs={12} md={4}>
                      <CardComponent 
                        className={
                          highlightsData ? highlightsData [1].subtitle : 'skeleton-loading skeleton-loading-mh1'
                        }> 
                        {!highlightsLoading && highlightsData && (
                          <>
                            <StyledH2 className="mb-1">Metas do mês</StyledH2>
                            <StyledH3>
                              {currencyConverter(highlightsData[1].value)}                             
                            </StyledH3>
                            <StyledSpan>
                              {highlightsData[1].subtitle}
                            </StyledSpan>
                          </>
                        )}
                      </CardComponent>
                  </Grid>
                  <Grid item xs={12} md={4}>
                      <CardComponent className={highlightsLoading ? 'skeleton-loading skeleton-loading-mh-1' : ''}
                      >
                        {!highlightsLoading && highlightsData && (
                          <>
                            <StyledH2 className="mb-1">
                            Leads Contactados
                            </StyledH2>
                            <StyledH3>
                              {currencyConverter(highlightsData[2].value)}                             
                            </StyledH3>
                            <StyledSpan>
                              {highlightsData[2].subtitle}
                            </StyledSpan>
                          </>
                        )}
                      </CardComponent>
                  </Grid>
                </>
              )
            }
             
             <Grid item xs={12} md={7}>
              <CardComponent>
                <StyledH2 className="mb-1">Valor de Vendas no Mês</StyledH2>
                <CustomChart 
                  labels={['jan', 'fav', 'mar', 'abr', 'mai']} 
                  data={[1000.12, 2456.54, 986.32, 654.89, 789.54, 478.69]} 
                  type='line'             
                />
              </CardComponent>
             </Grid>
             <Grid item xs={12} md={5}>
              <CardComponent>
                <StyledH2 className="mb-1">Maiores vendedores do Mês</StyledH2>
                <AvatarsList listdata={mockListData}/>
              </CardComponent>
             </Grid>             
             <Grid item xs={12} md={5}>
              <CardComponent>
                <StyledH2 className="mb-1">Noticias Relevantes</StyledH2>
                <CustomTable 
                  headers={mockTableData.headers} 
                  rows={mockTableData.rows}
                />
              </CardComponent>
             </Grid>
             <Grid item xs={12} md={7}>
              <CardComponent>
                <StyledH2 className="mb-1">Valor de Vendas por Mês</StyledH2>
                <CustomChart 
                  labels={['jan', 'fav', 'mar', 'abr', 'mai']} 
                  data={[1000.12, 2456.54, 986.32, 654.89, 789.54, 478.69]} 
                  type='bar'             
                />
              </CardComponent>
             </Grid>
           </Grid>
       </Container>     
      </>
    )
  } 
  export default Home