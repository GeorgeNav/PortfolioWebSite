import React from 'react'
import Particles from 'react-particles-js'
import { useViewportDimensions } from 'hooks'

const particleStyle = {
  display: 'absolute',
  backgroundColor: 'black',
}

const ParticleAnimation = () => {
  const { width, height } = useViewportDimensions()

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
        },
        modes: {
          bubble: {
            distance: 10,
            duration: 1,
            size: 0,
            opacity: 0
          },
          repulse: {
            distance: 100,
            duration: 2
          }
        }
      }
    }}>
  </Particles>
}

export default ParticleAnimation
