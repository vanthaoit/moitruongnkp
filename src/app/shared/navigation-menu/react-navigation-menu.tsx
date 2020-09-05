import { Injector } from "@angular/core";
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IReactDetailApplication {
    injector: Injector;
    input: any;
}
class ReactApp extends React.Component<IReactDetailApplication, any> {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.input
        };
    }

    render() {
        return (
            <>
                <ul className="nav navbar-nav">
                    <li><a href="\portal\index" data-title="home">Trang chủ</a></li>
                    <li><a href="\portal\about" data-title="about">Giới thiệu</a></li>

                    <li><a href="\portal\recruitment" data-title="recruitment">Tuyển dụng</a></li >
                    <li><a href="\portal\contact" data-title="contact">Liên hệ</a></li >
                </ul >
            </>
        );
    }
}
export class ReactNavigationMenu {
    static initialize(
        containerId: string,
        injector: Injector,
        input$: any,
    ) {
        ReactDOM.render(
            <ReactApp injector={injector} input={input$} />,
            document.getElementById(containerId)
        );
        /* get components from their class name: */
        var list = document.getElementById(containerId);
        console.log(list);

    }
}