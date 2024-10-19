"use client";

import React, { useState } from 'react';
import styles from './home.module.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';


const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  return (
    <div>
      This is Home Page !!!!!!!!!!!!
    </div>
  );
};

export default Home;
