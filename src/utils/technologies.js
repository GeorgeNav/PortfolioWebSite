import javascriptIcon from 'assets/images/icons/languages/javascript.svg'
import dartIcon from 'assets/images/icons/languages/dart.svg'
// import firebaseIcon from 'assets/images/icons/databases/firebase.png'
import firebaseStorageIcon from 'assets/images/icons/storage/firebase_storage.svg'
import firebaseFirestoreIcon from 'assets/images/icons/databases/firebase_firestore.svg'
import microsoftTransactSQLIcon from 'assets/images/icons/databases/microsoft_transact_sql.svg'
import mySQLIcon from 'assets/images/icons/databases/my_sql.svg'
import plSQLIcon from 'assets/images/icons/databases/pl_sql.png'
import nodejsIcon from 'assets/images/icons/api/nodejs.png'
import reactIcon from 'assets/images/icons/libraries/react.png'
import reactBootstrapIcon from 'assets/images/icons/libraries/react_bootstrap.png'
import reactReduxIcon from 'assets/images/icons/libraries/react_redux.png'
import reactMaterialUIIcon from 'assets/images/icons/libraries/react_material_ui.svg'
import flutterIcon from 'assets/images/icons/libraries/flutter.svg'

const TECH = {
  LANGUAGES: {
    JAVASCRIPT: {
      KEY: 'JavaScript',
      LINK: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      LOGO: javascriptIcon,
    },
    DART: {
      KEY: 'Dart',
      LINK: 'https://dart.dev/',
      LOGO: dartIcon,
    },
  },
  STORAGE: {
    FIRESTORE: {
      KEY: 'Firebase Storage',
      LINK: 'https://firebase.google.com/products/storage',
      LOGO: firebaseStorageIcon,
    },
  },
  DATABASES: {
    NO_SQL: {
      FIRESTORE: {
        KEY: 'Firebase Firestore',
        LINK: 'https://firebase.google.com/products/firestore',
        LOGO: firebaseFirestoreIcon,
      },
    },
    SQL: {
      MICROSOFT: {
        KEY: 'Microsoft Transact-SQL',
        LINK: 'https://en.wikipedia.org/wiki/Transact-SQL',
        LOGO: microsoftTransactSQLIcon,
      },
      MYSQL: {
        KEY: 'MySQL',
        LINK: 'https://www.mysql.com/',
        LOGO: mySQLIcon,
      },
      ORACLE: {
        KEY: 'Oracle PL/SQL',
        LINK: 'https://www.oracle.com/database/technologies/appdev/plsql.html',
        LOGO: plSQLIcon,
      },
    },
  },
  APIS: {
    NODJS: {
      KEY: 'Node',
      LINK: 'https://nodejs.org/en/',
      LOGO: nodejsIcon,
    },
  },
  LIBRARIES: {
    JAVASCRIPT: {
      REACT: {
        KEY: 'React',
        LINK: 'https://reactjs.org/',
        LOGO: reactIcon,
      },
      REACT_BOOTSTRAP: {
        KEY: 'React Bootstrap',
        LINK: 'https://react-bootstrap.github.io/',
        LOGO: reactBootstrapIcon,
      },
      REACT_MATERIAL_UI: {
        KEY: 'Material UI',
        LINK: 'https://material-ui.com/',
        LOGO: reactMaterialUIIcon,
      },
      REACT_REDUX: {
        KEY: 'React Redux',
        LINK: 'https://react-redux.js.org/',
        LOGO: reactReduxIcon,
      },
    },
    DART: {
      FLUTTER: {
        KEY: 'Flutter',
        LINK: 'https://flutter.dev/',
        LOGO: flutterIcon,
      }
    },
  },
}

export default TECH