import styles from './HomePage.module.css';
import { Typewriter } from 'react-simple-typewriter';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <Typewriter words={['Welcome to TravelCheck', 'Plan Your Adventure', 'Discover New Places']} loop cursor cursorStyle="|" typeSpeed={70} deleteSpeed={50} delaySpeed={1500} />
      </h1>
      <p className={styles.subtitle}>Discover the best places to visit around the world. Choose a city, explore top spots, and plan your next adventure with ease.</p>
    </div>
  );
};

export default HomePage;
