import { useState } from 'react';

// Import componets 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import GetInvolved from '.componenets/GetInvolved';
import WalkStats from './components/WalkStats';
import EventBand from './components/EventBand';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';

export default function App() {

  const [modalType, setModalType] = useState(null);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null)

  return (
    <>
      <div className='top' />
      <Navbar onRegister={() => openModal('participant')} />
      <Hero onRegister={() => openModal('participant')} />
      <About />
      <GetInvolved onOpen={openModal} />
      <WalkStats />
      <EventBand onRegister={() => openModal('participant')} />
      <Footer />
      {modalType && 
        <RegisterModal 
          type={modalType} 
          onClose={closeModal} 
        />
      }
    </>
  );
}

