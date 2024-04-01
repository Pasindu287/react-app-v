import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Footer from './footer';
import './App.css';

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [classificationResult, setClassificationResult] = useState({});
  const [previewUrl, setPreviewUrl] = useState('');
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const previewUrl = URL.createObjectURL(file);
      setPreviewUrl(previewUrl);
    } else {
      setSelectedFile(null);
      setPreviewUrl('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('https://flask-app-varicose-veins-0391fbbc0894.herokuapp.com//predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setClassificationResult({
        confidence: response.data.confidence,
        predictedClass: response.data.predicted_class,
      });
    } catch (error) {
      console.error('Error:', error);
      alert(`An error occurred: ${error.message}`);
    }
  };

  const handleClear = () => {
    setSelectedFile(null);
    setClassificationResult({});
    setPreviewUrl('');
    fileInputRef.current.value = ''; 
  };
  const handleViewTreatment = () => {
    if (classificationResult.predictedClass === 'Varicose Veins') {
      navigate(`/treatment/varicose veins`);
    } else if (classificationResult.predictedClass === 'Spider Veins') {
      navigate(`/treatment/spider veins`);
    } else if (classificationResult.predictedClass === 'Normal Legs') {
      navigate(`/treatment/normal legs`);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Varicose Veins Classifier</h1>
        <div className="content">
          <div className="instructions">
            <h2>Instructions :</h2>
            <p>1. Upload to varicose veins image to classifed.<> </>(Please provide image with only .jpg or .jpeg extentions.) </p>
            <form onSubmit={handleSubmit}>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="imageInput" />
            </form>
            <p>2.Then click the "Classfiy Image" button to analyse the image and get classification  output.</p>
            <p>3.Click the "Clear" button ro clear the selected image and try anthor image.</p>
          </div>
          <div className="upload">
            <form onSubmit={handleSubmit}>
              <button type="submit" className="classifyButton">Classify Image</button>
              <button type="button" onClick={handleClear} className="clearButton">Clear</button>
            </form>
            {previewUrl && <img src={previewUrl} alt="Preview" className="imagePreview" />}
          </div>
              <div className="results">
                  {classificationResult.predictedClass && (
                    <div className="resultContainer">
                      <p>Classification Result: {classificationResult.predictedClass}</p>
                      <p>Confidence Level: {`${(classificationResult.confidence * 100).toFixed(2)}%`}</p>
                      {(classificationResult.predictedClass === 'Varicose Veins' ||
                        classificationResult.predictedClass === 'Spider Veins' ||
                        classificationResult.predictedClass === 'Normal Legs') && (
                        <button type="button" onClick={handleViewTreatment} className="viewTreatmentButton">
                          View Treatment
                        </button>
                      )}
                      {(classificationResult.predictedClass !== 'Varicose Veins' &&
                        classificationResult.predictedClass !== 'Spider Veins' &&
                        classificationResult.predictedClass !== 'Normal Legs') && (
                        <div>
                          <p>The image you uploaded cannot be defined as a leg image.</p>
                          <p>Please upload a suitable image for classification.</p>
                        </div>
                      )}
                    </div>
                  )}

          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default Home;
