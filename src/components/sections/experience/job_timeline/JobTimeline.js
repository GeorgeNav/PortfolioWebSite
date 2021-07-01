import React from 'react'
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent } from '@material-ui/lab'
import shortid from 'shortid'
import { Paper, Typography } from '@material-ui/core'

const jobs = [
  {
    title: 'Full Stack Developer',
    description: 'Full stack application development and well as develop scripts for various NASA tasks',
    duties: [
      'Architected a full stack aerospace organization app using a modern technology stack',
      'Strategize tasks',
      'Research and implement solutions',
      'Assigned duties to complete tasks in a timely fashion',
      'Mentored other employees assessing various project ideas',
      'Use python to write scripts to generate modular proprietary aerospace ground displays as well as other specific use cases',
    ],
  },
  {
    title: 'Math Instructor',
    description: 'Teach various math concepts',
    duties: [
      'Use various teaching techniques to teach students/employees simple and complex mathematics concepts',
      'Maintain an orderly, productive, and fun learning environment',
      'Provided private tutoring',
    ],
  },
  {
    title: 'Drafter/Design Engineer',
    description: 'Excercise oil industry knowledge to draft and design using 2D and 3D software',
    duties: [
      'Use AutoCAD to create/maintain 2D drafting block standard',
      'Use AutoCAD to create/maintain 2D isometric drawings',
      'Use SolidWorks, and PV Elite 2D/3D to design 3D tanks using engineering specifications',
    ],
  },
  {
    title: 'Licensed Massage Therapist',
    description: 'Aid the client in their overall wellbeing',
    duties: [
      'Provide various massage modalities services',
      'Assess and provide a tailored massage routine',
      'Help recover from injuries',
      'Ease client mental stress',
      'Improve client overall wellbeing',
    ],
  },
]

const JobTimeline = () => {
  return <Timeline
    align='left'>
    {jobs.map((job) =>
      <TimelineItem
        key={shortid.generate()}>
        <TimelineContent>
          <Paper
            elevation={3}
            style={{
              padding: 20,
            }}>
            <Typography
              variant='h5'
              style={{fontWeight: 'bold'}}>
              {job.title}
            </Typography>
          </Paper>
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineOppositeContent>
          <Paper
            elevation={3}
            style={{
              padding: 20,
            }}>
            <Typography
              align='left'
              variant='h6'
              style={{fontWeight: 'bold'}}>
              Description
            </Typography>
            <Typography
              align='left'>
              {job.description}
            </Typography>
            <Typography
              align='left'
              variant='h6'
              style={{
                fontWeight: 'bold',
                marginTop: 20,
              }}>
              Duties
            </Typography>
            {job.duties && <Typography
              algin='left'
              style={{textAlign: 'left'}}>
              <ul>
                {job.duties.map((duty) =>
                  <li
                    key={shortid.generate()}>
                    {duty}
                  </li>)} 
              </ul>
            </Typography>}
          </Paper>
        </TimelineOppositeContent>
      </TimelineItem>)}
  </Timeline>
}
 
export default JobTimeline