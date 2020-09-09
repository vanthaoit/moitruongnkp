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
            <div className="col-md-7 single-right-left simpleCart_shelfItem">
              <h3>Zeeba Premium Basmati Rice - 5 KG</h3>
              <div className="rating1">
                <span className="starRating">
                  <input id="rating5" type="radio" name="rating" value="5" />

                  <input id="rating4" type="radio" name="rating" value="4" />

                  <input
                    id="rating3"
                    type="radio"
                    name="rating"
                    value="3"
                    defaultChecked
                  />

                  <input id="rating2" type="radio" name="rating" value="2" />

                  <input id="rating1" type="radio" name="rating" value="1" />
                </span>
              </div>
              <p>
                <span className="item_price">$950.00</span>
                <del>$1300.00</del>
                <label>Free delivery</label>
              </p>
              <div className="single-infoagile"></div>
              <div className="product-single-w3l">
                <p>
                  <i className="fa fa-hand-o-right" aria-hidden="true"></i>This
                  is a<label>Vegetarian</label> product.
                </p>
                <ul>
                  <li>Best for Biryani and Pulao.</li>
                  <li>
                    After cooking, Zeeba Basmati rice grains attain an extra
                    ordinary length of upto 2.4 cm/~1 inch.
                  </li>
                  <li>
                    Zeeba Basmati rice adheres to the highest food afety
                    standards as your health is paramount to us.
                  </li>
                  <li>
                    Contains only the best and purest grade of basmati rice
                    grain of Export quality.
                  </li>
                </ul>
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
