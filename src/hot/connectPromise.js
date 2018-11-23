import React, { Component } from 'react';

/**
 * 用于复用简单组件（下拉框等）
 * 传入异步调用方法
 * 并指定数据获取后，数据转化
 */

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
const DEFAULT_OPTIONS = {
    mapLoadingToProps: loading => ({ loading }),
    mapDataToProps: data => ({ data }),
    mapErrorToProps: error => ({ error }),
};
export function connectPromise(options) {
    return (Comp) => {
        const finalOptions = {
            ...DEFAULT_OPTIONS,
            ...options,
        };
        const {
            promiseLoader,
            mapLoadingToProps,
            mapDataToProps,
            mapErrorToProps,
        } = finalOptions;

        class ConnectPromise extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    loading: true,
                    data: undefined,
                    error: undefined,
                };
            }
            static displayName = `ConnectPromise(${getDisplayName(Comp)})`;
            componentDidMount() {
                promiseLoader(this.props)
                .then(
                    data => this.setState({ data, loading: false }),
                    error => this.setState({ error, loading: false }),
                );
            }
            render() {
                const { data, error, loading } = this.state;

                const dataProps = data ? mapDataToProps(data) : undefined;
                const errorProps = error ? mapErrorToProps(error) : undefined;

                return (
                    <Comp
                        {...mapLoadingToProps(loading)}
                        {...dataProps}
                        {...errorProps}
                        {...this.props}
                    />
                );
            }
        }
        return ConnectPromise;
    };
}