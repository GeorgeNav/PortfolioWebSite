import firebase from 'firebase/app'
import 'firebase/storage'
import fbConfig from './fb_config.json'

const fbApp = firebase.initializeApp(fbConfig)

const fbStorage = firebase.storage(fbApp)

export {
  fbStorage,
}
