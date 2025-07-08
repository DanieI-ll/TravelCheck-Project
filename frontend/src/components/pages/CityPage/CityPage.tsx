import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    fetch('/api/cities')
      .then((res) => res.json())
      .then(setCities);
  }, []);

  const goToCityDetail = (cityId: string) => {
    navigate(`/city/${cityId}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Explore Cities</h1>
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
