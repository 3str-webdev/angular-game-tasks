export interface IUserRouting {
  path: string;
  title: string;
}

export const UserRouting: IUserRouting[] = [
  { path: '', title: 'Главная' },
  { path: 'tasks', title: 'Задачи' },
  { path: 'control', title: 'Панель управления' },
];
