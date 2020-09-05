import * as React from 'react';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../utilities/interfaces/IProduct';



interface IReactBidirectionalProduct {
    details$: any;
}

class ReactDetail extends React.Component<IReactBidirectionalProduct, any> {

    constructor(props) {
        super(props);

        this.state = {
            details: this.props.details$,
            splittedImages: ''

        };
    }
    componentWillMount() {
        if (this.state.details !== undefined && typeof this.state.details != "undefined") {
            console.log("componentWillMount is .... ");
        }
        this.setState({ splittedImages: this.props.details$.moreImages.split(";") });
    }

    render() {
        console.log("splitted = " + this.state.splittedImages + "length = " + this.state.splittedImages.length);

        return (
            <div className={'row'}>
                <div className="col-md-6 message-content">
                    <p className="txt21">{this.state.details.content}</p>
                </div>
                <div className="col-md-6">

                    <div id="reactSlideCarousel" className="carousel slide slide-about" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {this.state.splittedImages.map(function (data, index) {
                                return ([
                                    <li key={index} data-target="#reactSlideCarousel" data-slide-to={index} className={(index === 0 ? 'active' : '')}></li>
                                ]);

                            })}
                        </ol>
                        <div className="carousel-inner data-content-wrapper" role="listbox">
                            {
                                this.state.splittedImages.map(function (data, index) {
                                    return ([
                                        <div key={index} className={"item "+ (index===0? 'active':'') }>

                                            <div className="carousel-caption-about carousel-caption-react">
                                                <img src={data} alt="" />
                                                <h3 className="move-up">Big
                                                    <span>Save</span>
                                                </h3>

                                            </div>
                                        </div>
                                    ])
                                })
                            }
                            
                        </div>

                    </div>

                </div>
            </div>
        );

    }
}

export default ReactDetail;
