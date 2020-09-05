import axios from "axios";
import { SystemConstants } from "../../common/system.constants";

export default class HttpReactProviderService {
  static get = (uri) => {
    return axios.get(uri, {headers: SystemConstants.HTTP_HEADER_CONFIG});
  };
  static post = (uri, data) => {
    return axios
    .post(uri, data, {headers: SystemConstants.HTTP_HEADER_CONFIG}
    );
  };
  static put = (uri, data) => {
    return axios
    .put(uri, data, {headers: SystemConstants.HTTP_HEADER_CONFIG}
    );
  };
  static delete = (uri, data) => {
    return axios
    .delete(uri, {headers: SystemConstants.HTTP_HEADER_CONFIG}
    );
  };
}
