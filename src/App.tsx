import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { Provider } from './Context'

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
  return (
    <Provider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </Provider>
  )
}