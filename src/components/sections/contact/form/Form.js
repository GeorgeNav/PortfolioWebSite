import React, { useRef } from 'react'
import { Grid, TextField, Button, Typography } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { sendForm } from 'emailjs-com'

const formVariant = 'filled'

const Form = () => {
  const formRef = useRef()
  const { register, /* handleSubmit, errors */ } = useForm()

  const onSubmit = (e) => {
    sendForm(
      'service_znjosyj',
      'template_v1dlasy',
      e.target,
      'user_HlNFnApaJz30khi5FiSOE',
    )
  }

  /* const onError = (data) => {
    console.log(data)
  } */

  return <form
    ref={formRef}
    //onSubmit={handleSubmit(onSubmit, onError)}
    onSubmit={onSubmit}>
    <Grid container
      spacing={2}>
      <Grid item container
        xs={12}
        justify='center'>
        <Typography
          align='center'
          variant='h3'
          style={{
            pointerEvents: 'none'
          }}>
            Email George
        </Typography>
      </Grid>
      <Grid item container
        xs={12}
        justify='center'>
        <Typography
          align='center'
          style={{
            pointerEvents: 'none'
          }}>
          george.g.navarro@gmail.com
        </Typography>
      </Grid>
      <Grid item container
        xs={12}
        justify='center'>
        <Typography
          align='center'
          variant='h5'
          style={{
            pointerEvents: 'none'
          }}>
          {'I\'d love to chat with you about how I can help'}
        </Typography>
      </Grid>
      <Grid item
        xs={12}
        sm={6}>
        <TextField
          fullWidth
          {...register('name', {required: true})}
          label='Name'
          variant={formVariant}/>
      </Grid>
      <Grid item
        xs={12}
        sm={6}>
        <TextField
          fullWidth
          {...register('email', {required: true})}
          label='Email'
          variant={formVariant}/>
      </Grid>
      <Grid item
        xs={12}>
        <TextField
          fullWidth
          {...register('subject', {required: true})}
          label='Subject'
          variant={formVariant}/>
      </Grid>
      <Grid item
        xs={12}>
        <TextField multiline
          fullWidth
          {...register('message', {required: true})}
          rows={4}
          label='Message'
          variant={formVariant}/>
      </Grid>
      <Grid item container
        xs={12}
        justify='center'>
        <Button
          color='default'
          type='submit'>
            Send Email
        </Button>
      </Grid>
    </Grid>
  </form>
}
 
export default Form