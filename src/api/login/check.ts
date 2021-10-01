import { cookies } from 'api/methods/cookies';

export const loginCheck = () => {
  const accessToken = cookies.get('access_token');
  if (accessToken === '' || accessToken === undefined || accessToken === null) {
    alert('로그인 후 이용 가능한 서비스입니다.');
    window.location.replace('/');
  }
};
