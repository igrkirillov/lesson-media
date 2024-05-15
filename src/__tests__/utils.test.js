import { checkValidityLocationText } from "../js/utils";

test("checkValidityLocationText with space", () => {
  expect(() => checkValidityLocationText("51.50851, -0.12572")).not.toThrow(
    Error.class
  );
});

test("checkValidityLocationText without space", () => {
  expect(() => checkValidityLocationText("51.50851,-0.12572")).not.toThrow(
    Error.class
  );
});

test("checkValidityLocationText with brackets", () => {
  expect(() => checkValidityLocationText("[51.50851, -0.12572]")).not.toThrow(
    Error.class
  );
});

test("checkValidityLocationText with empty", () => {
  expect(() => checkValidityLocationText(null)).toThrow(
    "Поле не может быть пустым!"
  );
});

test("checkValidityLocationText with trash", () => {
  expect(() => checkValidityLocationText("brr")).toThrow(
    "Текст в поле не соответствует заданному формату!"
  );
});
