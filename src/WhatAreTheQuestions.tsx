
interface WhatAreTheQuestionsProps {
  isOpen: boolean;
  handleQuestionClick: () => void;
}

export function WhatAreTheQuestions(props: WhatAreTheQuestionsProps) {
  const { isOpen, handleQuestionClick } = props;

  return (
    <div className='faq-item'>
      <p className='question' onClick={handleQuestionClick}>How to log in ?</p>
      <div className={`answerHolder ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <span>This is the way to log in</span>
        )}
      </div>
    </div>
  );
}

export default WhatAreTheQuestions;
