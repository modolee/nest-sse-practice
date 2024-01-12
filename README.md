# Nest.js에서 SSE 테스트

# 실행 방법

## 서버 실행

```sh
npm install
npm run start:dev
```

## 클라이언트 실행

`public/html/index.html` 파일을 [라이브서버](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)로 실행

# 동작 방식

- 레벨 업 버튼 클릭
- 서버의 사용자 정보 업데이트
- SSE로 클라이언트에게 갱신 된 정보 전달
- 전달 받은 정보를 화면에 표시

# 사용자 정보

- 화면에 표시되는 사용자 정보 수정을 원할 경우 `public/js/index.js` 파일의 `USER_ID` 수정

```javascript
{
  id: 1,
  nickname: 'David',
  level: 1,
},
{
  id: 2,
  nickname: 'Jerry',
  level: 2,
},
{
  id: 3,
  nickname: 'James',
  level: 3,
}
```
