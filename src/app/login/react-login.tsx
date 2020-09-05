import * as ReactDOM from "react-dom";
import * as React from "react";
import axios from "axios";
import { SystemConstants } from "../core/common/system.constants";
import HttpReactProviderService from "../core/services/react/react-http-service";
import ReactAuthenticationService from "../core/services/react/react-authentication-service";
//import { NotificationContainer } from "react-notifications";

class ReactInputLogin extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.logIn = this.logIn.bind(this);
    this.state = { userName: "", password: "" };
  }

  handleInput = (pointer) => (event) => {
    this.setState({ [pointer]: event.target.value });
  };

  async logIn(event) {
    ReactAuthenticationService.logIn(this.state.userName, this.state.password);
    event.preventDefault();
    return false;
  }
  render() {
    return (
      <>
        <div>
          <input
            type="text"
            className="form-control"
            defaultValue={this.state.userName}
            onChange={this.handleInput("userName")}
            required
          />
          <div className="help-block">Yêu cầu tên đăng nhập</div>
        </div>
        <div>
          <input
            type="password"
            className="form-control"
            defaultValue={this.state.password}
            onChange={this.handleInput("password")}
            required
          />
          <div className="help-block">Yêu cầu mật khẩu</div>
        </div>

        <div>
          <button
            className="btn btn-default"
            onClick={this.logIn}
            type="submit"
          >
            Đăng nhập
          </button>

          <a className="reset_pass" href="\portal">
            Quên mật khẩu
          </a>
          {this.props.children}
        </div>
      </>
    );
  }
}

class ReactFormLogin extends React.Component<any, any> {
  render() {
    return (
      <>
        {/* <NotificationContainer /> */}
        <form name="form">
          <div>{this.props.children}</div>

          <div className="clearfix"></div>

          <div className="separator">
            <div className="clearfix"></div>
            <br />
            <div>
              <h1>
                <i className="fa fa-paw"></i> Kamikaze VTPRO!
              </h1>
              <p>©2016 All Rights Reserved. VTPRO!</p>
            </div>
          </div>
        </form>
      </>
    );
  }
}
export class ReactLoginApplication {
  static Initialize(containerId: string) {
    ReactDOM.render(
      <ReactFormLogin>
        <ReactInputLogin></ReactInputLogin>
      </ReactFormLogin>,
      document.getElementById(containerId)
    );
  }
}
