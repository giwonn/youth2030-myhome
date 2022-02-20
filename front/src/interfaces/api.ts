// enum은 몇몇 번들러에서 트리쉐이킹이 안됨...
// 최적화를 위해 Union Type으로 enum 흉내내기
const Method = {
  GET: 'get',
  PUT: 'put',
  POST: 'post',
  DELETE: 'delete',
  PATCH: 'patch',
} as const; // as const를 붙여서 데이터 하나하나를 전부 READONLY 처리
// RESTAPI 형식에 맞춰 값 제한하기
export type Method = typeof Method[keyof typeof Method];

export default {
  Method,
};
