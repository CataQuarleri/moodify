import React from 'react';
import MainListPost from '../components/Main/MainListPost';
import MainMoodForm from '../components/Main/MainMoodForm';
function MainPage() {
  return (
    <div>
      <MainMoodForm />
      <MainListPost />
    </div>
  );
}

export default MainPage;
