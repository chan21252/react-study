import Mock, {Random} from "mockjs";

// 返回值模板
const Result = {
  "code": 1,
  "message": "success",
  "data": null
};

// 获取菜单列表
Mock.mock("/api/menu/list", "get", () => {
  Result.data = [
    {id: 1, title: "主页", name: "home", path: "/home"},
    {id: 2, title: "关于", name: "about", path: "/about"}
  ];
  return Result;
});

// 获取news列表
Mock.mock("/api/news/list", 'get', () => {
  const newsList = [];
  for (let i = 0; i < 10; i++) {
    newsList.push({
      id: i+1,
      title: Random.csentence(),
    }) ;
  }
  Result.data = newsList;
  return Result;
});

// 获取news详情，path variable参数
Mock.mock(RegExp("/api/news/details/*"), 'get', (options) => {
  const {url} = options;
  let idIndex = url.lastIndexOf('/') + 1
  let id = url.substring(idIndex);
  Result.data = {
    id: id,
    title: Random.csentence(),
    author: Random.cname(),
    content: Mock.mock('@cparagraph')
  }
  return Result;
});

// 获取news详情，query参数
Mock.mock(RegExp("/api/news/details\?.*"), 'get', (options) => {
  const {url} = options;
  console.log(options)
  let idIndex = url.lastIndexOf('/') + 1
  let id = url.substring(idIndex);
  Result.data = {
    id: id,
    title: Random.csentence(),
    author: Random.cname(),
    content: Mock.mock('@cparagraph')
  }
  return Result;
});