import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import loginpage from './loginpage';
import styles from '../styles/Loginpage.login.css';
import Mystore from '../public/store';
import {Provider} from 'react-redux'
// store.Subscribe(()=>console.log(store.getState()))
function MyApp({ Component, pageProps }) {
  return (
   
    <Provider store={Mystore}>
     <Component {...pageProps}/>
    < loginpage />
    </Provider>
   
 
  )
}

export default MyApp;
