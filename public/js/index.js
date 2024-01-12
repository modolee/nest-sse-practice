const USER_ID = 2;
const SERVER_URL = 'http://localhost:3000';

const connectSse = () => {
  const eventSource = new EventSource(`${SERVER_URL}/sse/users/${USER_ID}`);
  eventSource.onmessage = ({ data }) => {
    console.log('SSE에서 넘어온 데이터', JSON.parse(data));
    renderUserInfo(JSON.parse(data));
  };
};

const readUserInfo = async () => {
  const responseRaw = await fetch(`${SERVER_URL}/users/${USER_ID}`, {
    method: 'GET',
  });
  const response = await responseRaw.json();

  return response.data;
};

const renderUserInfo = ({ id, nickname, level }) => {
  const userInfoDiv = document.querySelector('.user-info');
  userInfoDiv.innerHTML = `
    <p>아이디: ${id}</p>
    <p>닉네임: ${nickname}</p>
    <p>레벨: ${level}</p>
  `;
};

const addEventListenerToLevelUpButton = () => {
  const levelUpButton = document.querySelector('.btn-level-up');
  levelUpButton.addEventListener('click', async () => {
    const responseRaw = await fetch(`${SERVER_URL}/users/${USER_ID}/level`, {
      method: 'PUT',
    });
    const response = await responseRaw.json();

    console.log({ 'API 호출 결과': response });
  });
};

connectSse();
const user = await readUserInfo();
renderUserInfo(user);
addEventListenerToLevelUpButton();
