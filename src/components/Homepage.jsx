import React from 'react';
import {observer} from "mobx-react";
import styles from './Homepage.less';
import cx from "classnames";
import {Row, Col, Table} from "antd";
import Space from "utils/Space";
import Status from "components/Status";
import Point from "components/Point";

const columns = [
    {
        title: '设备名称',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: (text) => {
            let color = "rgb(0, 188, 121)";
            switch (text) {
                case "normal": color = "rgb(0, 188, 121)";break;
                case "warning": color = "yellow";break;
                case "alert": color = "red";break;
            }
            return <Status color={color}/>
        }
    }
];

const data = [
    {
        key: 1,
        name: '入口电动门',
        status: 'normal'
    }, {
        key: 2,
        name: '减速器及附件',
        status: 'normal'
    }, {
        key: 3,
        name: '减速机油泵电动机',
        status: 'normal'
    }, {
        key: 4,
        name: '减速机润滑油泵',
        status: 'normal'
    }, {
        key: 5,
        name: '泵本体',
        status: 'normal'
    }, {
        key: 6,
        name: '浆液循环泵ABCDE环境',
        status: 'normal'
    }, {
        key: 7,
        name: '浆液电动机',
        status: 'normal'
    }, {
        key: 8,
        name: '进出口管道',
        status: 'normal'
    }, {
        key: 9,
        name: '进口门电动机构',
        status: 'normal'
    }
];

const columns1 = [
    {
        title: '设备名称',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '报警来源',
        dataIndex: 'from',
        key: 'from',
    }, {
        title: '报警消息',
        dataIndex: 'message',
        key: 'message',
    }, {
        title: '报警级别',
        dataIndex: 'level',
        key: 'level',
    }, {
        title: '首次报警时间',
        dataIndex: 'first',
        key: 'first',
    }, {
        title: '报警次数',
        dataIndex: 'count',
        key: 'count',
    }, {
        title: '最近报警时间',
        dataIndex: 'lasted',
        key: 'lasted',
    }, {
        title: '报警状态',
        dataIndex: 'status',
        key: 'status',
    }, {
        title: '操作',
        dataIndex: 'opera',
        key: 'opera',
    }
];

const data1 = [];

@observer
class Homepage extends React.Component {
    render() {
        return (
            <div className={cx(styles.container, "override-Table")}>
                <div className={styles.block}>
                    <Row gutter={16}>
                        <Col md={24} xl={16}>
                            <div className={styles.imageWrap}>
                                <Point color={"rgb(0, 188, 121)"} text={"减速器及附件"} position={[196, 264]}/>
                                <Point color={"rgb(0, 188, 121)"} text={"泵本体"} position={[360, 290]}/>
                                <Point color={"rgb(0, 188, 121)"} text={"进出口管道"} position={[640, 330]}/>
                            </div>
                        </Col>
                        <Col md={24} xl={8}>
                           <div className={styles.block}>
                               <h3 className={styles.block_t}>设备状态</h3>
                               <Table dataSource={data} columns={columns} bordered={false} pagination={false}/>
                           </div>
                        </Col>
                    </Row>
                </div>
                <Space size={2}/>
                <div className={styles.block}>
                    <h3 className={styles.block_t}>报警通知</h3>
                    <Table dataSource={data1} columns={columns1} bordered={false} pagination={false}/>
                </div>
            </div>
        );
    }
}

export default Homepage;

