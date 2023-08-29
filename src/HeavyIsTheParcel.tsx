
interface HowHeavyIsTheParcelProps {
    isOpen4: boolean;
    HowHeavyTheParcelQuestionClick: () => void;
  }
  
  export function HowHeavyIsTheParcel(props: HowHeavyIsTheParcelProps) {
    const { isOpen4, HowHeavyTheParcelQuestionClick } = props;
  
    return (
      <div className='faq-item'>
        <p className='question' onClick={HowHeavyTheParcelQuestionClick}>How heavy is the parcel?</p>
        <div className={`answerHolder ${isOpen4 ? 'open' : ''}`}>
          {isOpen4 && (
            <span>Items are generally light but can weigh up to 15KG each like a can of paint for example.
                 All items sold are within OHS weight guides.</span>
          )}
        </div>
      </div>
    );
  }
  
  export default HowHeavyIsTheParcel;
  