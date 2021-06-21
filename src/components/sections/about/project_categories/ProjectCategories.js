import React from 'react'
import { AppBar, Tabs, Tab, Box, Paper } from '@material-ui/core'
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
import ProjectCards from './project_cards/ProjectCards'
import Typewriter from 'components/sections/about/project_categories/typewriter/Typewriter'

import shortid from 'shortid'
import { useDeviceType } from 'hooks'

const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
})

const ProjectCategories = () => {
  const deviceType = useDeviceType()
  const [key, setKey] = React.useState(0)

  return <Paper
    style={{
      marginTop: 20,
      ...deviceType !== 'phone'
        ? {
          maxWidth: 800,
          marginBottom: 100,
        } : {
          marginBottom: 20,
        },
    }}>
    <AppBar
      position='static'>
      <Typewriter
        text={CATEGORIES.map(({name}) => name)[key]}/>
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
            height: 650,
            overflowY: 'scroll',
            overflowX: 'hidden',
            margin: 'auto',
            backgroundColor: 'lightgray',
          }}
          role='tabpanel'
          hidden={key !== index}>
          {key === index && 
            <ProjectCards projects={category.projects}/>}
        </Box>)}
    </SwipeableViews>
  </Paper>
}

export default ProjectCategories
