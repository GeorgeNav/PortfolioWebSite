import React from 'react'
import { AppBar, Tabs, Tab, Box, Paper, Grid, Typography } from '@material-ui/core'
import {
  School,
  Book,
  Person,
} from '@material-ui/icons'
import SwipeableViews from 'react-swipeable-views'
import {
  CATEGORIES,
  CATEGORY_NAMES,
} from 'utils/projects'
import Cards from 'components/sections/projects/categories/cards/Cards'
import Typewriter from 'components/sections/projects/categories/typewriter/Typewriter'

import shortid from 'shortid'
// import { useDeviceType } from 'hooks'

const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
})

const Categories = () => {
  // const deviceType = useDeviceType()
  const [key, setKey] = React.useState(0)

  return <Paper>
    <AppBar
      position='static'>
      <Grid container
        align='center'
        justify='center'
        style={{
          userSelect: 'none',
          paddingTop: 20,
          height: 70,
        }}>
        <Typewriter
          text={CATEGORIES.map(({name}) => name)[key]}
          options={{
            typeDelay: 50,
            backspaceDelay: 15,
            cursor: false,
          }}
          wrapper={Typography}
          variant='h4'/>
      </Grid>
      <Tabs centered
        value={key}
        onChange={(_, newKey) => setKey(newKey)}
        variant='fullWidth'
        //orientation='horizontal'
        //orientation={
        //deviceType !== 'phone'
        //  ? 'vertical'
        //  : 'horizontal'
        //}
        //scrollButtons='on'
        aria-label='tabs'>
        {CATEGORIES.map((category, index) =>
          <Tab
            key={shortid.generate()}
            icon={(() => {
              if(category.name === CATEGORY_NAMES.RESEARCH)
                return <School/>
              else if(category.name === CATEGORY_NAMES.ACADEMIC)
                return <Book/>
              else if(category.name === CATEGORY_NAMES.PERSONAL)
                return <Person/>
            })()}
            // label={category.name}
            {...a11yProps(index)} />)}
      </Tabs>
    </AppBar>
    <SwipeableViews
      axis='x'
      index={key}
      onChangeIndex={(newKey) => setKey(newKey)}>
      {CATEGORIES.map((category, index) =>
        <Box
          p={2}
          key={shortid.generate()}
          style={{
            height: 600,
            overflowY: 'scroll',
            overflowX: 'hidden',
            margin: 'auto',
            backgroundColor: 'lightgray',
          }}
          role='tabpanel'
          hidden={key !== index}>
          {key === index && 
            <Cards projects={category.projects}/>}
        </Box>)}
    </SwipeableViews>
  </Paper>
}

export default Categories
