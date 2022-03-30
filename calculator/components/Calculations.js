const operations = ['+', '−', '×', '÷', '='];

export const Calculations = (string) => {
  // let x = string.split('^[+\−\×\÷\=]*$')
  let x = string.length > 2 && string.slice(0, -1);
  // let y = x.map(el => el.trim())

  console.log(x);
  console.log(string.length);
  let b = '1 + 2'.split(' ').map((e) => {
    if (!operations.includes(e)) {
      console.log(typeof e)
      return parseInt(e);
    } else {
      return e;
    }
  });
  console.log(b);
};
