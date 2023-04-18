import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    comments: [
        {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'Ivan' },
        },
        {
            id: '2',
            text: 'comment 22',
            user: { id: '2', username: 'Petr' },
        },
    ],
};

export const Loading = Template.bind({});

Loading.args = {
    comments: [

    ],
    isLoading: true,
};
