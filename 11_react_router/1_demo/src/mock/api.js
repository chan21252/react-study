import Mock, {Random} from "mockjs";

Mock.mock("/api/news/list", 'get', () => {
  return Mock.mock({
    "code": 1,
    "message": "success",
    "result|3": [
      {
        "id|+1": 1,
        "title": Random.csentence(),
        "author": Random.cname(),
        "content": Mock.mock('@cparagraph')
      }
    ]
  });
});

Mock.mock(RegExp("/api/news/details/*"), 'get', (options) => {
  console.log(options)
  return Mock.mock({
    "code": 1,
    "message": "success",
    "result": {
      "id|1-3": 1,
      "title": Random.csentence(),
      "author": Random.cname(),
      "content": Mock.mock('@cparagraph')
    }
  });
});