
interface JobsCanIGetProps {
    isOpen8: boolean;
    JobsCanIGetQuestionClick: () => void;
  }
  
  export function JobsCanIGet(props: JobsCanIGetProps) {
    const { isOpen8, JobsCanIGetQuestionClick } = props;
  
    return (
      <div className='faq-item'>
        <p className='question' onClick={JobsCanIGetQuestionClick}>How many jobs can I get per day?</p>
        <div className={`answerHolder ${isOpen8 ? 'open' : ''}`}>
          {isOpen8 && (
            <span>This can vary depending how many Drivers are active and on the day of the week.
         <br />
         <br />
            Drivers can pick-up multiple orders at the same time, however TUBER delivery policy needs to be met 
            and all orders must
             be delivered in 1 hour or less from the moment you collected the items from the store.</span>
          )}
        </div>
      </div>
    );
  }
  
  export default JobsCanIGet;
  