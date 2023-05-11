import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
    test('test with one params', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    test('test with multiple params', () => {
        const params = getQueryParams({
            test: 'value',
            second: 'value1',
            abc: 'value3',
        });
        expect(params).toBe('?test=value&second=value1&abc=value3');
    });
    test('test with undefined params', () => {
        const params = getQueryParams({
            test: undefined,
            second: 'value1',

        });
        expect(params).toBe('?second=value1');
    });
});
