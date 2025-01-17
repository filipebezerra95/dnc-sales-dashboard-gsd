import { useContext } from "react"
import { AppThemeContext } from "@/Contexts/AppThemeContext"

//COMPONENTS
import { CardComponent,  Header, StyledH2, StyledButton } from "@/components"
import { Container, Grid } from "@mui/material"

//services
import { logout } from "@/services"


function Profifle() {
    const themeContext = useContext(AppThemeContext)
    return (
      <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
              <CardComponent>
                seus dados...
              </CardComponent>
          </Grid>
          <Grid item xs={12} sm={6}>
              <CardComponent>
                <StyledH2 className="mb-1">Definições de Conta</StyledH2>
                <StyledButton className="primary mb-1" 
                onClick={themeContext?.toggleTheme}
                >
                  Trocar para tema{' '}
                 {themeContext?.appTheme === 'light' ? 'escuro' : 'claro'}
                </StyledButton>
                <StyledButton className="alert" onClick={logout}>
                  LOGOUT
                </StyledButton>
              </CardComponent>
          </Grid>
        </Grid>
      </Container>
      
      </>
    )
  }
  
  export default Profifle