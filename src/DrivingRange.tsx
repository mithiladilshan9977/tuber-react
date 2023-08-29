
interface DrivingRangeProps {
    isOpen5: boolean;
    DriveingRangeQuestionClick: () => void;
  }
  
  export function DrivingRange(props: DrivingRangeProps) {
    const { isOpen5, DriveingRangeQuestionClick } = props;
  
    return (
      <div className='faq-item'>
        <p className='question' onClick={DriveingRangeQuestionClick}>What is the usual driving range/distance?</p>
        <div className={`answerHolder ${isOpen5 ? 'open' : ''}`}>
          {isOpen5 && (
            <span>The average driving range is between 8km to 10 km. However,  the distance can vary between 2km to 50km.</span>
          )}
        </div>
      </div>
    );
  }
  
  export default DrivingRange;
  