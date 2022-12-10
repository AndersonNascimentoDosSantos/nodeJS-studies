const { error } = require("./src/constants");
const File = require("./src/file");
const { rejects, deepStrictEqual } = require("assert");
(async () => {
  {
    const filePath = "./mocks/emptyFile-invalid.csv";
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    // console.log(rejection);
    const result = File.csvToJson(filePath);
    // console.log(result);
    await rejects(result, rejection);
  }
  {
    const filePath = "./mocks/fourItems-invalid.csv";
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    // console.log(rejection);
    const result = File.csvToJson(filePath);
    // console.log(result);
    await rejects(result, rejection);
  }
  {
    const filePath = "./mocks/threeItems-valid.csv";
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    // console.log(rejection);
    const result = await File.csvToJson(filePath);
    // console.log(result);
    const expected = [
      {
        id: 123,
        name: "anderson nascimento",
        proffession: "javascript developer",
        birthday: 1991,
      },
      {
        id: 321,
        name: "Xuxa da silva",
        proffession: "java script especialist",
        birthday: 1942,
      },
      {
        id: 231,
        name: "joaozinho",
        proffession: "java developer",
        birthday: 1992,
      },
    ];

    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
  }
})();
