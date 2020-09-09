import * as React from "react";
import { HTMLComponent } from "react-typescript-raw-html";

interface IReactBidirectionalProduct {
  details$: any;
}

class ReactDetail extends React.Component<IReactBidirectionalProduct, any> {
  constructor(props) {
    super(props);

    this.state = {
      details: this.props.details$,
      splittedImages: "",
    };
  }
  componentWillMount() {
    if (
      this.state.details !== undefined &&
      typeof this.state.details != "undefined"
    ) {
      console.log("componentWillMount is .... ");
    }
    this.setState({
      splittedImages: this.props.details$.moreImages.split(";"),
    });
  }

  render() {
    console.log(
      "splitted = " +
        this.state.splittedImages +
        "length = " +
        this.state.splittedImages.length
    );

    return (
      <>
        <div className="banner-bootom-w3-agileits">
          <div className="container">
            <div className="col-md-5 single-right-left ">
              <div className="grid images_3_of_2">
                <div className="flexslider">
                  <ul className="slides">
                    {this.state.splittedImages.map(function (data, index) {
                      return [
                        <li key={index} data-thumb={data}>
                            <div className="thumb-image">
                                <img
                                src={data}
                                data-imagezoom="true"
                                className="img-responsive"
                                alt=""
                                />
                            </div>
                        </li>
                      ];
                    })}
                    
                  </ul>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
            <div className="col-md-7 single-right-left simpleCart_shelfItem detail-title">
              <h3>{this.state.details.name}</h3>
              <div className="rating1">
                <span className="starRating">
                  <input id="rating5" type="radio" name="rating" value="5" />
                  <label htmlFor="rating5">5</label>
                  <input id="rating4" type="radio" name="rating" value="4" />
                  <label htmlFor="rating4">4</label>
                  <input
                    id="rating3"
                    type="radio"
                    name="rating"
                    value="3"
                    defaultChecked
                  />
                  <label htmlFor="rating3">3</label>
                  <input id="rating2" type="radio" name="rating" value="2" />
                  <label htmlFor="rating2">2</label>
                  <input id="rating1" type="radio" name="rating" value="1" />
                  <label htmlFor="rating1">1</label>
                </span>
              </div>
              <div className="single-infoagile"></div>
              <div className="product-single-w3l">
                <p>
                  <i className="fa fa-hand-o-right" aria-hidden="true"></i>This
                  is a<label>Vegetarian</label> product.
                </p>
                <HTMLComponent rawHTML={this.state.details.description} />
                <p>
                  <i className="fa fa-refresh" aria-hidden="true"></i>All food
                  products are
                  <label>non-returnable.</label>
                </p>
                <div className="message-content">
                     <HTMLComponent rawHTML={this.state.details.content} />
                </div>
                
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>

      </>
    );
  }
}

export default ReactDetail;
