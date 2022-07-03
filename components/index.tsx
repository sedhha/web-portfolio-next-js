import React from 'react';
import TopNavigation from '@/components/NavItem';
import TopView from '@/components/TopView';
type Props = {};

export default function Index({}: Props) {
  return (
    <React.Fragment>
      <TopNavigation />
      <TopView />
    </React.Fragment>
  );
}
