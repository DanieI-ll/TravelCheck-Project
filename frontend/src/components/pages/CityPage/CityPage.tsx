import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import axios from 'axios';
import styles from './CityPage.module.css';

type City = {
  _id: string;
  name: string;
  image: string;
};

const CityPage = () => {
  const [cities, setCities] = useState<City[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/cities`);
        setCities(res.data);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCities();
  }, []);

  const goToCityDetail = (cityId: string) => {
    navigate(`/city/${cityId}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <Typewriter words={['Choose City', 'Plan', 'Discover']} loop cursor cursorStyle="|" typeSpeed={70} deleteSpeed={50} delaySpeed={1500} />
      </h1>
      <div className={styles.cardGrid}>
        {cities.map((city) => (
          <div key={city._id} className={styles.card} onClick={() => goToCityDetail(city._id)}>
            <img src={city.image} alt={city.name} className={styles.cardImage} />
            <div className={styles.cardName}>{city.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityPage;
