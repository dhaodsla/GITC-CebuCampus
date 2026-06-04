/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CampType } from './types';
import { campInfo } from './data';
import { useLocalStorage } from './hooks/useLocalStorage';
import CampSelector from './components/CampSelector';
import Header from './components/Header';
import TopScrollNav, { TabType } from './components/TopScrollNav';
import HomeView from './views/HomeView';
import ChecklistView from './views/ChecklistView';
import PackingView from './views/PackingView';
import ETravelView from './views/ETravelView';
import AirportDocView from './views/AirportDocView';
import CautionView from './views/CautionView';
import FaqView from './views/FaqView';
import ContactView from './views/ContactView';
import { Phone } from 'lucide-react';

export default function App() {
  const [campType, setCampType] = useLocalStorage<CampType>('selectedCampType', null);
  const [activeTab, setActiveTab] = useState<TabType>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  if (!campType) {
    return <CampSelector onSelect={setCampType} />;
  }

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView campType={campType} onNavigate={setActiveTab} />;
      case 'dday':
        return <ChecklistView campType={campType} />;
      case 'packing':
        return <PackingView campType={campType} />;
      case 'etravel':
        return <ETravelView campType={campType} />;
      case 'airport':
        return <AirportDocView campType={campType} />;
      case 'caution':
        return <CautionView campType={campType} />;
      case 'faq':
        return <FaqView campType={campType} />;
      case 'contact':
        return <ContactView campType={campType} />;
      default:
        return <HomeView campType={campType} onNavigate={setActiveTab} />;
    }
  };

  const handleResetCamp = () => {
    setCampType(null);
    setActiveTab('home');
  };

  return (
    <div className="min-h-screen bg-slate-50 relative max-w-3xl mx-auto border-x border-slate-100 font-sans">
      <Header 
        campType={campType} 
        onChangeCamp={handleResetCamp}
        appTitle={campInfo.appTitle}
      />
      
      <TopScrollNav 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        colorScheme={campType === 'junior' ? 'teal' : 'sky'} 
      />
      
      <main className="w-full relative pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>

        {/* Footer info */}
        <footer className="text-center py-10 pb-16 text-slate-400 text-xs font-medium space-y-1">
          <p>최종 업데이트: 2026.06.04</p>
          <p>항공 일정 및 미팅 장소는 확정 후 별도 안내됩니다.</p>
        </footer>
      </main>

      {/* Floating Action Button for Emergency Contact */}
      {activeTab !== 'contact' && (
        <a 
          href={`tel:${campInfo.emergencyContacts[0].phone}`}
          className={`fixed bottom-6 right-6 z-50 shadow-lg p-4 rounded-full flex items-center justify-center transition-transform hover:scale-105 active:scale-95 ${campType === 'junior' ? 'bg-teal-600' : 'bg-sky-600'} text-white`}
        >
          <Phone className="w-6 h-6 fill-white" />
        </a>
      )}
    </div>
  );
}


