import React from 'react';
import { Row, Col, Card, Icon } from 'antd';
import PageHeader from 'ant-design-pro/lib/PageHeader';
import { Radar, ChartCard } from 'ant-design-pro/lib/Charts';
import './workplace.css';
const breadcrumbList = [
    {
        title: '首页',
        href: '/'
    },
    {
        title: 'Dashboard',
        href: '/'
    },
    {
        title: '工作台'
    }
];
const gridStyle = {
    width: '33.33%'
};
const radarOriginData = [
    {
        name: '个人',
        ref: 10,
        koubei: 8,
        output: 4,
        contribute: 5,
        hot: 7
    },
    {
        name: '团队',
        ref: 3,
        koubei: 9,
        output: 6,
        contribute: 3,
        hot: 1
    },
    {
        name: '部门',
        ref: 4,
        koubei: 1,
        output: 6,
        contribute: 5,
        hot: 7
    }
];
const radarData = [];
const radarTitleMap = {
    ref: '引用',
    koubei: '口碑',
    output: '产量',
    contribute: '贡献',
    hot: '热度'
};
radarOriginData.forEach(item => {
    Object.keys(item).forEach(key => {
        if (key !== 'name') {
            radarData.push({
                name: item.name,
                label: radarTitleMap[key],
                value: item[key]
            });
        }
    });
});
class Workplace extends React.Component {
    render() {
        return (
            <>
                <div style={{ margin: '-24px -24px 0px' }}>
                    <PageHeader title="页面标题" breadcrumbList={breadcrumbList} />
                    <div style={{ margin: '24px 24px 0' }}>
                        <Row gutter={24}>
                            <Col xs={24} sm={24} md={24} lg={16}>
                                <Card title="进行中的项目" extra={<a href="#">全部项目</a>} style={{ marginBottom: '24px' }}>
                                    <Card.Grid style={gridStyle}>
                                        <Card bordered={false}>
                                            <div class="ant-card-meta">
                                                <div class="ant-card-meta-detail">
                                                    <div class="ant-card-meta-title">
                                                        <div class="antd-pro-pages-dashboard-workplace-cardTitle">
                                                            <span class="ant-avatar ant-avatar-sm ant-avatar-circle ant-avatar-image">
                                                                <img src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" />
                                                            </span>
                                                            <a href="/">Alipay</a>
                                                        </div>
                                                    </div>
                                                    <div class="ant-card-meta-description">那是一种内在的东西，他们到达不了，也无法触及的</div>
                                                </div>
                                            </div>
                                            <div class="antd-pro-pages-dashboard-workplace-projectItemContent">
                                                <a href="/">科学搬砖组</a>
                                                <span class="antd-pro-pages-dashboard-workplace-datetime" title="2019-05-05T01:55:42.627Z">
                                                    1 小时前
                                                </span>
                                            </div>
                                        </Card>
                                    </Card.Grid>
                                    <Card.Grid style={gridStyle}>
                                        <Card bordered={false}>
                                            <div class="ant-card-meta">
                                                <div class="ant-card-meta-detail">
                                                    <div class="ant-card-meta-title">
                                                        <div class="antd-pro-pages-dashboard-workplace-cardTitle">
                                                            <span class="ant-avatar ant-avatar-sm ant-avatar-circle ant-avatar-image">
                                                                <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" />
                                                            </span>
                                                            <a href="/">Angular</a>
                                                        </div>
                                                    </div>
                                                    <div class="ant-card-meta-description">希望是一个好东西，也许是最好的，好东西是不会消亡的</div>
                                                </div>
                                            </div>
                                            <div class="antd-pro-pages-dashboard-workplace-projectItemContent">
                                                <a href="/">全组都是吴彦祖</a>
                                                <span class="antd-pro-pages-dashboard-workplace-datetime" title="2017-07-24T00:00:00.000Z">
                                                    2 年前
                                                </span>
                                            </div>
                                        </Card>
                                    </Card.Grid>
                                    <Card.Grid style={gridStyle}>
                                        <Card bordered={false}>
                                            <div class="ant-card-meta">
                                                <div class="ant-card-meta-detail">
                                                    <div class="ant-card-meta-title">
                                                        <div class="antd-pro-pages-dashboard-workplace-cardTitle">
                                                            <span class="ant-avatar ant-avatar-sm ant-avatar-circle ant-avatar-image">
                                                                <img src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" />
                                                            </span>
                                                            <a href="/">Angular</a>
                                                        </div>
                                                    </div>
                                                    <div class="ant-card-meta-description">希望是一个好东西，也许是最好的，好东西是不会消亡的</div>
                                                </div>
                                            </div>
                                            <div class="antd-pro-pages-dashboard-workplace-projectItemContent">
                                                <a href="/">全组都是吴彦祖</a>
                                                <span class="antd-pro-pages-dashboard-workplace-datetime" title="2017-07-24T00:00:00.000Z">
                                                    2 年前
                                                </span>
                                            </div>
                                        </Card>
                                    </Card.Grid>
                                    <Card.Grid style={gridStyle}>
                                        <Card bordered={false}>
                                            <div class="ant-card-meta">
                                                <div class="ant-card-meta-detail">
                                                    <div class="ant-card-meta-title">
                                                        <div class="antd-pro-pages-dashboard-workplace-cardTitle">
                                                            <span class="ant-avatar ant-avatar-sm ant-avatar-circle ant-avatar-image">
                                                                <img src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" />
                                                            </span>
                                                            <a href="/">Angular</a>
                                                        </div>
                                                    </div>
                                                    <div class="ant-card-meta-description">希望是一个好东西，也许是最好的，好东西是不会消亡的</div>
                                                </div>
                                            </div>
                                            <div class="antd-pro-pages-dashboard-workplace-projectItemContent">
                                                <a href="/">全组都是吴彦祖</a>
                                                <span class="antd-pro-pages-dashboard-workplace-datetime" title="2017-07-24T00:00:00.000Z">
                                                    2 年前
                                                </span>
                                            </div>
                                        </Card>
                                    </Card.Grid>
                                    <Card.Grid style={gridStyle}>
                                        <Card bordered={false}>
                                            <div class="ant-card-meta">
                                                <div class="ant-card-meta-detail">
                                                    <div class="ant-card-meta-title">
                                                        <div class="antd-pro-pages-dashboard-workplace-cardTitle">
                                                            <span class="ant-avatar ant-avatar-sm ant-avatar-circle ant-avatar-image">
                                                                <img src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" />
                                                            </span>
                                                            <a href="/">Angular</a>
                                                        </div>
                                                    </div>
                                                    <div class="ant-card-meta-description">希望是一个好东西，也许是最好的，好东西是不会消亡的</div>
                                                </div>
                                            </div>
                                            <div class="antd-pro-pages-dashboard-workplace-projectItemContent">
                                                <a href="/">全组都是吴彦祖</a>
                                                <span class="antd-pro-pages-dashboard-workplace-datetime" title="2017-07-24T00:00:00.000Z">
                                                    2 年前
                                                </span>
                                            </div>
                                        </Card>
                                    </Card.Grid>
                                    <Card.Grid style={gridStyle}>
                                        <Card bordered={false}>
                                            <div class="ant-card-meta">
                                                <div class="ant-card-meta-detail">
                                                    <div class="ant-card-meta-title">
                                                        <div class="antd-pro-pages-dashboard-workplace-cardTitle">
                                                            <span class="ant-avatar ant-avatar-sm ant-avatar-circle ant-avatar-image">
                                                                <img src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" />
                                                            </span>
                                                            <a href="/">Angular</a>
                                                        </div>
                                                    </div>
                                                    <div class="ant-card-meta-description">希望是一个好东西，也许是最好的，好东西是不会消亡的</div>
                                                </div>
                                            </div>
                                            <div class="antd-pro-pages-dashboard-workplace-projectItemContent">
                                                <a href="/">全组都是吴彦祖</a>
                                                <span class="antd-pro-pages-dashboard-workplace-datetime" title="2017-07-24T00:00:00.000Z">
                                                    2 年前
                                                </span>
                                            </div>
                                        </Card>
                                    </Card.Grid>
                                </Card>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={8}>
                                <Card title="快速开始 / 便捷导航" bodyStyle={{ padding: 0 }} style={{ marginBottom: '24px' }}>
                                    <div class="antd-pro-components-editable-link-group-index-linkGroup">
                                        <a href="/">操作一</a>
                                        <a href="/">操作二</a>
                                        <a href="/">操作三</a>
                                        <a href="/">操作四</a>
                                        <a href="/">操作五</a>
                                        <a href="/">操作六</a>
                                        <button type="button" class="ant-btn ant-btn-primary ant-btn-sm ant-btn-background-ghost">
                                            <Icon type="plus" />
                                            <span>添加</span>
                                        </button>
                                    </div>
                                </Card>
                                <Card title="XX 指数" style={{ marginBottom: '24px' }}>
                                    <div>
                                        <ChartCard bordered={false}>
                                            <Radar hasLegend height={343} data={radarData} />
                                        </ChartCard>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </>
        );
    }
}
export default Workplace;
