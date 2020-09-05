import * as React from "react";
import * as ReactDOM from "react-dom";
import { RouterConstants } from 'src/app/core/common/router.constants';
import {menuData} from 'src/app/utilities/data/menu.data';

class ReactChild extends React.Component<any> {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.input.id,
      name: this.props.input.name,
      productCategories: this.props.input.productCategories,
    };
  }
  render() {
    return (
      <>
        <div
          className="panel-heading group-item"
          role="tab"
          id={"heading" + this.props.input.id}
        >
          <h4 className="panel-title asd">
            <a
              className="pa_italic"
              role="button"
              data-toggle="collapse"
              data-parent="#accordion"
              href={"#collapse" + this.props.input.id}
              aria-expanded="true"
            >
              <span
                className="glyphicon glyphicon-forward"
                aria-hidden="true"
              ></span>
              <i
                className="glyphicon glyphicon-triangle-bottom"
                aria-hidden="true"
              ></i>
              {this.props.input.name}
            </a>
          </h4>
        </div>
        <div
          id={"collapse" + this.props.input.id}
          className="panel-collapse collapse in"
          role="tabpanel"
        >
          <div className="panel-body panel_text">
            <ul>
              {this.props.input.productCategories.map(function (data, index) {
                return [
                  <li key={index}>
                    <a href="products.html">{data.name}</a>
                  </li>,
                ];
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

class ReactSidebar extends React.Component<any> {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.details,
    };
  }

  render() {
    return (
      <>
        {this.props.details.map(function (data, index) {
          let objects = {
            id: data.id,
            name: data.name,
            productCategories: data.productCategories,
          };
          return [
            <div key={index} className="member-item">
              {data.productCategories.length != 0 ? (
                <ReactChild input={objects} />
              ) : (
                <div className="panel-heading single-item" role="tab">
                  <h4 className="panel-title asd">
                    <a href={menuData[2].url+"/" + "danh-muc/"+data.alias} className="pa_italic">
                      {data.name}
                    </a>
                  </h4>
                </div>
              )}
            </div>,
          ];
        })}
      </>
    );
  }
}
export class ReactSidebarApplication {
  static Initialize(containerId: string, details$: any) {
    ReactDOM.render(
      <ReactSidebar details={details$}></ReactSidebar>,
      document.getElementById(containerId)
    );
  }
}
