import React from 'react';
import ReactDom from 'react-dom';
import history from 'utils/history';
import Homepage from 'components/Homepage';
import './index.less';
import 'utils/override.module.less';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

import {
    Router,
    Route,
    Switch,
} from 'react-router-dom';

ReactDom.render(
    <LocaleProvider locale={zh_CN}>
        <Router history={history} >
            <Switch>
                <Route exact path="/" component={Homepage} />
            </Switch>
        </Router>
    </LocaleProvider>,
    document.getElementById('root')
);