import * as React from 'react';
import { BehaviorSubject } from 'rxjs';
import { IHero } from '../utilities/interfaces/IHero';
import SimpleImageSlider from "react-simple-image-slider";



interface IReactBidirectionalHero {
    heroes$: BehaviorSubject<IHero[]>;
}

class ReactHero extends React.Component<IReactBidirectionalHero, any> {

    constructor(props) {
        super(props);

        this.state = {
            heroes: []
        };

        this.addAge = this.addAge.bind(this);
        this.addHero = this.addHero.bind(this);
    }

    componentDidMount(): void {
        // this.props.heroes$.subscribe((res: IHero[]) => {
        //   this.setState({heroes: res});
        // });
    }

    addAge(i: number) {
        const temp = this.state.heroes;
        temp[i].age = temp[i].age + 1;

        this.props.heroes$.next(temp);
    }

    addHero() {
        const temp = this.state.heroes;
        temp.push({ name: 'Atena', age: 31 });

        this.props.heroes$.next(temp);
    }

    render() {

        return (
            <div className={'row'}>
                <div className="col-md-6">
                    <p className="txt21">Hòa Bình là nhà thầu chính thi công kết cấu phần thô giai đoạn 1 của Quảng trường Mặt trời, nhà hàng Sea food và đường Carnival bao gồm 2 tầng hầm, 7 tầng cao.</p>
                </div>
                <div className="col-md-6">

                    <div id="reactSlideCarousel" className="carousel slide slide-about" data-ride="carousel">

                        <ol className="carousel-indicators">
                            <li data-target="#reactSlideCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#reactSlideCarousel" data-slide-to="1" className=""></li>
                            <li data-target="#reactSlideCarousel" data-slide-to="2" className=""></li>
                            <li data-target="#reactSlideCarousel" data-slide-to="3" className=""></li>
                        </ol>
                        <div className="carousel-inner data-content-wrapper" role="listbox">
                            <div className="item active">
                                <div className="container">
                                    <div className="carousel-caption-about">
                                        <h3 className="move-up">Big
                                                    <span>Save</span>
                                        </h3>
                                        <div className="sitemessage">
                                            <p>Get flat
											<span>10%</span> Cashback</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item item2">
                                <div className="container">
                                    <div className="carousel-caption-about">
                                        <h3 className="move-down">Healthy
										<span>Saving</span>
                                        </h3>
                                        <div className="sitemessage">
                                            <p>Get Upto
											<span>30%</span> Off</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item item3">
                                <div className="container">
                                    <div className="carousel-caption-about">
                                        <h3 className="move-up">Big
										<span>Deal</span>
                                        </h3>
                                        <div className="sitemessage">
                                            <p>Get Best Offer Upto
											<span>20%</span>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="item item4">
                                <div className="container">
                                    <div className="carousel-caption-about">
                                        <h3 className="move-down">Today
										<span>Discount</span>
                                        </h3>
                                        <p>Get Now
										<span>40%</span> Discount</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div >
        );

    }
}

export default ReactHero;
