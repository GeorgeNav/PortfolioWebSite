import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Form from 'components/sections/contact/email_form/form/Form'

const EmailForm = () => {
  const Title = () => <Grid item container
    direction='row'
    justify='center'
    xs={12}>
    <Typography
      align='center'
      variant='h3'
      style={{
        userSelect: 'none'
      }}>
      {'Email George'}
    </Typography>
  </Grid>
  
  const Description = () => <Grid item container
    justify='center'
    xs={12}> 
    <Typography
      align='center'
      variant='h5'
      style={{
        userSelect: 'none'
      }}>
      {'I\'d love to chat with you about how I can help'}
    </Typography>
  </Grid>

  return <Grid item container
    justify='center' alignItems='stretch' alignContent='stretch'
    direction='row' spacing={2}
    xs={12}>
    <Title/>
    <Description/>
    <Form/>
  </Grid>
}
 
export default EmailForm