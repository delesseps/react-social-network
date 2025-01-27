import { LanguageType } from 'store/reducers/locale/langugeType'

export const environment = {
  firebase: {
    apiKey: 'AIzaSyA0nFZRYGckmeDBh3O0TmQ6YEfyUMHVRu0',
    authDomain: 'react-social-network-delesseps.firebaseapp.com',
    databaseURL: 'https://react-social-network-delesseps.firebaseio.com',
    projectId: 'react-social-network-delesseps',
    storageBucket: 'react-social-network-delesseps.appspot.com',
    messagingSenderId: '437198044465'
  },
  settings: {
    enabledOAuthLogin: true,
    enabledOffline: true,
    appName: 'Green',
    defaultProfileCover: 'https://firebasestorage.googleapis.com/v0/b/open-social-33d92.appspot.com/o/images%2F751145a1-9488-46fd-a97e-04018665a6d3.JPG?alt=media&token=1a1d5e21-5101-450e-9054-ea4a20e06c57',
    defaultLanguage: LanguageType.English
  },
  theme: {
    primaryColor: '#00b1b3',
    secondaryColor: '#4d545d'
  }
}
