import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import { CartList, OrderSummary } from "../../components/cart"
import NextLink from 'next/link'


const SummaryPage = () => {
  return (
    <ShopLayout title={'resumen de orden'} pageDescription={'Resumen de la orden'}>
    <Typography component='h1' variant='h5'>Resumen de la Orden</Typography>
    
    <Grid container>
      <Grid item xs={12} sm={7}>
        {/* CartList */}
        <CartList />
      </Grid>
      <Grid item xs={12} sm={5}>
      <Card className='summary-card'>
        <CardContent>
          <Typography variant='h6'>Resumen (3 productos)</Typography>
          <Divider sx={{ my: 2 }}/>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant="subtitle1">Dirección de entrega</Typography>
            <NextLink href='/checkout/address' passHref legacyBehavior>
              <Link underline="always">
                Editar
              </Link>
            </NextLink>
          </Box>

          <Typography>Ivan Jose Morales</Typography>
          <Typography>Carrera 17d</Typography>
          <Typography>Los cedros</Typography>
          <Typography>Colombia</Typography>
          <Typography>57 302 643 8641</Typography>
          <Divider sx={{ my: 1 }}/>
          <Box display='flex' justifyContent='end'>
            <NextLink href='/cart' passHref legacyBehavior>
              <Link underline="always">
                Editar
              </Link>
            </NextLink>
          </Box>

          <OrderSummary/>

          <Button color='secondary' className='circular-btn' fullWidth>
            Confirmar Orden
          </Button>
        </CardContent>
      </Card>
      </Grid>
    </Grid>        
  </ShopLayout>
  )
}
export default SummaryPage