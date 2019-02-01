import React from "react";
import {observer} from "mobx-react";

@observer
export default class Status extends React.Component {
    render() {
        const {color} = this.props;
        return (
            <div style={{ width:20, height:20, borderRadius:"50%", backgroundColor: color, cursor: "pointer"}}> </div>
        )
    }
}