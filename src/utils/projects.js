import FUEL_CONSOLIDATOR_IMAGES from 'assets/images/projects/fuel_consolidator'
import WOULD_YOU_RATHER_IMAGES from 'assets/images/projects/would_you_rather'
import TECH from 'utils/technologies'

const PROJECT_TYPES = {
  ACADEMIC: 'ACADEMIC',
  PERSONAL: 'PERSONAL',
}

const PROJECTS = {
  fuel_consolidator: {
    title: 'Fuel Consolidator',
    for: 'University of Houston - Software Design',
    technologies: [
      TECH.LANGUAGES.DART,
      TECH.DATABASES.NO_SQL.FIRESTORE,
    ],
    details: 'A fuel company\'s customer portal that calculates a personalized fuel price for a potential customer based off a number of factors include location, previous purchases, bulk ordering, etc.',
    github: 'https://github.com/GeorgeNav/Fuel-Consolidator',
    website: 'https://fuelconsolidator.com',
    ...FUEL_CONSOLIDATOR_IMAGES,
  },
  would_you_rather: {
    title: 'Would You Rather',
    for: 'Udacity - React Nanodegree',
    technologies: [
      TECH.LANGUAGES.JAVASCRIPT,
      TECH.LIBRARIES.JAVASCRIPT.REACT,
      TECH.LIBRARIES.JAVASCRIPT.REACT_REDUX,
      TECH.LIBRARIES.JAVASCRIPT.REACT_BOOTSTRAP,
    ],
    details: 'A frontend application where the user is able to view, vote, and create \'would you rather\' style questions on predefined accounts.',
    github: 'https://github.com/GeorgeNav/WouldYouRather-ReactND',
    website: 'https://loving-varahamihira-f2987e.netlify.app',
    ...WOULD_YOU_RATHER_IMAGES,
  },
}

export {
  PROJECT_TYPES,
  PROJECTS,
}
