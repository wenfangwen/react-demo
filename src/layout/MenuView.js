import { Menu, Icon } from 'antd';
import React from 'react';
import routers from '../routes/index';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setTitle } from '../store/actions';
const SubMenu = Menu.SubMenu;
class Sider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openKeys: [this.props.location.pathname.split('/')[1]]
        };
        console.log();
    }
    // submenu keys of first level
    defaultOpenKeys = [this.props.location.pathname.split('/')[1]];
    defaultSelectedKeys = [this.props.location.pathname];
    onOpenChange = openKeys => {
        console.log(openKeys);
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : []
        });
        console.log(this.state.openKeys);
    };

    menuItemClick = ({ item, key, selectedKeys }) => {
        this.props.history.push(key);
        console.log(this.props);
        this.props.setTitle(item.props.title);

        // this.props.dispatch({
        //     type: 'setTitle',
        //     payload: { title: item.props.title }
        // });
    };

    render() {
        return (
            <Menu
                mode="inline"
                theme="dark"
                openKeys={this.state.openKeys}
                onClick={this.menuItemClick}
                defaultSelectedKeys={this.defaultSelectedKeys}
                defaultOpenKeys={this.defaultOpenKeys}
                onOpenChange={this.onOpenChange}
            >
                {routers.map(e => {
                    return (
                        <SubMenu
                            key={e.key || e.title}
                            title={
                                <span>
                                    <Icon type={e.icon} />
                                    <span>{e.title}</span>
                                </span>
                            }
                        >
                            {e.children.map(child => {
                                return (
                                    <Menu.Item title={child.title} key={child.path}>
                                        {child.title}
                                    </Menu.Item>
                                );
                            })}
                        </SubMenu>
                    );
                })}
            </Menu>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setTitle }, dispatch);
}

export default connect(
    null,
    mapDispatchToProps
)(withRouter(Sider));
