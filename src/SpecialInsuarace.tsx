
interface SpecialInsuaranceProps {
    isOpen6: boolean;
    SpecialInsuaranceQuestionClick: () => void;
  }
  
  export function SpecialInsuarance(props: SpecialInsuaranceProps) {
    const { isOpen6, SpecialInsuaranceQuestionClick } = props;
  
    return (
      <div className='faq-item'>
        <p className='question' onClick={SpecialInsuaranceQuestionClick}>Do I need special insurance?</p>
        <div className={`answerHolder ${isOpen6 ? 'open' : ''}`}>
          {isOpen6 && (
            <span>Vehicle insurance that covers at least 3rd party property damage (CTP).</span>
          )}
        </div>
      </div>
    );
  }
  
  export default SpecialInsuarance;
  