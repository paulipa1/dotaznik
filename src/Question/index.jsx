import React, { useState } from 'react';
import QuestionBody from '../QuestionBody/index';
import Option from '../Option/index';
import './style.css';

const Question = () => {
  const [answer, setAnswer] = useState('symbolQuestion');

  const handleSelected = (iconType) => {
    return setAnswer(iconType);
  };

  return (
    <div className="question">
      <QuestionBody
        iconType={answer}
        text="Kdo jinému jámu kopá, sám do ní padá"
      />
      <div className="question__options">
        <Option
          type="smileyStrongYes"
          text="Souhlasím"
          onSelected={handleSelected}
        />
        <Option
          type="smileyYes"
          text="Spíše souhlasím"
          onSelected={handleSelected}
        />
        <Option type="smileyNeutral" text="Nevím" onSelected={handleSelected} />
        <Option
          type="smileyNo"
          text="Spíše nesouhlasím"
          onSelected={handleSelected}
        />
        <Option
          type="smileyStrongNo"
          text="Nesouhlasím"
          onSelected={handleSelected}
        />
      </div>
    </div>
  );
};

export default Question;
