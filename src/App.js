import React, { Component, Suspense } from 'react';
import { Layout, Icon } from 'antd';
import MenuView from './layout/MenuView';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';
import PageLoading from '@/components/PageLoading';
const { Header, Content, Sider } = Layout;
// lazy load SettingDrawer
const SettingDrawer = React.lazy(() => import('@/components/SettingDrawer'));

class App extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            documentTitle: 'my react app'
        };
        console.log(this.props);
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };
    setTitle = title => {
        this.setState({
            documentTitle: title
        });
    };
    renderSettingDrawer = () => {
        // Do not render SettingDrawer in production
        // unless it is deployed in preview.pro.ant.design as demo
        return <SettingDrawer />;
    };
    render() {
        return (
            <>
                <DocumentTitle title={this.props.documentTitle}>
                    <Layout>
                        <Sider trigger={null} collapsible collapsed={this.state.collapsed} width="256px">
                            <div className="logo">
                                <a id="logo" href="/index-cn">
                                    <img alt="logo" src={require('./assets/images/KDpgvguMpGfqaHPjicRK.svg')} />
                                </a>
                            </div>
                            <MenuView />
                        </Sider>
                        <Layout>
                            <Header style={{ background: '#fff', padding: 0 }}>
                                <div className="header-index-header">
                                    <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} />
                                </div>
                            </Header>
                            <Content
                                style={{
                                    margin: '24px',
                                    minHeight: 280
                                }}
                            >
                                {this.props.children}
                            </Content>
                        </Layout>
                    </Layout>
                </DocumentTitle>
                <Suspense fallback={<PageLoading />}>{this.renderSettingDrawer()}</Suspense>
            </>
        );
    }
}

const mapStateToProps = state => {
    const { documentTitle } = state.config || {};
    const { title } = state.todos || {};
    const { setting } = state.setting || {};
    return { documentTitle, title, setting };
};

export default connect(mapStateToProps)(App);
