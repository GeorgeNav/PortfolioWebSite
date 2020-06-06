import firebase from 'firebase/app'
import 'firebase/storage'
import fbConfig from 'utils/database/config.json'

const fbApp = firebase.initializeApp(fbConfig)

const fbStorage = firebase.storage(fbApp)

export default fbStorage
