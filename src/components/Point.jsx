import React from "react";
import {observer} from "mobx-react";
import styles from 'components/Point.less';

@observer
export default class Point extends React.Component {
    render() {
        const {color, text, position} = this.props;
        let [left, top] = position;
        return (
            <div className={styles.point} style={{ left, top }}>
                <span className={styles.label}>{text}</span>
                <span className={styles.status} style={{ backgroundColor: color }} />
            </div>
        )
    }
}