const request = require('supertest');
const app = require('../server');
const { readJsonFile } = require("../todo/JsonFileOp");
const mockedJsonData = '[{"id":"8e7f5be2-2168-11ec-9621-0242ac130002", "text":"Playing Sports", "status":"Done"}]'
jest.mock("../todo/JsonFileOp", () => ({
    readJsonFile: jest.fn(),
}));


test('Get todos', async () => {
    readJsonFile.mockImplementation(() => mockedJsonData)
    const res = await request(app)
        .get('/todo/todos')

    expect(res.statusCode).toEqual(200);
    expect(res.error).toEqual(false)
    expect(res.body.length).toEqual(1);
    expect(readJsonFile).toHaveBeenCalledTimes(1);
    expect(res.body).toEqual(JSON.parse(mockedJsonData));
});




