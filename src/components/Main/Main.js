import { Component } from "react";

import classes from './Main.module.css';

class Main extends Component {
    render() {
        return(
            <p className={classes.categor}>{this.props.categoryName}</p>
        )
    }
}

export default Main;