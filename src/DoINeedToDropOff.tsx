
interface DoINeedToDropOffProps {
    isOpen3: boolean;
    DropOffQuestionClick: () => void;
  }
  
  export function DoINeedToDropOff(props: DoINeedToDropOffProps) {
    const { isOpen3, DropOffQuestionClick } = props;
  
    return (
      <div className='faq-item'>
        <p className='question' onClick={DropOffQuestionClick}>What do I need to drop off?</p>
        <div className={`answerHolder ${isOpen3 ? 'open' : ''}`}>
          {isOpen3 && (
            <span>All items are general building materials and household goods that can easily fit within a standard car.</span>
          )}
        </div>
      </div>
    );
  }
  
  export default DoINeedToDropOff;
  