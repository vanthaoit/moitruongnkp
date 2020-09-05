import { SystemConstants } from "../../common/system.constants";
import HttpReactProviderService from "./react-http-service";
import {NotificationService} from '../notification.service';
//import {NotificationContainer, NotificationManager} from 'react-notifications';


export default class ReactAuthenticationService {

    constructor() {

    }

    static logIn = (username, password) => {

    let data =
                SystemConstants.HTTP_DATA_CONFIG +
                SystemConstants.HTTP_DATA_CONFIG_USERNAME +
                username +
                SystemConstants.HTTP_DATA_CONFIG_PASSWORD +
                password +
                SystemConstants.HTTP_DATA_CONFIG_SCOPE +
                "super_admin openid profile";
               
    HttpReactProviderService
        .post(SystemConstants.URL_OAUTH_TOKEN, data)
        .then((response) => {
                console.log(response);
                //NotificationManager.success('Welcome', 'Successfully login');

            },(failed)=>{
                failed.response.data.error_description != null ? 
                console.log("failed login = "+failed.response.data.error_description):
                console.log("failed login = "+failed.response.data.error);
                // NotificationManager.error('Error message', 'Click me!', 5000, () => {
                //     alert('callback');
                // })
            })
        .catch((error) => {
                console.log(error);
            });
  };
}
