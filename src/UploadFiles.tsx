import { useState } from 'react'
import axios from 'axios';

export function UploadFiles(){

  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = event.target.files;
      if (selectedFiles) {
          const newImageFiles = Array.from(selectedFiles);
          setImageFiles((prevFiles) => [...prevFiles, ...newImageFiles]);
      }
  };

  const sendFilesToAPI = async () => {
    const apiEndpoint = 'API_ENDPOINT_URL';
    const step1dataJSON = sessionStorage.getItem('step1data');
    const step2dataJSON = sessionStorage.getItem('step2data');
    const step3dataJSON = sessionStorage.getItem('step3data');

    const formData = new FormData();

    if (!step1dataJSON || !step2dataJSON || !step3dataJSON) {
      console.error('One or more data sets are missing in session storage.');
      return;
  }

      const step1data = JSON.parse(step1dataJSON);
      const step2data = JSON.parse(step2dataJSON);
      const step3data = JSON.parse(step3dataJSON);

    // Append image files to the form data
    imageFiles.forEach((file, index) => {
        formData.append(`image${index}`, file);
    });

    try {
        const response = await axios.post(apiEndpoint, formData, {
          step1data,
          step2data,
          step3data
      });

        console.log('API response:', response.data);
    } catch (error) {
        console.error('Error sending data to API:', error);
    }
  };
        

    return (
        < >

      <div className="mainWrapper">

        <div className="titileholder">
          <span className="createaccounttitle">Upload required documents</span>
        </div>



      <div className="mainOutHolders">

      <span className="innerText">Take a photo of your driver's license</span>
        <div className="fileInputContainer">
        <label className="uploadLabel">
            <span className="uploadFilecss">Upload Front</span>
            <input type="file" className="uploadFrontImage" onChange={handleFileChange}/>
          </label>
          <label className="uploadLabel">
            <span>Back Image</span>
            <input type="file" className="uploadBackImage" onChange={handleFileChange} />
          </label>
        </div>
      </div>

      <div className="subDivWrapper">


      <div className="mainOutHolderssub">
        <span className="innerText">Upload your vehicle registration document</span>
        <div className="fileInputContainersub">

        <label className="uploadLabel">
            <span className="uploadFilecss">Upload</span>
            <input type="file" className="uploadFrontImage" onChange={handleFileChange}/>
          </label>
        </div>
      </div>


      <div className="mainOutHolderssub">
        <span className="innerText">Upload your vehicle registration document</span>
        <div className="fileInputContainersub">

        <label className="uploadLabel">
            <span className="uploadFilecss">Upload</span>
            <input type="file" className="uploadFrontImage" onChange={handleFileChange} />
          </label>
        </div>
      </div>


      <div className="mainOutHolderssub">
        <span className="innerText">Upload your vehicle registration document</span>
        <div className="fileInputContainersub">

        <label className="uploadLabel">
            <span className="uploadFilecss">Upload</span>
            <input type="file" className="uploadFrontImage" onChange={handleFileChange}/>
          </label>
        </div>
      </div>
      </div>

      <button type="button"  className='nextbtn' onClick={sendFilesToAPI}>
       Submit
        </button>

      </div>
                </>
    )
}