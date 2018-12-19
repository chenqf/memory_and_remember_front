// @flow Created by 陈其丰 on 2018/10/19.
import React, {PureComponent, Component} from 'react';
import {WingBlank, WhiteSpace, Card} from 'antd-mobile'
import withHeader from '@hot/withHeader';
import WordList from '@component/wordList';
import {actions} from './index';
import * as R from 'ramda';
import {connect} from 'react-redux'
import {getItems} from './selectors'

const mapStateToProps = (state, ownProps) => {
    return R.applySpec({
        pageCount: () => 10,
        page: () => 1,
        loading: R.path(['allWord', 'loadingWord']),
        error: R.path(['allWord', 'loadWordError']),
        count: R.path(['entities', 'word', 'allNum']),
        items: getItems
    })(state);
};

const mapDispatchToProps = dispatch => ({
    queryAll: (params) => dispatch(actions.fetchWordList(params)),
    emptyIds: () => dispatch(actions.empty())
});
@connect(
    mapStateToProps,
    mapDispatchToProps
)
@withHeader({title: '单词本', back: true})
export default class WordBook extends Component {
    constructor(props) {
        super(props);
        let {page, error} = this.props;
        this.state = {
            page,
            error
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let {error: propsError} = nextProps;
        let {error: stateError, page} = prevState;
        if (propsError) {
            if (stateError) {
                return prevState
            } else {
                return {
                    ...prevState,
                    error: propsError,
                    page: page - 1
                }
            }
        } else {
            return {
                ...prevState,
                error: propsError,
                page: page
            }
        }
    }

    getData = (page = 1) => {
        let {pageCount, queryAll} = this.props;
        this.setState({page});
        let startNum = (page - 1) * pageCount;
        queryAll({startNum, pageCount});
        window.scrollTo(0, 0);
    };

    componentDidMount() {
        this.getData(1);
    }

    componentWillUnmount() {
        this.props.emptyIds();
    }

    render() {
        let {pageCount, loading, count, items} = this.props;
        let {page} = this.state;
        let props = {page, pageCount, over: !loading, items, count, pagination: true, onChange: this.getData};
        return (
            <React.Fragment>
                <WhiteSpace/>
                <WhiteSpace/>
                <WingBlank size="lg" className="word-test">
                    <WordList {...props} />
                </WingBlank>
            </React.Fragment>
        )
    }
}