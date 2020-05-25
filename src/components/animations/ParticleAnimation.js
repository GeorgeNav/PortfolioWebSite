import React from 'react'
import Particles from 'react-particles-js'
import { useWindowDimensions } from '../../hooks'

const particleStyle = {
  display: 'absolute',
  backgroundColor: 'black',
}

const ParticleAnimation = () => {
  const { width, height } = useWindowDimensions()

  return <Particles
    style={particleStyle}
    width={width}
    height={height}
    params={{
      particles: {
        number: {
          value: 300,
          density: {
            enable: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            speed: 4,
            size_min: 0.3
          }
        },
        line_linked: {
          enable: false,
        },
        opacity: {
          random: false,
        },
        move: {
          random: false,
          speed: 1,
          straight: true,
          direction: 'right',
          out_mode: 'out'
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: 'bubble'
          },
          onclick: {
            enable: true,
            mode: 'repulse'
          },
          onresize: {
            enable: true,
          },
        },
        modes: {
          bubble: {
            distance: 10,
            duration: 1,
            size: 0,
            opacity: 0
          },
          repulse: {
            distance: 200,
            duration: 4
          }
        }
      }
    }}>
  </Particles>
}

export default ParticleAnimation
