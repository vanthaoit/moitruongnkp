import * as React from "react";
import * as ReactDOM from "react-dom";
import { RouterConstants } from "../../core/common/router.constants";

interface IReactApplication {
  data: any;
}

class ReactRelative extends React.Component<IReactApplication, any> {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
    };
  }

  render() {
    return (
      <div className="featured-section" id="related-projects">
        <div className="container">
          <h3 className="tittle-w3l">
            Liên quan
            <span className="heading-style">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </h3>

          <div className="content-bottom-in">
            <ul id="flexiselDemo">
              {this.state.data.map(function (item, index) {
                return [
                  <li key={index}>
                    <div className="w3l-specilamk">
                      <div className="speioffer-agile">
                        <a href={RouterConstants.DATA_ROUTER + item.id}>
                          <img src={item.image} alt="" />
                        </a>
                      </div>
                      <div className="product-name-w3l">
                        <h4>
                          <a href={RouterConstants.DATA_ROUTER + item.id}>
                            {item.name}
                          </a>
                        </h4>
                        <div className="w3l-pricehkj">
                          <h6></h6>
                        </div>
                      </div>
                    </div>
                  </li>
                ];
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export class ReactRelativeApplication {
  static initialize(containerId: string, data: any) {
    ReactDOM.render(
      <ReactRelative data={data} />,
      document.getElementById(containerId)
    );
    /* get components from their class name: */
    var list = document.getElementById(containerId);
    console.log(list);
  }
}
