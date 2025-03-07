import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
import '../assets/css/interest.css'

const InterestPage = () => {
  const [interests, setInterests] = useState({
    shopping: '',
    hobbies: '',
    travel: '',
    foodPreferences: '',
    monthlySpending: '',
  });
  const [isShoppingPopupOpen, setIsShoppingPopupOpen] = useState(false);
  const [isHobbiesPopupOpen, setIsHobbiesPopupOpen] = useState(false);
  const [isTravelPopupOpen, setIsTravelPopupOpen] = useState(false);
  const [isFoodPopupOpen, setIsFoodPopupOpen] = useState(false);
  
  const [selectedShoppingBrands, setSelectedShoppingBrands] = useState([]);
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [selectedTravel, setSelectedTravel] = useState([]);
  const [selectedFood, setSelectedFood] = useState([]);

  const location = useLocation();
  const formData = location.state?.formData || {};
  const navigate = useNavigate();

  // Example options for each category
  const shoppingBrands = [
    'Zara', 'H&M', 'Nike', 'Adidas', 'Puma', 'Levi’s', 'Gucci', 'Chanel',
    'Mango', 'Burberry', 'Louis Vuitton', 'Hermès'
  ];

  const hobbiesOptions = [
    'Reading', 'Gaming', 'Traveling', 'Cooking', 'Photography', 'Music', 'Gardening'
  ];

  const travelOptions = [
    'Beach', 'Hills', 'Mountains', 'Deserts', 'City', 'Countryside'
  ];

  const foodOptions = [
    'Vegetarian', 'Non-Vegetarian', 'Eggetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInterests({
      ...interests,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    const completeData = {
      ...formData,
      ...interests,
    };

    try {
      // await axios.post('http://localhost:3000/api/register', completeData);

      console.log('Data saved successfully:', completeData);
      navigate('/login'); 
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const toggleTagSelection = (brand, selectedList, setSelectedList) => {
    if (selectedList.includes(brand)) {
      setSelectedList(selectedList.filter((b) => b !== brand));
    } else {
      setSelectedList([...selectedList, brand]);
    }
  };

  const handlePopupDone = (selectedList, setSelectedList, fieldName) => {
    setInterests({
      ...interests,
      [fieldName]: selectedList.join(', '),
    });
    setSelectedList([]); 
    setIsShoppingPopupOpen(false); 
    setIsHobbiesPopupOpen(false);
    setIsTravelPopupOpen(false);
    setIsFoodPopupOpen(false);
    // handleRegister();
  };

  return (
    <div className='interest-container'>
        <div className="register-page">
          <h2>Register (Step 2)</h2>
          <form>
            <label>Shopping Preferences (Top Brands):</label>
            <input
              type="text"
              name="shopping"
              value={interests.shopping}
              onClick={() => setIsShoppingPopupOpen(true)} 
              readOnly
            />
        
            <label>Hobbies:</label>
            <input
              type="text"
              name="hobbies"
              value={interests.hobbies}
              onClick={() => setIsHobbiesPopupOpen(true)} 
              readOnly
            />
        
            <label>Travel Interests:</label>
            <input
              type="text"
              name="travel"
              value={interests.travel}
              onClick={() => setIsTravelPopupOpen(true)} 
              readOnly
            />
        
            <label>Food Preferences:</label>
            <input
              type="text"
              name="foodPreferences"
              value={interests.foodPreferences}
              onClick={() => setIsFoodPopupOpen(true)} 
              readOnly
            />
        
            <label>Monthly Spending (Leisure & Shopping):</label>
            <input type="text" name="monthlySpending" value={interests.monthlySpending} onChange={handleChange} />
        
            <button type="button" onClick={handleRegister}>Register</button>
          </form>
        
          {/* Shopping Brands Popup */}
          {isShoppingPopupOpen && (
            <div className="popup-overlay">
              <div className="popup-content">
                <button className="popup-close" onClick={() => setIsShoppingPopupOpen(false)}>×</button>
                <h3>Select Shopping Brands</h3>
                <div>
                  {shoppingBrands.map((brand) => (
                    <span
                      key={brand}
                      className={`tag ${selectedShoppingBrands.includes(brand) ? 'tag-selected' : 'tag-unselected'}`}
                      onClick={() => toggleTagSelection(brand, selectedShoppingBrands, setSelectedShoppingBrands)}
                    >
                      {brand}
                    </span>
                  ))}
                </div>
                <button className="done-button" onClick={() => handlePopupDone(selectedShoppingBrands, setSelectedShoppingBrands, 'shopping')}>Done</button>
              </div>
            </div>
          )}
        
          {/* Hobbies Popup */}
          {isHobbiesPopupOpen && (
            <div className="popup-overlay">
              <div className="popup-content">
                <button className="popup-close" onClick={() => setIsHobbiesPopupOpen(false)}>×</button>
                <h3>Select Hobbies</h3>
                <div>
                  {hobbiesOptions.map((hobby) => (
                    <span
                      key={hobby}
                      className={`tag ${selectedHobbies.includes(hobby) ? 'tag-selected' : 'tag-unselected'}`}
                      onClick={() => toggleTagSelection(hobby, selectedHobbies, setSelectedHobbies)}
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
                <button className="done-button" onClick={() => handlePopupDone(selectedHobbies, setSelectedHobbies, 'hobbies')}>Done</button>
              </div>
            </div>
          )}
        
          {/* Travel Interests Popup */}
          {isTravelPopupOpen && (
            <div className="popup-overlay">
              <div className="popup-content">
                <button className="popup-close" onClick={() => setIsTravelPopupOpen(false)}>×</button>
                <h3>Select Travel Interests</h3>
                <div>
                  {travelOptions.map((option) => (
                    <span
                      key={option}
                      className={`tag ${selectedTravel.includes(option) ? 'tag-selected' : 'tag-unselected'}`}
                      onClick={() => toggleTagSelection(option, selectedTravel, setSelectedTravel)}
                    >
                      {option}
                    </span>
                  ))}
                </div>
                <button className="done-button" onClick={() => handlePopupDone(selectedTravel, setSelectedTravel, 'travel')}>Done</button>
              </div>
            </div>
          )}
        
          {/* Food Preferences Popup */}
          {isFoodPopupOpen && (
            <div className="popup-overlay">
              <div className="popup-content">
                <button className="popup-close" onClick={() => setIsFoodPopupOpen(false)}>×</button>
                <h3>Select Food Preferences</h3>
                <div>
                  {foodOptions.map((option) => (
                    <span
                      key={option}
                      className={`tag ${selectedFood.includes(option) ? 'tag-selected' : 'tag-unselected'}`}
                      onClick={() => toggleTagSelection(option, selectedFood, setSelectedFood)}
                    >
                      {option}
                    </span>
                  ))}
                </div>
                <button className="done-button" onClick={() => handlePopupDone(selectedFood, setSelectedFood, 'foodPreferences')}>Done</button>
              </div>
            </div>
          )}
        </div>
    </div>
  );
};

export default InterestPage;
