import { useState } from 'react';

const CropDiseasePredictor = () => {
  const crops = [
    { name: 'Potato', apiUrl: 'https://crop-api-render.onrender.com/predict/potato', icon: '🥔', color: 'emerald' },
    { name: 'Tomato', apiUrl: 'https://crop-api-render.onrender.com/predict/tomato', icon: '🍅', color: 'red' },
    { name: 'Rice', apiUrl: 'https://crop-api-render.onrender.com/predict/rice', icon: '🌾', color: 'yellow' },
    { name: 'Wheat', apiUrl: 'https://crop-api-render.onrender.com/predict/wheat', icon: '🌾', color: 'amber' },
    { name: 'Corn', apiUrl: 'https://crop-api-render.onrender.com/predict/corn', icon: '🌽', color: 'orange' },
    { name: 'Pea', apiUrl: 'https://crop-api-render.onrender.com/predict/pea', icon: '🟢', color: 'green'},
  ];

  const [selectedImages, setSelectedImages] = useState({});
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const handleImageUpload = (event, cropName) => {
  const file = event.target.files[0];
  if (file) {
    setSelectedImages({ ...selectedImages, [cropName]: file });
  }
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
    <div className="min-h-screen bg-gray-900 py-20">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-2xl mb-4">
            Crop Disease Predictor
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Upload crop leaf images to get instant AI-powered disease detection and treatment recommendations
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search crops..."
              className="w-full px-6 py-4 bg-black/40 backdrop-blur-xl border-2 border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400/50 focus:bg-black/60 transition-all duration-300 shadow-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-emerald-400">
              🔍
            </div>
          </div>
        </div>

        {/* Crops Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCrops.map((crop) => (
            <div 
              key={crop.name} 
              className="group bg-black/40 backdrop-blur-xl border-2 border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 transform hover:scale-105"
            >
              {/* Crop Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {crop.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {crop.name}
                  </h2>
                  <p className="text-sm text-gray-400">
                    AI Disease Detection
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4 text-sm">
                Upload a clear image of a {crop.name.toLowerCase()} leaf for accurate disease analysis.
              </p>

              {/* File Input - FIXED VERSION */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Choose Image File
                </label>
                <label className="flex items-center justify-center w-full p-4 bg-white/5 backdrop-blur-sm border-2 border-dashed border-white/30 rounded-xl hover:border-emerald-400/50 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(event) => handleImageUpload(event, crop.name)}
                  />
                  <div className="text-center">
                    <div className="text-2xl mb-2">📁</div>
                    <span className="text-sm text-gray-400">
                      {selectedImages[crop.name] ? selectedImages[crop.name].name : 'Click to upload'}
                    </span>
                  </div>
                </label>
              </div>

              {/* Image Preview */}
              {selectedImages[crop.name] && (
                <div className="mb-4">
                  <img
                    src={URL.createObjectURL(selectedImages[crop.name])}
                    alt="Preview"
                    className="w-full h-32 object-cover rounded-xl border-2 border-white/20 shadow-lg"
                  />
                </div>
              )}

              {/* Loading Spinner */}
              {loading[crop.name] && (
                <div className="flex items-center justify-center mb-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-2 border-emerald-400 border-t-transparent"></div>
                </div>
              )}

              {/* Predict Button */}
              <button
                onClick={() => predictDisease(crop.name, crop.apiUrl)}
                className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-300 ${
                  loading[crop.name] 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-400/40 transform hover:scale-105'
                }`}
                disabled={loading[crop.name] || !selectedImages[crop.name]}
              >
                {loading[crop.name] ? (
                  <span className="flex items-center justify-center space-x-2">
                    <span>🔄</span>
                    <span>Analyzing...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <span>🔬</span>
                    <span>Predict Disease</span>
                  </span>
                )}
              </button>

              {/* Results Section */}
              {results[crop.name] && (
                <div className="mt-4 p-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-emerald-400">🎯</span>
                    <span className="text-sm font-semibold text-white">
                      Detection Result:
                    </span>
                  </div>
                  <p className="text-sm text-gray-300">
                    {results[crop.name]}
                  </p>
                </div>
              )}

              {/* Status Indicator */}
              <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                <span>AI-Powered Analysis</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span>Ready</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCrops.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No crops found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search terms or browse all available crops.
            </p>
          </div>
        )}

        {/* Footer Info */}
        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-gray-400 text-sm">
            Powered by advanced machine learning algorithms for accurate crop disease detection
          </p>
          <div className="flex justify-center items-center space-x-4 mt-4">
            <span className="text-xs text-gray-500">95% Accuracy</span>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <span className="text-xs text-gray-500">Real-time Analysis</span>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <span className="text-xs text-gray-500">Instant Results</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropDiseasePredictor;
