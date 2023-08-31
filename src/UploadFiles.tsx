import { useState } from 'react'
import axios from 'axios';

export function UploadFiles(){

  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [image4, setImage4] = useState('');
  const [image5, setImage5] = useState('');

  function handleFileChange1(event) {
      setImage1(event.target.files[0])  
  };

  function handleFileChange2(event) {
    setImage2(event.target.files[0])
  };

  function handleFileChange3(event) {
    setImage3(event.target.files[0])
  };

  function handleFileChange4(event) {
    setImage4(event.target.files[0])
  };

  function handleFileChange5(event) {
    setImage5(event.target.files[0])
  };
  

  // const sendFilesToAPI = async () => {
  //   const apiEndpoint = 'API_ENDPOINT_URL';
  //   const step1dataJSON = sessionStorage.getItem('step1Data');
  //   const step2dataJSON = sessionStorage.getItem('step2Data');
  //   const step3dataJSON = sessionStorage.getItem('step3Data');

  //   const formData = new FormData();

  //   if (!step1dataJSON || !step2dataJSON || !step3dataJSON) {
  //     console.error('One or more data sets are missing in session storage.');
  //     return;
  // }

  //     const step1data = JSON.parse(step1dataJSON);
  //     const step2data = JSON.parse(step2dataJSON);
  //     const step3data = JSON.parse(step3dataJSON);

  //   // Append image files to the form data
  //   imageFiles.forEach((file, index) => {
  //       formData.append(`image${index}`, file);
  //   });

  //   try {
  //       const response = await axios.post(apiEndpoint, formData, {
  //         step1data.email,
  //         step2data,
  //         step3data
  //     });

  //       console.log('API response:', response.data);
  //   } catch (error) {
  //       console.error('Error sending data to API:', error);
  //   }
  // };
        

    return (
        < >

      <div className="mainWrapper">

        <div className="titileholder">
          
        </div>



      <div className="mainOutHolders">

      <span className="innerText">Take a photo of your driver's license</span>
        <div className="fileInputContainer">

        <label className="uploadLabel">
          <span className={`uploadFilecss ${image1 ? 'uploaded' : ''}`}>
            {image1 ? ' Uploaded' : 'Upload Front'}
          </span>
          <input type="file" className="uploadFrontImage" onChange={handleFileChange1}/>
        </label>

          <label className="uploadLabel">
            <span className={`uploadFilecss ${image2 ? 'uploaded' : ''}`}>
            {image2 ? ' Uploaded' : 'Upload Back'}
          </span>
            <input type="file" className="uploadBackImage" onChange={handleFileChange2} />
          </label>
        </div>
      </div>

      <div className="subDivWrapper">


      <div className="mainOutHolderssub">
        <span className="innerText">Upload your vehicle registration document</span>
        <div className="fileInputContainersub">

        <label className="uploadLabel">
        <span className={`uploadFilecss ${image3 ? 'uploaded' : ''}`}>
            {image3 ? ' Uploaded' : 'Upload'}
          </span>
            <input type="file" className="uploadFrontImage" onChange={handleFileChange3}/>
          </label>
        </div>
      </div>


      <div className="mainOutHolderssub">
        <span className="innerText">Upload your vehicle registration document</span>
        <div className="fileInputContainersub">

        <label className="uploadLabel">
        <span className={`uploadFilecss ${image4 ? 'uploaded' : ''}`}>
            {image4 ? ' Uploaded' : 'Upload'}
          </span>
            <input type="file" className="uploadFrontImage" onChange={handleFileChange4} />
          </label>
        </div>
      </div>


      <div className="mainOutHolderssub">
        <span className="innerText">Upload your vehicle registration document</span>
        <div className="fileInputContainersub">

        <label className="uploadLabel">
        <span className={`uploadFilecss ${image5 ? 'uploaded' : ''}`}>
            {image5 ? ' Uploaded' : 'Upload'}
          </span>
            <input type="file" className="uploadFrontImage" onChange={handleFileChange5}/>
          </label>
        </div>
      </div>
      </div>

      {/* <button type="button"  className='nextbtn' onClick={sendFilesToAPI}>
       Submit
        </button> */}

      </div>
                </>
    )
}