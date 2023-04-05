import type { Meta, StoryObj } from '@storybook/angular';
import { ListComponent } from './list.component';

const meta: Meta<ListComponent> = {
  title: 'Todo List/List',
  component: ListComponent,
  tags: ['autodocs'],
  // render: (args: ListComponent) => ({
  //   props: {
  //     tasks: [],
  //     ...args,
  //   },
  // }),
};

export default meta;
type Story = StoryObj<ListComponent>;

export const Default: Story = {
  args: {},
};

export const WithTasks: Story = {
  args: {
    tasks: [{ id: 1, text: 'Learn Storybook', completed: true }],
  },
};
