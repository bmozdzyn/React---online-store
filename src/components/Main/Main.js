import { Component, Fragment } from "react";
import Elements from "./Elements";

import classes from './Main.module.css';

class Main extends Component {
    render() {
        return(
            <Fragment>
                <p className={classes.categoryName}>{this.props.categoryName}</p>

                <div className={classes.elements}>
                    <Elements category={this.props.categoryName}/>
                </div>
            </Fragment>
        )
    }
}

export default Main;