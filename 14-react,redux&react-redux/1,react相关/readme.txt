1��·�ɣ�
    web�ˣ�react-router-dom( webapp)
    ԭ���ˣ�react-router-native( nativeapp)
2����װ��
    web�ˣ�npm i react-router-dom --save
    ԭ���ˣ�npm i react-router-native 
3������:
    ����·�ɣ�Ƕ��·�ɣ���̬·�ɣ����ʽ·�ɣ��ض���·�ɣ�Switch
    1������·�ɣ�Router�����Route�����Link�����������vue�е�route.js  router-link  router-view
        ʹ�ò��裺
            1��������ļ�(index.js)����·��ģ�飻
            2����Router������ڸ����(App.js)��ߣ�
            3��Route����ͬ����Ҫ������(import { Route,Link } from 'react-router-dom')
            4������Route����Ĺ���(������App.js��) exact������Դ���ƥ��
            5��ʹ��Link�����������  
        ��vue�����ݽ��жԱȣ�Link�����Ϊrouter-link  Route�������Ϊrouter.js�ļ�   
    2��Ƕ��ʽ·�ɣ�Route�����Link�����
        �������ڻ���·��֮�䣬����ʱ������Ƕ�׶��ѣ��÷����޴�ı仯��
    3����̬·�ɣ���·��·������ʱ�����Ų����Ĵ��ݣ����벻ͬ��id����ʾ��ͬ������ 
       ���ã�/idֵ--->/:id  
       ���id�ţ�this.props.match.params.id   
    4�����ʽ·�ɣ����кܶ��ַ�����������һ����history
        ʹ�ò��裺
           1���������ģ�� import {createBrowerHistory} from 'history'
           2������history  let history = createBrowerHistory()
           3��ʹ��history  history.go(-1) history.goback() ����ʾ������һ��   history.push("/xxx") push���ǿ����Ƶ��κεط�
           4��ʹ��push���ڵ����⣺�����Զ���ת����Ҫǿ��ˢ�� createBrowerHistory({forcerefresh:true})
    5���ض���·�ɣ�Redirect�����Switch��������ʹ������ض����
        ʹ�ò��裺
          1���������ģ�飺import {Redirect,Switch} from "react-router-dom"
          2��ʹ�ã�<Switch><Redirect from="/xxx" to="/xxxx"></Redirect></Switch>
����ȫ����������·������ܽ�


