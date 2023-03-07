import { useEffect } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import Cookies from 'js-cookie';

import { AppCookies } from '../../services/auth/enums/app-cookies';
import { initialSearchData } from '../../shared/initial-search-data';
import { MainView, Logo, LoginButton, ButtonIcon } from './components';



export const Header = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const accessToken = Cookies.get(AppCookies.ACCESS_TOKEN)
    if (!accessToken) {
      navigate('/', { replace: true })
    }
  }, [navigate])

  const navigateHome = () => { navigate({ pathname: '/main', search: `${createSearchParams(initialSearchData)}` }) }

  const constLogOut = () => {
    Cookies.remove(AppCookies.ACCESS_TOKEN)
    navigate('/')
  }

  return (
    <MainView>
      <Logo onClick={navigateHome}>Simple Hotel Check</Logo>

      <LoginButton onClick={constLogOut}>Выйти <ButtonIcon src='/icons/log-out.svg' alt='logout' /></LoginButton>
    </MainView>
  );
};