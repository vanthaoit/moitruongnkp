import * as React from "react";
import * as ReactDOM from "react-dom";
import { Injector } from "@angular/core";

interface IReactBidirectionalProduct {
  details: any;
}

function getSplit(item: any) {
  return "Save";
}

class IndicatorSlider extends React.Component<IReactBidirectionalProduct, any> {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.details,
    };
  }
  render() {
    return (
      <>
        <ol className="carousel-indicators">
          {this.state.item.map(function (data, index) {
            return [
              <li
                key={index}
                data-target="#slideCarousel"
                data-slide-to={index}
                className={index === 0 ? "active" : ""}
              ></li>,
            ];
          })}
        </ol>
      </>
    );
  }
}

class ContentSlider extends React.Component<IReactBidirectionalProduct, any> {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.details,
    };
  }
  render() {
    return (
      <>
        <div className="carousel-inner" role="listbox">
          {this.state.item.map(function (data, index) {
            return [
              <div
                key={index}
                className={"item " + (index === 0 ? "active" : "")}
              >
                <div className="carousel-caption-index carousel-caption-slider">
                  <img src={data.image} />
                  <h3 className="move-up">
                    Big
                    <br />
                    <span>{getSplit(1)}</span>
                  </h3>
                </div>
              </div>,
            ];
          })}
        </div>
      </>
    );
  }
}

class ReactSlider extends React.Component<IReactBidirectionalProduct, any> {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.details,
    };
  }
  render() {
    return (
      <>
        <IndicatorSlider details={this.state.details}></IndicatorSlider>

        <ContentSlider details={this.state.details}></ContentSlider>

        <a
          className="left carousel-control"
          href="#slideCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#slideCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </>
    );
  }
}
export class ReactSliderApplication {
  static Initialize(containerId: string, details$: any) {
    ReactDOM.render(
      <ReactSlider details={details$}></ReactSlider>,
      document.getElementById(containerId)
    );
  }
}
