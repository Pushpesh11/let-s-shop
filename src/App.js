import Navbar from "./Navbar";
import Main from "./Main";
import Review from "./Review";
import Question from "./Question";
import Footer from "./Footer";
import {Data, Questions} from "./Data";
import React, {useState} from 'react';

const allCategories = ['all', ...new Set(Data.map((item) => item.cate))];

function App() {
  const [questions, setQuestions] = useState(Questions);
  const [genderItem, setGenderItem] = useState(Data);
  const [cate, setCate] = useState(allCategories);

  const filterItems = (cate) => {
    if(cate === 'all') {
      setGenderItem(Data);
      return;
    }
    const newItems = Data.filter((item) => item.cate === cate);
    setGenderItem(newItems) 
  }
  return (
    <div className="App">
        <Navbar />
          <Main Data={genderItem} categories={cate} filterItems={filterItems}/>
          <Review/>
          {questions.map((question) => {
            return (
              <Question key={question.id} {...question}/>
              )
            })}
        <Footer/>
    </div>
  );
}

export default App;
