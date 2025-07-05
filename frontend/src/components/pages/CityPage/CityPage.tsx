import { useEffect, useState } from 'react';
import styles from './CityPage.module.css';

type City = {
  _id: string;
  name: string;
  image: string;
};

type TopPlace = {
  name: string;
  description: string;
};

type CityDetail = {
  _id: string;
  name: string;
  image: string;
  topPlaces: TopPlace[];
};

const CityPage = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<CityDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Örnek API çağrısı
    fetch('/api/cities')
      .then((res) => res.json())
      .then(setCities);
  }, []);

  const openCityModal = async (cityId: string) => {
    const res = await fetch(`/api/cities/${cityId}`);
    const data: CityDetail = await res.json();
    setSelectedCity(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCity(null);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Explore Cities</h1>
      <div className={styles.cardGrid}>
        {cities.map((city) => (
          <div key={city._id} className={styles.card} onClick={() => openCityModal(city._id)}>
            <img src={city.image} alt={city.name} className={styles.cardImage} />
            <div className={styles.cardName}>{city.name}</div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedCity && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>Top Places in {selectedCity.name}</h2>
            <ul>
              {selectedCity.topPlaces.map((place, index) => (
                <li key={index}>
                  <strong>{place.name}</strong>: {place.description}
                </li>
              ))}
            </ul>
            <button className={styles.closeBtn} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CityPage;
