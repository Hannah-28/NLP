import {validURL} from '../src/client/js/urlChecker'


describe('Testing the url checker functionality should exist' , () => {
    test('It should return true', () => {
        expect(validURL).toBeDefined();
    });
});
describe('Testing the valid url is  a function' , () => {
    test('It should be a function', () => {
        expect(typeof validURL).toBe("function");
    });
});
describe('Testing if the url is a valid url' , () => {
    var url = "https://www.studentnewsdaily.com/daily-news-article/u-s-seizes-north-korean-cargo-ship/";
    test('It should return true', () => {
        const response = validURL(url);
        expect(response).toBeDefined();
        expect(response).toBe(true);
    });
});
describe('Testing if the url is an invalid url' , () => {
    var url = "htps://www.studentnewsdaily.com/daily-news-article/u-s-seizes-north-korean-cargo-ship/";
    test('It should return false', () => {
        const response = validURL(url);
        expect(response).toBeDefined();
        expect(response).toBe(false);
    });
});