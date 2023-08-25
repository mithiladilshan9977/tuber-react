
interface OftenToGetPaidProps {
    isOpen2: boolean;
    handleOfftenQuestionClick: () => void;
  }
  
  export function OftenToGetPaid(props: OftenToGetPaidProps) {
    const { isOpen2, handleOfftenQuestionClick } = props;
  
    return (
      <div className='faq-item'>
        <p className='question' onClick={handleOfftenQuestionClick}>How often do I get paid?</p>
        <div className={`answerHolder ${isOpen2 ? 'open' : ''}`}>
          {isOpen2 && (
            <span>Payments are made every Saturday morning.</span>
          )}
        </div>
      </div>
    );
  }
  
  export default OftenToGetPaid;
  