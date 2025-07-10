import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './CityDetails.module.css';

type TopPlace = {
  name: string;
  description: string;
  image: string;
};

type CityDetail = {
  _id: string;
  name: string;
  image: string;
  topPlaces: TopPlace[];
};

const CityDetails = () => {
  const { id } = useParams();
  const [city, setCity] = useState<CityDetail | null>(null);

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/cities/${id}`);
        setCity(res.data);
      } catch (error) {
        console.error('Error fetching city:', error);
      }
    };

    fetchCity();
  }, [id]);

  if (!city) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.container}>
      <img src={city.image} alt={city.name} className={styles.cityImage} />

      <h2 className={styles.subTitle}>Top 3 Places to Visit</h2>
      <ul className={styles.placesList}>
        {city.topPlaces.map((place, index) => (
          <li key={index} className={styles.placeItem}>
            <img src={place.image} alt={place.name} className={styles.placeImage} />
            <div>
              <strong>{place.name}</strong>
              <br />
              {place.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityDetails;
