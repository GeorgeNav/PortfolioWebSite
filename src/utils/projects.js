import ANNOTATION_TOOL_RESOURCES from 'assets/images/projects/annotation_tool'
import FLOW_VISUALIZATION_SYSTEM_RESOURCES from 'assets/images/projects/flow_visualization_system'
import INTERACTIVE_GRAPHICS_RESOURCES from 'assets/images/projects/interative_graphics'
import STUDY_BASH_RESOURCES from 'assets/images/projects/study_bash'
import FUEL_CONSOLIDATOR_RESOURCES from 'assets/images/projects/fuel_consolidator'
import WOULD_YOU_RATHER_RESOURCES from 'assets/images/projects/would_you_rather'
import PORTFOLIO_RESOURCES from 'assets/images/projects/portfolio'
import TECH from 'utils/technologies'

const CATEGORY_NAMES = {
  RESEARCH: 'Research',
  ACADEMIC: 'Academic',
  PERSONAL: 'Personal',
}

const CATEGORIES = [
  {
    name: 'Research',
    projects: [
      {
        title: 'Flow Visualization System',
        for: 'University of Houston - Dr. Chen',
        technologies: [
          TECH.LANGUAGES.JAVASCRIPT,
          TECH.LIBRARIES.JAVASCRIPT.REACT,
          TECH.LIBRARIES.JAVASCRIPT.THREE,
          TECH.LIBRARIES.JAVASCRIPT.REACT_REDUX,
          TECH.LIBRARIES.JAVASCRIPT.REACT_BOOTSTRAP,
          TECH.LIBRARIES.JAVASCRIPT.NODE_ADDONS,
          TECH.LIBRARIES.JAVASCRIPT.EXPRESS,
          TECH.LIBRARIES.JAVASCRIPT.SOCKET_IO,
        ],
        details: 'A full stack application that visualizes datasets using a powerful node backend that calculates vectors and other useful data',
        github: 'https://github.com/duongnb09/FlowVis20',
        website: 'http://davim.cs.uh.edu:3000/',
        ...FLOW_VISUALIZATION_SYSTEM_RESOURCES,
      },
      {
        title: 'Annotation Tool',
        for: 'University of Houston - Dr. Kakadiaris',
        technologies: [
          TECH.LANGUAGES.JAVASCRIPT,
          TECH.LIBRARIES.JAVASCRIPT.PUG,
          TECH.LIBRARIES.JAVASCRIPT.EXPRESS,
          TECH.DATABASES.SQL.MYSQL,
        ],
        details: 'A full stack application that enables video classification and data science for various datasets',
        github: 'https://git.cbl.e.uh.edu/AnnotationTool/video-annotation-tool/',
        website: 'https://ideation.cbl.uh.edu/',
        ...ANNOTATION_TOOL_RESOURCES,
      },
    ],
  },
  {
    name: 'Academic',
    projects: [
      {
        title: 'Fuel Consolidator',
        for: 'University of Houston - Software Design',
        technologies: [
          TECH.LANGUAGES.DART,
          TECH.LIBRARIES.DART.FLUTTER,
          TECH.DATABASES.NO_SQL.FIRESTORE,
        ],
        details: 'A fuel company\'s customer portal that calculates a personalized fuel price for potential customers based off a number of factors including location, previous purchases, bulk ordering, etc',
        github: 'https://github.com/GeorgeNav/Fuel-Consolidator',
        website: 'https://fuelconsolidator.com',
        ...FUEL_CONSOLIDATOR_RESOURCES,
      },
      {
        title: 'Interactive Graphics',
        for: 'University of Houston - Interactive Graphics',
        technologies: [
          TECH.LANGUAGES.CPP,
          TECH.LIBRARIES.CPP.OPENGL,
        ],
        details: 'Projects that tested my c++ and opengl skills using graphics concepts such as shading, lighting, and many more learned throughout the course',
        github: 'https://github.com/GeorgeNav/COSC4370',
        ...INTERACTIVE_GRAPHICS_RESOURCES,
      },
      {
        title: 'StudyBash',
        for: 'University of Houston - Ubiquitous Computing',
        technologies: [
          TECH.LANGUAGES.SWIFT,
          TECH.DATABASES.NO_SQL.FIRESTORE,
          TECH.LIBRARIES.SWIFT.CHARTS,
          TECH.LIBRARIES.SWIFT.FS_CALENDAR,
        ],
        details: 'An iOS application that makes being productive more enjoyable',
        github: 'https://github.com/GeorgeNav/StudyBash',
        ...STUDY_BASH_RESOURCES,
      },
      {
        title: 'Would You Rather',
        for: 'Udacity - React Nanodegree',
        technologies: [
          TECH.LANGUAGES.JAVASCRIPT,
          TECH.LIBRARIES.JAVASCRIPT.REACT,
          TECH.LIBRARIES.JAVASCRIPT.REACT_REDUX,
          TECH.LIBRARIES.JAVASCRIPT.REACT_BOOTSTRAP,
        ],
        details: 'A frontend application where the user is able to view, vote, and create \'would you rather\' style questions with predefined user accounts',
        github: 'https://github.com/GeorgeNav/WouldYouRather-ReactND',
        website: 'https://loving-varahamihira-f2987e.netlify.app',
        ...WOULD_YOU_RATHER_RESOURCES,
      },
    ],
  },
  {
    name: 'Personal',
    projects: [
      {
        title: 'Portfolio',
        for: 'Personal',
        technologies: [
          TECH.LANGUAGES.JAVASCRIPT,
          TECH.LIBRARIES.JAVASCRIPT.REACT,
          TECH.LIBRARIES.JAVASCRIPT.REACT_MATERIAL_UI,
          TECH.STORAGE.FIRESTORE,
        ],
        details: 'A fullstack application that showcases my accomplishments and credentials. You are viewing this now!',
        github: 'https://github.com/GeorgeNav/PortfolioWebSite',
        website: 'https://georgenav.com',
        ...PORTFOLIO_RESOURCES,
      },
    ],
  },
]

export {
  CATEGORY_NAMES,
  CATEGORIES,
}
