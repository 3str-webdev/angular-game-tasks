export type ITask = {
  taskId: number;
  title: string;
  theme: string;
  text: string;
  answer: string;
  authorId: number;
  level: TaskLevel;
  rating: number;
  createdAt: string;
};

export type EditableFields = Pick<
  ITask,
  'title' | 'theme' | 'text' | 'answer' | 'level'
>;

export type TaskLevel = 'Easy' | 'Medium' | 'Hard';


