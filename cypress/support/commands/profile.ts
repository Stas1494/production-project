export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { authorization: 'sada' },
        body: {
            id: '3',
            first: 'test',
            lastname: 'user',
            age: 50,
            currency: 'USD',
            country: 'Kazakhstan',
            city: 'London',
            username: 'testuser',
            avatar: 'https://static10.tgstat.ru/channels/_0/59/591b712ff223991fb3865c9d86326a39.jpg',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>
            resetProfile(profileId: string): Chainable<void>

        }
    }
}
