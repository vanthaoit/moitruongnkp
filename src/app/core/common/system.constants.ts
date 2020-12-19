export class BaseSystemConstants{
    public static URL_ENDPOINT = "https://api.moitruongnkp.com";
    //public static URL_ENDPOINT = "http://localhost:3500";
    public static URL_TOKEN = "/connect/token";
    public static URL_USER_INFO = "/connect/userinfo";

    public static HEADER_CONTENT_TYPE_URLENDCODED = "application/x-www-form-urlencoded";
    public static HEADER_CONTENT_TYPE_JSON = "application/json";
    
    public static CURRENT_USER = "CURRENT_USER";
    public static AUTHORIZATION = "Authorization";
    public static BEARER = "Bearer";
    
}
export class SystemConstants {
    //hosts
    public static URL_LOCAL_HOST_API_ENDPOINT = BaseSystemConstants.URL_ENDPOINT + "/api/";

    public static URL_OAUTH_TOKEN = BaseSystemConstants.URL_ENDPOINT + BaseSystemConstants.URL_TOKEN;
    public static URL_USER_INFO = BaseSystemConstants.URL_ENDPOINT + BaseSystemConstants.URL_USER_INFO;

    public static HTTP_HEADER_CONFIG = {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers":
        "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    };

    public static HTTP_DATA_CONFIG_USERNAME = "&username=";
    public static HTTP_DATA_CONFIG_PASSWORD = "&password=";
    public static HTTP_DATA_CONFIG_SCOPE = "&scope=";
    public static HTTP_DATA_CONFIG = "client_id=client&client_secret=secret&grant_type=password";
    //public static HTTP_TOKEN_DATA_CONFIG = "client_id=client&client_secret=secret&grant_type=password&username=vietnamthaotranvan@gmail.com&password=Vietnamthaotranvan123&scope=super_admin openid profile";
  

}
