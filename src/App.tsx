import './App.css';
import { observer } from 'mobx-react-lite';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CreateSystemPage } from './pages/CreateSystemPage/CreateSystemPage';
import SelectModePage from './pages/SelectModePage/SelectModePage';
import SelectSystemPage from './pages/SelectSystemPage/SelectSystemPage';
import UseSystemPage from './pages/UseSystemPage/UseSystemPage';
import ReplyIcon from '@mui/icons-material/Reply';
import { AppStyled } from './App.styled';
import { BLUE } from './constants';


const App = observer(() => {

  const navigate = useNavigate()

  return (
    <AppStyled>
        <ReplyIcon className='back' onClick={() => {navigate('/')}}/>
        <Routes>
          <Route path='/' element={<SelectModePage/>} />
          <Route path='/select' element={<SelectSystemPage/>} />
          <Route path='/create' element={<CreateSystemPage/>} />
          <Route path='/use' element={<UseSystemPage/>} />
        </Routes>
    </AppStyled>
  );
});

export default App;
