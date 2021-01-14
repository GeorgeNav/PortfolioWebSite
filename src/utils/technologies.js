import javascriptIcon from 'assets/images/icons/languages/javascript.svg'
import dartIcon from 'assets/images/icons/languages/dart.svg'
import cppIcon from 'assets/images/icons/languages/c++.svg'
import swiftIcon from 'assets/images/icons/languages/swift.png'
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
import openglIcon from 'assets/images/icons/libraries/opengl.svg'
import fsCalendarIcon from 'assets/images/icons/libraries/fs_calendar.png'
import chartsIcon from 'assets/images/icons/libraries/charts.png'
import threeLogo from 'assets/images/icons/libraries/three_js.png'
import nodeAddonsLogo from 'assets/images/icons/libraries/node_addons.png'
import expressLogo from 'assets/images/icons/libraries/express.png'
import socketIoLogo from 'assets/images/icons/libraries/socket_io.svg'
import pugLogo from 'assets/images/icons/libraries/pug.png'

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
    CPP: {
      KEY: 'C++',
      LINK: 'https://en.wikipedia.org/wiki/C%2B%2B',
      LOGO: cppIcon,
    },
    SWIFT: {
      KEY: 'Swift',
      LINK: 'https://developer.apple.com/swift/',
      LOGO: swiftIcon,
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
      THREE: {
        KEY: 'ThreeJS via react-three-fiber',
        LINK: 'https://github.com/pmndrs/react-three-fiber',
        LOGO: threeLogo,
      },
      NODE_ADDONS: {
        KEY: 'node-addon-api via node-gyp',
        LINK: 'https://github.com/nodejs/node-gyp',
        LOGO: nodeAddonsLogo,
      },
      EXPRESS: {
        KEY: 'ExpressJS',
        LINK: 'https://expressjs.com/',
        LOGO: expressLogo,
      },
      SOCKET_IO: {
        KEY: 'Socket.io',
        LINK: 'https://socket.io/',
        LOGO: socketIoLogo,
      },
      PUG: {
        KEY: 'Pug',
        LINK: 'https://pugjs.org/',
        LOGO: pugLogo,
      },
    },
    DART: {
      FLUTTER: {
        KEY: 'Flutter',
        LINK: 'https://flutter.dev/',
        LOGO: flutterIcon,
      }
    },
    CPP: {
      OPENGL: {
        KEY: 'OpenGL',
        LINK: 'https://www.opengl.org/',
        LOGO: openglIcon,
      },
    },
    SWIFT: {
      FS_CALENDAR: {
        KEY: 'FS Calendar',
        LINK: 'https://cocoapods.org/pods/FSCalendar',
        LOGO: fsCalendarIcon,
      },
      CHARTS: {
        KEY: 'Charts',
        LINK: 'https://cocoapods.org/pods/charts',
        LOGO: chartsIcon,
      },
    },
  },
}

export default TECH