import javascriptIcon from 'assets/images/icons/languages/javascript.svg'
import dartIcon from 'assets/images/icons/languages/dart.svg'
import firebaseIcon from 'assets/images/icons/databases/firebase.png'
import microsoftTransactSQLIcon from 'assets/images/icons/databases/microsoft_transact_sql.svg'
import mySQLIcon from 'assets/images/icons/databases/my_sql.svg'
import plSQLIcon from 'assets/images/icons/databases/pl_sql.png'
import nodejsIcon from 'assets/images/icons/api/nodejs.png'
import reactIcon from 'assets/images/icons/libraries/react.png'
import reactBootstrapIcon from 'assets/images/icons/libraries/react_bootstrap.png'
import reactReduxIcon from 'assets/images/icons/libraries/react_redux.png'

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
  DATABASES: {
    NO_SQL: {
      FIRESTORE: {
        KEY: 'Firestore',
        LINK: 'https://firebase.google.com/products/firestore',
        LOGO: firebaseIcon,
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
      REACT_REDUX: {
        KEY: 'React Redux',
        LINK: 'https://react-redux.js.org/',
        LOGO: reactReduxIcon,
      },
    },
  },
}

export default TECH