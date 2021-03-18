import React from 'react';

import DateTime from '~src/components/DateTime/DateTime';
import TimeZone from '~src/components/TimeZone/TimeZone';
import SynchronizeTimeZoneButton from '../SynchronizeTimeZoneButton/SynchronizeTimeZoneButton';
import Container from '~src/ui/Container/Container';
import H1 from '~src/ui/H1/H1';
import H2 from '~src/ui/H2/H2';
import TimesWrapper from '~src/ui/TimesWrapper/TimesWrapper';
import TimesZonesWrapper from '~src/ui/TimesZonesWrapper/TimesZonesWrapper';

export default function App() {

  return (
    <Container>
      <H1>Current Date</H1>
      <TimesWrapper>
        <TimesZonesWrapper>
          <H2>Time Zone</H2>
          <TimeZone />
        </TimesZonesWrapper>
        <TimesZonesWrapper>
          <H2>Date Time</H2>
          <DateTime />
        </TimesZonesWrapper>
      </TimesWrapper>
      <SynchronizeTimeZoneButton />
    </Container>
  );
}
