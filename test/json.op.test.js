
var JsonFileOp = require('../todo/JsonFileOp');
const mockedTodoJson = '[{"id":"8e7f5be2-2168-11ec-9621-0242ac130002", "text":"Playing Sports", "status":"Done"}]';
const expectedTodoResult = {
    id: "8e7f5be2-2168-11ec-9621-0242ac130002",
    text: "Playing Sports",
    status: "Pending"
}

test('Update json op file', async () => {
    JsonFileOp.readJsonFile = jest.fn().mockImplementationOnce(() => mockedTodoJson);
    JsonFileOp.writeToJsonFile = jest.fn().mockImplementationOnce(() => { });
    const updatedTodo = await JsonFileOp.updateJsonFile("8e7f5be2-2168-11ec-9621-0242ac130002", "Pending");
    expect(updatedTodo).toEqual(expectedTodoResult);
});




