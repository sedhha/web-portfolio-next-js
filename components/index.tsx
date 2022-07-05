import React from 'react';
import TopNavigation from '@/components/NavItem';
import TopView from '@/components/TopView';
import MainSection from '@/components/MainSection';
import Footer from '@/components/Footer';

type Props = {};

export default function Index({}: Props) {
  return (
    <React.Fragment>
      <TopNavigation />
      <TopView />
      <MainSection />
      <Footer />
    </React.Fragment>
  );
}
