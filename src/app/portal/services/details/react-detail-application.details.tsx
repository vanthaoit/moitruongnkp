import { Injector } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactDetail from '../../../react/react-detail';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../../../utilities/interfaces/IProduct';

interface IReactDetailApplication {
    injector: Injector;
    details: any;
}

class ReactApp extends React.Component<IReactDetailApplication, any> {
    constructor(props) {
        super(props);
        this.state = {
            details$: this.props.details
        };
    }

    render() {
        return (
            <div className={'renderer'}>
                <h3 className="detail-title"><span>{this.state.details$.name}</span></h3>
                {/* <p className="bg-text">Gia công cơ khí</p> */}
                <br />
                <ReactDetail details$={this.state.details$} />
            </div>
        );
    }
}

export class ReactDetailApplication {

    static initialize(
        containerId: string,
        injector: Injector,
        details$: any,
    ) {
        ReactDOM.render(
            <ReactApp injector={injector} details={details$} />,
            document.getElementById(containerId)
        );
        /* get components from their class name: */
        var list = document.getElementById(containerId);
        console.log(list);

    }
}
