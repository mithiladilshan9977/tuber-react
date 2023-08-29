
interface DriveOldCarProps {
    isOpen7: boolean;
    DriveOldCarQuestionClick: () => void;
  }
  
  export function DriveOldCar(props: DriveOldCarProps) {
    const { isOpen7, DriveOldCarQuestionClick } = props;
  
    return (
      <div className='faq-item'>
        <p className='question' onClick={DriveOldCarQuestionClick}>Can I drive with an old car?</p>
        <div className={`answerHolder ${isOpen7 ? 'open' : ''}`}>
          {isOpen7 && (
            <span>Yes! TUBER doesn’t have a restriction based on the Year of the car. However, 
              it must be roadworthy, registered and with a current CTP insurance policy.</span>
          )}
        </div>
      </div>
    );
  }
  
  export default DriveOldCar;
  