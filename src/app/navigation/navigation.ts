import {FuseNavigation} from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {id: 'main', title: 'Главная', icon: 'home', url: '/analytics', type: "item"},
    {id: 'control', title: 'Управление', type:"group"},
    {id: 'users', title: 'Пользователи', icon: 'people', url: '/pages/users', type: "item"},
    {id: 'control', title: 'Устройства', icon: 'phonelink_ring', url: '/pages/devices', type: "item"},
    {id: 'events', title: 'События', icon: 'assignment_late', url: '/pages/logs', type: "item"},
    // {id: 'charts', title: 'Графики', icon: 'bar_chart', url: '/pages/charts', type: "item"},
    // {id: 'calendar', title: 'Календарь', icon: 'calendar_today', url: '/pages/calendar', type: "item"},
];
