import { IRoute } from './config';

// 此配置文件是用来渲染左边菜单栏的
export const routes: IRoute[] = [
  {
    path: '/dashborad',
    meta: {
      title: '首页',
      icon: 'table',
    },
    children: [
      {
        path: '/dashborad/google',
        meta: {
          title: '谷歌',
          icon: 'google',
        },
      },
      {
        path: '/dashborad/alibaba',
        meta: {
          title: '阿里巴巴',
          icon: 'aliyun',
        },
      },
      {
        path: '/dashborad/dd',
        meta: {
          title: '字节跳动',
          icon: 'aliyun',
        },
      },
    ],
  },
  {
    path: '/list',
    meta: {
      title: '列表测试',
      icon: 'table',
    },
    children: [
      {
        path: '/list/list1',
        meta: {
          title: '谷歌',
          icon: 'google',
        },
      },
      {
        path: '/list/list2',
        meta: {
          title: '阿里巴巴',
          icon: 'aliyun',
        },
      },
    ],
  },
  {
    path: '/goods',
    meta: {
      title: '商品管理',
      icon: 'table',
    },
    children: [
      {
        path: '/goods/list1',
        meta: {
          title: '谷歌',
          icon: 'google',
        },
      },
      {
        path: '/goods/list2',
        meta: {
          title: '阿里巴巴',
          icon: 'aliyun',
        },
      },
      {
        path: '/goods/list3',
        meta: {
          title: '阿里巴巴',
          icon: 'aliyun',
        },
        children: [
          {
            path: '/goods/list3/list',
            meta: {
              title: '阿里巴巴',
              icon: 'aliyun',
            },
          },
        ],
      },
    ],
  },
  // 以下菜单为系统权限管理
  {
    path: '/auth',
    meta: {
      title: '权限管理',
      icon: 'setting',
    },
    redirect: '/auth/menu',
    children: [
      {
        path: '/auth/menu',
        meta: {
          title: '菜单管理',
          icon: 'menu',
        },
      },
      {
        path: '/auth/role',
        meta: {
          title: '角色管理',
          icon: 'team',
        },
      },
      {
        path: '/auth/user',
        meta: {
          title: '用户管理',
          icon: 'user',
        },
      },
    ],
  },
];
