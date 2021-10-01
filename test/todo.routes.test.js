const request = require('supertest');
const app = require('../server');
const { readJsonFile, updateJsonFile } = require("../todo/JsonFileOp");
let mockedTodoJson = '[{"id":"8e7f5be2-2168-11ec-9621-0242ac130002", "text":"Playing Sports", "status":"Done"}]';
jest.mock("../todo/JsonFileOp", () => ({
    readJsonFile: jest.fn(),
    updateJsonFile: jest.fn()
}));

describe('Test for todo route', () => {
    it('Get todos', async () => {
        readJsonFile.mockImplementation(() => mockedTodoJson);
        const res = await request(app)
            .get('/todo/todos');

        expect(res.statusCode).toEqual(200);
        expect(res.error).toEqual(false);
        expect(res.body.length).toEqual(1);
        expect(readJsonFile).toHaveBeenCalledTimes(1);
        expect(res.body).toEqual(JSON.parse(mockedTodoJson));
        mockedTodoJson = res.body[0];
    });


    it('Post todos', async () => {
        updateJsonFile.mockImplementation(() => mockedTodoJson);
        const res = await request(app)
            .put('/todo/' + mockedTodoJson.id).send(mockedTodoJson)
        expect(res.statusCode).toEqual(200);
        expect(updateJsonFile).toHaveBeenCalledTimes(1);
    });

});


