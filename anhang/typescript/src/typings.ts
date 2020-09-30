//declare let _;

namespace Typings {
  declare let NameService: any;

  let nameService = new NameService();
  let name = nameService.getName();
  console.log(name); // John Doe

  let array = [1, 2, 3];

  let max = MyMathLib.max(array);
  
  console.log(max); // {"result":3,"index":2}
  
  let allSmallerEqual3 = _.every(array, (elem: any) => {
    return elem <= 3;
  });

  console.log(allSmallerEqual3); // true
}

