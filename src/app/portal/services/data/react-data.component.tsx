import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Injector } from '@angular/core';
import { RouterConstants } from '../../../core/common/router.constants';
import { title } from 'process';
import { HTMLComponent } from 'react-typescript-raw-html';


interface IReactApplication {
    injector: Injector;
    passData: any;
    title:any;
    description:any;
}

class ReactData extends React.Component<IReactApplication, any> {
    constructor(props) {
        super(props);
        this.state = {
            passData: this.props.passData,
            title:this.props.title,
            description:this.props.description
        };
    }

    renObjData: Array<any> = this.props.passData.map(function (data, idx) {
        return ([

            <a key={idx} href={RouterConstants.DATA_ROUTER + data.id}>
                <div className="col-md-3">
                    <div className="wrapper-img">
                        <div className="project-img-div">
                            <img src={data.image} />
                        </div>
                        <p className="txt28">{data.name}</p>
                    </div>
                </div>
            </a>
        ]);
    });
    render() {
        return (
            <>

                <div className="promo-tile promo-tile--image-on-right">
                    <div className="promo-tile--product">
                    <figure className="row">
                    {/* <figure className="row display-flex"> */}
                        <div className="col-md-6 col-sm-12 col-xs-12 px-0 banner-shadow">
                        <img
                            className="promo-tile__hero"
                            alt="Grow a Green Thumb"
                            src="./assets/images/tower.jpg"
                        />
                        </div>
                        <figcaption
                        className="promo-tile__hero promo-tile--text col-md-6 col-sm-12 col-xs-12 px-0 banner-shadow"
                        >
                        <h3 className="h3">{this.props.title}</h3>
                        <div className="text">
                            <HTMLComponent rawHTML={this.props.description} />
                        </div>
                        </figcaption>
                    </figure>
                    </div>
                </div>

                <div className="row">
                    {this.renObjData}
                </div>
            </>
        );

    }

}


export class ReactDataApplication {

    static initialize(
        containerId: string,
        injector: Injector,
        passData: any,
        title:any,
        description:any
    ) {
        ReactDOM.render(
            <ReactData injector={injector} passData={passData} title={title} description={description} />,
            document.getElementById(containerId)
        );

    }
}