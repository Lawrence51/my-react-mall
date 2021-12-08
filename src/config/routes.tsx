import React, { Suspense, lazy } from 'react'
import {
  Navigate,
  useRoutes
} from 'react-router-dom'
export interface IRoute {
  path: string;
  component?: any;
  redirect?: string;
  element?: any,
  routes?: IRoute[];
  children?: Array<IRoute>,
}

export const routeList: IRoute[] = [
  {
    path: '/home',
    component: lazy(() => import('@/baseLayout/home')),
  },
  /**订单列表 */
  {
    path: '/order-list',
    component: lazy(() => import('@/baseLayout/orderList')),
  },
  {
    path: '',
    redirect: '/home',
    component: lazy(() => import('@/baseLayout/orderList')),
  },
];

// 路由处理方式
const changeRouter = (routers: Array<IRoute>): any => {
  return routers.map(item => {
    if (item.children) {
      item.children = changeRouter(item.children)
    }
    item.element = <Suspense fallback={<div>加载中...</div>}>
      {/* 懒加载的组件加进去 */}
      <item.component />
    </Suspense>
    return item
  })
}

// 必须这样子，不然会报什么hook错误的问题
const RouterLayout = () => useRoutes(changeRouter(routeList))

export default RouterLayout
