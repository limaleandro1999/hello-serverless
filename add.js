'use strict';

module.exports.add = async (event) => {
  const { num1, num2 } = JSON.parse(event.body);
  const output = {
    num1,
    num2,
    result: num1 + num2,
  };
  console.log(output)
  return {
    statusCode: 200,
    body: JSON.stringify(output),
  };
};
