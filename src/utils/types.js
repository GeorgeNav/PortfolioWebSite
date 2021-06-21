import PropTypes from 'prop-types'

export const PROJECT = PropTypes.shape({
  title: PropTypes.string,
  for: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.shape({
    KEY: PropTypes.string,
    LINK: PropTypes.string,
    LOGO: PropTypes.string,
  })),
  details: PropTypes.string,
  github: PropTypes.string,
  website: PropTypes.string,
  logo: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
})

export default {
  PROJECT,
}