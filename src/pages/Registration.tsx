
import { Box, Container, Grid} from "@mui/material"
import { BannerImage, FormComponent, Logo, StyledH1, StyledP, StyledUl  } from "@/components"
import { pxToRem } from "@/utils"

function Registration() {
  

    return (
      <>       
       <Box>
                 <Grid container>
                     <Grid item xs={12} sm={6} sx={{ alignItems: 'center', display: 'flex', height: '100vh' }} >
                         <Container maxWidth="sm">
                         <Box sx={{ marginBottom: pxToRem(24) }}><Logo height={41} width={100}/></Box>
                          <Box sx={{ marginBottom: pxToRem(24) }}>
                            <StyledH1>Faça seu cadastro</StyledH1> 
                            <StyledP>Primeiro diga nos quem voce é.</StyledP>
                            <StyledUl>
                                  <li>Entre 8 e 16 caracteres;</li>
                                  <li>Pelo menos uma letra Maiuscula;</li>
                                  <li>Pelo menos um caracteere especial;</li>
                                  <li>pelo menos um numero;</li>
                            </StyledUl>
                          </Box>     
                         <FormComponent 
                       inputs={[
                        { type: 'email', placeholder: 'Email'},
                        { type: 'password', placeholder: 'senha' },
                       ]}
                       buttons={[
                        { className: 'primary', type: 'submit', children: 'Login'},
                       ]}
                       message={{
                        msg: 'erro',
                        type: 'error',
                       }}
                    />    
                         </Container>
                     </Grid>
                     <Grid 
                      item 
                      sm={6}
                       sx={{ display: { xs: 'none', sm: 'block' }  }} >
                         <BannerImage />                 
                     </Grid>
                 </Grid>
              </Box> 
      </>
    )
  }
  
  export default Registration
