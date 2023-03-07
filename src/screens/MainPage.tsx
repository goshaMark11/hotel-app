import styled from 'styled-components';

import { Header } from '../components/Header/Header';
import { FavoritesWidget } from '../components/MainPage/FavoritesWidget/FavoritesWidget';
import { HotelsWidget } from '../components/MainPage/HotelsWidget/HotelsWidget';
import { SearchWidget } from '../components/MainPage/SearchWidget/SearchWidget';


const MainView = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px;
`

const MainViewContent = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  max-width: 1048px;
  gap: 24px;
`

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const MainPage = () => {
  return (
    <>
      <Header />

      <MainView>
        <MainViewContent>
          <Sidebar>
            <SearchWidget />
            <FavoritesWidget />
          </Sidebar>

          <HotelsWidget />
        </MainViewContent>
      </MainView>
    </>
  );
};