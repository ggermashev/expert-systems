import './App.css';
import QuestionsContainer from './components/QuestionsContainer/QuestionsContainer';
import VariantsContainer from './components/VariantsContainer/VariantsContainer';
import AnswersContainer from './components/AnswersContainer/AnswersContainer';
import { observer } from 'mobx-react-lite';
import { Route, Routes } from 'react-router-dom';
import { CreatePage } from './pages/CreateSystemPage/CreatePage';
import SelectModePage from './pages/SelectModePage/SelectModePage';
import SelectSystemPage from './pages/SelectSystemPage/SelectSystemPage';
import UseSystemPage from './pages/UseSystemPage/UseSystemPage';

const App = observer(() => {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<SelectModePage/>} />
          <Route path='/select' element={<SelectSystemPage/>} />
          <Route path='/create' element={<CreatePage/>} />
          <Route path='/use' element={<UseSystemPage/>} />
        </Routes>
    </div>
  );
});

export default App;
