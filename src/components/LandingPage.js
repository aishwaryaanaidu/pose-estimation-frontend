import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';

const images = {
    logos: {
      blujay: require('../images/classtest2bar.png').default,
    //   amerob: require('public/images/classtest2bar.png').default,
    //   moudov: require('public/images/classtest2bar.png').default,
    //   norcar: require('public/images/classtest2bar.png').default,
    //   houspa: require('public/images/classtest2bar.png').default,
    //   empty: require('public/images/classtest2bar.png').default
    }
  };

function LandingPage() {
    const [ output, setOutput ] = useState();
    const [ filename, setFilename ] = useState("None") 
    const [ receivedResponse, setReceivedResponse ] = useState(false);
    

    const upload = (file) => {
        fetch('http://e23f-34-91-175-164.ngrok.io', { // Your POST endpoint
          method: 'POST',
          headers: {
          },
          body: file
        }).then(response =>  response.json())
        .then(resData => { 
            setOutput(resData.files)
            // fetchBirdDetails(resData.predictions)
            setReceivedResponse(true)
        }
        ).catch(
          error => console.log(error)
        );
      };
    
    const handleFileUpload = (event) => {
        let file = event.target.files[0];
        setFilename(file.name);
        let formData = new FormData();
        formData.append("file", file);
        upload(formData);
    }
    return (
        <div className="App">
            <h1>Pose Estimation</h1>
            <div style={{ marginTop: '1%'}}>
                <Button variant="contained" component="label">
                    Upload
                    <input hidden multiple type="file" onChange={handleFileUpload}/>
                </Button>
            </div>
            {!!receivedResponse && receivedResponse &&
            <>
            <div  style={{ marginTop: '2%'}}>
                    <a href={`https://drive.google.com/uc?export=view&id=${output[4]}`} download>Click to download a detailed report</a>

                    </div>
                <div style={{ marginTop: '2%'}}>
                    {/* <img src={images.logos.blujay} width="70%" height="70%" /> */}
                    <img height="500px" weight="500px" src={`https://drive.google.com/uc?export=view&id=${output[0]}`} />
                    <img height="500px" weight="500px" src={`https://drive.google.com/uc?export=view&id=${output[2]}`} />
                    <img height="500px" weight="500px" src={`https://drive.google.com/uc?export=view&id=${output[1]}`} />
                    
                    <img height="500px" weight="500px" src={`https://drive.google.com/uc?export=view&id=${output[3]}`} />
                    {/* <img height="300px" weight="300px" src={require('../images/classtest2pie.png')} />
                    <img height="300px" weight="300px" src={require('../images/test2Posebar.png')} />
                    <img height="300px" weight="300px" src={require('../images/test2posepie.png')} /> */}
                </div>
                
                </>
            }
        </div>
    );
}

export default LandingPage;
