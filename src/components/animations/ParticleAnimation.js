import React from 'react'
import Particles from 'react-particles-js'

const particleStyle = {
  // display: 'absolute',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'black',
}

const ParticleAnimation = () =>
  <Particles
    style={particleStyle}
    params={{
      particles: {
        number: {
          value: 161,
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
          enable: false
        },
        move: {
          random: true,
          speed: 1,
          direction: 'top',
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
            density_auto: true,
          }
        },
        modes: {
          bubble: {
            distance: 250,
            duration: 2,
            size: 0,
            opacity: 0
          },
          repulse: {
            distance: 400,
            duration: 4
          }
        }
      }
    }}>
  </Particles>

export default ParticleAnimation
