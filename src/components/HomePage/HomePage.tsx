import React, { FC } from 'react';
import './HomePage.scss';
import Calendar from '../Calendar/Calendar';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  <div className="HomePage">
  </div>
  return <Calendar></Calendar>
};

export default HomePage;
