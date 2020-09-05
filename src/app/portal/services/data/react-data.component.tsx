import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Injector } from '@angular/core';
import { RouterConstants } from '../../../core/common/router.constants';
import { title } from 'process';


interface IReactApplication {
    injector: Injector;
    passData: any;
    title:any;
}

class ReactData extends React.Component<IReactApplication, any> {
    constructor(props) {
        super(props);
        this.state = {
            passData: this.props.passData,
            title:this.props.title
        };
    }

    renObjData: Array<any> = this.props.passData.map(function (data, idx) {
        return ([

            <a key={idx} href={RouterConstants.DATA_ROUTER + data.id}>
                <div className="col-md-4">
                    <div className="project-img-div">
                        <img src={data.image} />
                    </div>
                    <p className="txt28">{data.name}</p>
                </div>
            </a>
        ]);
    });
    render() {
        return (
            <>
                <h3 className="col-md-12 heading-tittle">{this.props.title}</h3>
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
        title:any
    ) {
        ReactDOM.render(
            <ReactData injector={injector} passData={passData} title={title} />,
            document.getElementById(containerId)
        );

    }
}