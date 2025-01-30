
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';


const CropDiseasePredictor = () => {
  const crops = [
    { name: 'Potato', apiUrl: 'https://potato-disease-api-9cqs.onrender.com/predict' },
    { name: 'Tomato', apiUrl: 'https://tomato-disease-api.onrender.com/predict' },
    { name: 'Rice', apiUrl: 'https://crop-rice-disease-api.onrender.com/predict' },
    { name: 'Wheat', apiUrl: 'https://wheat-disease-api.onrender.com/predict' },
    { name: 'Corn', apiUrl: 'https://corn-disease-api.onrender.com/predict' },
    { name: 'Pea', apiUrl: 'https://pea-disease-api.onrender.com/predict'},
  ];

  const [selectedImages, setSelectedImages] = useState({});
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const handleImageUpload = (event, cropName) => {
    const file = event.target.files[0];
    setSelectedImages({ ...selectedImages, [cropName]: file });
  };

  const predictDisease = (cropName, apiUrl) => {
    const imageFile = selectedImages[cropName];
    if (!imageFile) return;

    setLoading({ ...loading, [cropName]: true });

    const formData = new FormData();
    formData.append('file', imageFile);

    fetch(apiUrl, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setResults({ ...results, [cropName]: data.disease });
      })
      .catch(() => {
        setResults({ ...results, [cropName]: 'Error predicting disease' });
      })
      .finally(() => {
        setLoading({ ...loading, [cropName]: false });
      });
  };

  const filteredCrops = crops.filter((crop) =>
    crop.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 mb-7">
      <h1 className="text-center my-8 text-2xl font-bold text-white">Crop Disease Predictor</h1>

      <div className=" mb-6">
        <input
          type="text"
          placeholder="Search for..."
          className="w-full px-4 py-2 text-black border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredCrops.map((crop) => (
          <div key={crop.name} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">{crop.name}</h2>
            <p className="text-gray-700 mb-4">Upload an image of a {crop.name.toLowerCase()} leaf.</p>
            <input
              type="file"
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept="image/*"
              onChange={(event) => handleImageUpload(event, crop.name)}
            />
            {selectedImages[crop.name] && (
              <img
                src={URL.createObjectURL(selectedImages[crop.name])}
                alt="Preview"
                className="w-full h-32 object-cover mt-4 rounded-lg"
              />
            )}
            {loading[crop.name] && <div className="loader mt-4" />}
            <button
              onClick={() => predictDisease(crop.name, crop.apiUrl)}
              className={`mt-4 px-4 py-2 text-white font-semibold rounded-lg ${loading[crop.name] ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
              disabled={loading[crop.name]}
            >
              {loading[crop.name] ? 'Predicting...' : 'Predict Disease'}
            </button>
            <div className="mt-4 text-sm text-gray-800">
              {results[crop.name] && <p>{`Disease: ${results[crop.name]}`}</p>}
            </div>
          </div>
        ))}
      </div>
      
    </div>
    
  );
};

export default CropDiseasePredictor;

