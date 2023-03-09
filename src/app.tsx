// 运行时配置
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
import {
  HeartOutlined,
  ShareAltOutlined,
  SmileOutlined,
  ToolOutlined,
} from '@ant-design/icons';
import defaultMenus from './defaultMenus';
import type { MenuDataItem } from '@ant-design/pro-components';
import './global.less';
console.error('process.env', process.env);

const IconMap: any = {
  smile: <SmileOutlined />,
  heart: <HeartOutlined />,
  tool: <ToolOutlined />,
  share: <ShareAltOutlined />,
};
const loopMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
  menus.map(({ icon, children, ...item }) => ({
    ...item,
    icon: icon && IconMap[icon as string],
    children: children && loopMenuItem(children),
  }));
export async function getInitialState(): Promise<{
  name: string;
  userId: number;
}> {
  console.log('getInitialState');
  return { name: 'linj', userId: 1 };
}
export const layout = (data: any) => {
  return {
    onMenuHeaderClick: () => {
      return true;
    },
    title: 'linjielinlinTool',
    logo: 'https://img.lj4.top/avatar.png',
    menu: {
      title: 'linjielinlin tools',
      locale: false,
      params: {
        userId: data?.initialState?.userId,
      },
      // 动态设置菜单项
      request: async (params: any, menuList: any) => {
        console.log('更新菜单：', params, menuList);
        const menu: MenuDataItem[] = [];
        return loopMenuItem([...defaultMenus, ...menu]);
      },
    },
  };
};
