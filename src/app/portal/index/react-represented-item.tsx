import * as ReactDOM from "react-dom";
import * as React from "react";
import { RouterConstants } from "../../core/common/router.constants";

class ReactRepresentedItem extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.details,
    };
  }

  render() {
    return (
      <>
        <div className="img-video-index data-content-wrapper">
          <a href={RouterConstants.DATA_ROUTER + this.state.details.id}>
            <img src={this.state.details.image} />
          </a>
        </div>
        <h4>{this.state.details.name}</h4>
        <p>{this.state.details.description}</p>
      </>
    );
  }
}
export class ReactRepresentedItemApplication {
  static Initialize(containerId: string, detail$: any) {
    ReactDOM.render(
      <ReactRepresentedItem details={detail$}></ReactRepresentedItem>,
      document.getElementById(containerId)
    );
  }
}
