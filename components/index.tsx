import React from 'react';
import TopNavigation from '@/components/NavItem';
import TopView from '@/components/TopView';
import MainSection from '@/components/MainSection';
import Footer from '@/components/Footer';
import analyticsEvents, {
  AVAILABLE_EVENT_TYPES,
  eventTypes,
} from '@/utils/analytics';

export default function Index() {
  React.useEffect(() => {
    analyticsEvents.logPageEvents(
      eventTypes.HOME_PAGE_LOADED as AVAILABLE_EVENT_TYPES
    );
  }, []);
  return (
    <React.Fragment>
      <TopNavigation />
      <TopView />
      <MainSection />
      <Footer />
    </React.Fragment>
  );
}
