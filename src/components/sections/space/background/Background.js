import { useDeviceType } from 'hooks'
import React from 'react'
import Particles from 'react-particles-js'

const style = {
  display: 'absolute',
  backgroundColor: 'black',
}

const ParticleAnimation = () => {
  const deviceType = useDeviceType()
  
  return <Particles
    style={style}
    width='100vw'
    height='100vh'
    params={{
      particles: {
        number: {
          value: deviceType !== 'phone' ? 300 : 150,
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
          speed: 0.5,
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