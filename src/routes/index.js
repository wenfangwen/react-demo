const routes = [
    {
        title: 'Dashboard',
        key: 'dashboard',
        icon: 'dashboard',
        children: [
            {
                title: '工作台',
                path: '/dashboard/workplace'
            },
            {
                title: '分析页',
                path: '/dashboard/analysis'
            }
        ]
    },
    {
        title: '表单页',
        icon: 'form',
        key: 'form',
        children: [
            {
                title: '基础表单',
                path: '/form/basic-form'
            },
            {
                title: '分步表单',
                path: '/form/step-form'
            }
        ]
    },
    {
        title: '列表页',
        key: 'list',
        icon: 'table',
        children: [
            {
                title: '查询表格',
                path: '/list/table-list'
            },
            {
                title: '标准列表',
                path: '/list/basic-list'
            },
            {
                title: '卡片列表',
                path: '/list/card-list'
            }
        ]
    },
    {
        title: '详情页',
        icon: 'profile',
        key: 'profile',
        children: [
            {
                title: '基础详情页',
                path: '/profile/basic'
            }
        ]
    },
    {
        title: '结果页',
        key: 'result',
        icon: 'check-circle-o',
        children: [
            {
                title: '成功',
                path: '/result/success'
            },
            {
                title: '失败',
                path: '/result/fail'
            }
        ]
    },
    {
        title: '异常页',
        key: 'exception',
        icon: 'warning',
        children: [
            {
                title: '404',
                path: 'exception/403'
            },
            {
                title: '403',
                path: 'exception/403'
            },
            {
                title: '500',
                path: 'exception/500'
            }
        ]
    },
    {
        title: '个人页',
        key: 'account',
        icon: 'user',
        children: [
            {
                title: '个人中心',
                path: '/account/center'
            },
            {
                title: '个人设置',
                path: '/account/settings'
            }
        ]
    }
];
export default routes;
