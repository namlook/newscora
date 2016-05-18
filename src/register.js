
import * as OrderedCollectionStore from 'odyssee-client/lib/stores/OrderedCollectionStore';
import * as CollectionStore from 'odyssee-client/lib/stores/CollectionStore';
import * as RecordStore from 'odyssee-client/lib/stores/RecordStore';

import * as RecordFormWidget from 'odyssee-client/lib/components/contrib/RecordFormWidget';
import * as RecordDisplayWidget from 'odyssee-client/lib/components/contrib/RecordDisplayWidget';
import * as CollectionListWidget from 'odyssee-client/lib/components/contrib/CollectionListWidget';


// import * as ScoreFormWidget from 'odyssee-client/lib/businessLogic/ScoreFormWidget';
// import * as NewRecordWidget from 'odyssee-client/lib/businessLogic/NewRecordWidget';
// import * as ParticipantsEditWidget from
// 'odyssee-client/lib/businessLogic/ParticipantsEditWidget';
// import * as WeatherCheckWidget from 'odyssee-client/lib/businessLogic/WeatherCheckWidget';
// import * as AreWeOpenWidget from 'odyssee-client/lib/businessLogic/AreWeOpenWidget';
// import * as FormSubmitWidget from 'odyssee-client/lib/components/contrib/FormSubmitWidget';

import OutletWidget from 'odyssee-client/lib/components/widgets/OutletWidget';
import TextWidget from 'odyssee-client/lib/components/widgets/TextWidget';
import ApplicationMenuWidget from 'odyssee-client/lib/components/widgets/ApplicationMenuWidget';
import MobileApplicationMenuWidget
  from 'odyssee-client/lib/components/widgets/MobileApplicationMenuWidget';
import ApplicationNavbarWidget from 'odyssee-client/lib/components/widgets/ApplicationNavbarWidget';
import MenuWidget from 'odyssee-client/lib/components/widgets/MenuWidget';
import HeaderWidget from 'odyssee-client/lib/components/widgets/HeaderWidget';

import NotFoundWidget from 'odyssee-client/lib/components/contrib/NotFoundWidget';


import * as HallOfFameWidget from './components/HallOfFameWidget';
import * as ChartWidget from './components/ChartWidget';
import * as ScoreNewWidget from './components/ScoreNewWidget';
import * as ParticipantsEditWidget from './components/ParticipantsEditWidget';


export default {
  stores: {
    OrderedCollectionStore,
    CollectionStore,
    RecordStore,
  },
  widgets: {
    HallOfFameWidget,
    ChartWidget,
    ScoreNewWidget,
    ParticipantsEditWidget,

    RecordFormWidget,
    RecordDisplayWidget,
    CollectionListWidget,

    // ScoreFormWidget,
    // ScoreCollectionNavbarWidget,
    // NewRecordWidget,
    // FormSubmitWidget,
    // WeatherCheckWidget,
    // AreWeOpenWidget,

    OutletWidget: { Component: OutletWidget },
    TextWidget: { Component: TextWidget },
    HeaderWidget: { Component: HeaderWidget },
    MobileApplicationMenuWidget: { Component: MobileApplicationMenuWidget },
    ApplicationMenuWidget: { Component: ApplicationMenuWidget },
    ApplicationNavbarWidget: { Component: ApplicationNavbarWidget },
    MenuWidget: { Component: MenuWidget },

    NotFoundWidget: { Component: NotFoundWidget },
  },
};
