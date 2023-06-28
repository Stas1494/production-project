import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RatingCard } from './RatingCard';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Normal = Template.bind({});
