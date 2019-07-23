import React, { PureComponent } from 'react';
import { Drawer, Icon, List, Tooltip, Switch } from 'antd';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { changeSetting } from '@/store/actions';
import { connect } from 'react-redux';
import styles from './index.module.less';
class SettingDrawer extends PureComponent {
    constructor(props) {
        super(props);
        console.log('SettingDrawer');
    }
    state = {
        collapse: false
    };
    changeSetting = (key, value) => {
        console.log(this.props);
        this.props.changeSetting({ key, value });
    };
    togglerContent = () => {
        const { collapse } = this.state;
        this.setState({ collapse: !collapse });
    };
    getLayoutSetting = () => {
        const { fixedHeader } = this.props;
        return [
            {
                title: '固定 Header',
                action: <Switch size="small" checked={!!fixedHeader} onChange={checked => this.changeSetting('fixedHeader', checked)} />
            }
        ];
    };
    renderLayoutSettingItem = item => {
        const action = React.cloneElement(item.action, {
            disabled: item.disabled
        });
        return (
            <Tooltip title={item.disabled ? item.disabledReason : ''} placement="left">
                <List.Item actions={[action]}>
                    <span style={{ opacity: item.disabled ? '0.5' : '' }}>{item.title}</span>
                </List.Item>
            </Tooltip>
        );
    };
    render() {
        const { collapse } = this.state;
        return (
            <div>
                <Drawer
                    visible={collapse}
                    width={300}
                    placement="right"
                    onClose={this.togglerContent}
                    handler={
                        <div className={styles.handle} onClick={this.togglerContent}>
                            <Icon
                                type={collapse ? 'close' : 'setting'}
                                style={{
                                    color: '#fff',
                                    fontSize: 20
                                }}
                            />
                        </div>
                    }
                >
                    <div className={styles.content}>
                        {'' + this.props.fixedHeader}
                        <List split={false} dataSource={this.getLayoutSetting()} renderItem={this.renderLayoutSettingItem} />
                    </div>
                </Drawer>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeSetting }, dispatch);
}
const mapStateToProps = state => {
    const { fixedHeader } = state.setting || {};
    return { fixedHeader };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(SettingDrawer));
