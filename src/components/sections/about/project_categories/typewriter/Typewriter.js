import React, { useState, useEffect, useRef } from 'react'
import { Grid, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const Typewriter = ({ text }) => {
  const index = useRef(-1)
  const [action, setAction] = useState('delete')
  const [currentText, setCurrentText] = useState('')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if(action === 'add') {
        if(index.current <= text.length - 1) {
          setCurrentText(text.slice(0, index.current + 1))
          index.current += 1
        }
      }
      if(action === 'delete') {
        if(index.current >= 1) {
          index.current -= 1
          setCurrentText(currentText.slice(0, index.current))
        }
        else {
          index.current = 0
          setAction('add')
          setCurrentText('')
        }
      }
    }, action === 'add' ? 50 : 15)

    return () => clearTimeout(timeoutId)
  }, [currentText, setCurrentText, action, setAction])

  useEffect(() => {
    setAction('delete')
  }, [text, setAction])

  return <Grid container
    align='center'
    justify='center'
    style={{
      userSelect: 'none',
      paddingTop: 20,
      height: 70,
    }}>
    <Typography
      variant='h4'>
      {currentText}
    </Typography>
  </Grid>
}

Typewriter.propTypes = {
  text: PropTypes.string,
}

export default Typewriter