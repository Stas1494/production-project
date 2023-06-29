import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;
const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

/* export const Primary = Template.bind({});

Primary.args = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Russia,
        lastname: 'sadadcov',
        first: 'asdadas',
        city: 'Asd',
        currency: Currency.RUB,
        avatar,
    },
}; */

export const WithError = Template.bind({});

WithError.args = {
    error: 'true',
};

export const Loading = Template.bind({});

Loading.args = {
    isLoading: true,
};
