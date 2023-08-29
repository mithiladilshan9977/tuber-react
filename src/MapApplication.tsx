
interface MapApplicationProps {
    isOpen9: boolean;
    MapApplicationQuestionClick: () => void;
  }
  
  export function MapApplication(props: MapApplicationProps) {
    const { isOpen9, MapApplicationQuestionClick } = props;
  
    return (
      <div className='faq-item'>
        <p className='question' onClick={MapApplicationQuestionClick}>Can I use my preferred map application, e.g. Google Maps or Waze?</p>
        <div className={`answerHolder ${isOpen9 ? 'open' : ''}`}>
          {isOpen9 && (
            <span>The TUBER Driver App will suggest a route for you to take, but it’s up to you which route you choose.
                <br />
                <br />

            We suggest that you use your preferred map application with the settings of your preference, e.g. Avoid Tolls.</span>
          )}
        </div>
      </div>
    );
  }
  
  export default MapApplication;
  