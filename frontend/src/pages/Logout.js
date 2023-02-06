import { redirect } from 'react-router-dom';

export function action() {
  localStorage.removeItem('access_token');
  localStorage.removeItem('expiration');

  return redirect('/');
}
