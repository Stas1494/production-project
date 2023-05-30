import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError, ProfileSchema } from '../types/editableProfileCardSchema';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastname: 'sadadcov',
    first: 'asdadas',
    city: 'Asd',
    currency: Currency.RUB,
};
describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ username: '2321123' }),
        )).toEqual({
            form: { username: '2321123' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],

        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateError: [ValidateProfileError.SERVER_ERROR],

        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateError: undefined,
            readonly: true,
            validateErrors: undefined,
            form: data,
            data,
        });
    });
});
