
import * as OrderedCollectionStore from 'odyssee-client/lib/businessLogic/OrderedCollectionStore';
import * as CollectionStore from 'odyssee-client/lib/businessLogic/CollectionStore';
import * as RecordStore from 'odyssee-client/lib/businessLogic/RecordStore';

import * as RecordFormWidget from 'odyssee-client/lib/businessLogic/RecordFormWidget';
import * as RecordDisplayWidget from 'odyssee-client/lib/businessLogic/RecordDisplayWidget';
import * as FormSubmitWidget from 'odyssee-client/lib/businessLogic/FormSubmitWidget';
import * as CollectionListWidget from 'odyssee-client/lib/businessLogic/CollectionListWidget';


import * as ScoreFormWidget from 'odyssee-client/lib/businessLogic/ScoreFormWidget';
import * as NewRecordWidget from 'odyssee-client/lib/businessLogic/NewRecordWidget';
import * as ParticipantsEditWidget from 'odyssee-client/lib/businessLogic/ParticipantsEditWidget';
import * as WeatherCheckWidget from 'odyssee-client/lib/businessLogic/WeatherCheckWidget';
import * as AreWeOpenWidget from 'odyssee-client/lib/businessLogic/AreWeOpenWidget';

import Outlet from 'odyssee-client/lib/core/components/Outlet';
import TextWidget from 'odyssee-client/lib/core/components/widgets/TextWidget';
import ApplicationMenuWidget from
  'odyssee-client/lib/core/components/widgets/ApplicationMenuWidget';
import MobileApplicationMenuWidget
  from 'odyssee-client/lib/core/components/widgets/MobileApplicationMenuWidget';
import ApplicationNavbarWidget from
  'odyssee-client/lib/core/components/widgets/ApplicationNavbarWidget';
import MenuWidget from 'odyssee-client/lib/core/components/widgets/MenuWidget';
import HeaderWidget from 'odyssee-client/lib/core/components/widgets/HeaderWidget';

import NotFoundWidget from 'odyssee-client/lib/core/components/contrib/NotFoundWidget';

export default {
  stores: {
    OrderedCollectionStore,
    CollectionStore,
    RecordStore,
  },
  widgets: {
    RecordFormWidget,
    RecordDisplayWidget,

    ScoreFormWidget,
    // ScoreCollectionNavbarWidget,
    NewRecordWidget,
    FormSubmitWidget,
    ParticipantsEditWidget,
    WeatherCheckWidget,
    AreWeOpenWidget,
    CollectionListWidget,

    OutletWidget: { Component: Outlet },
    TextWidget: { Component: TextWidget },
    HeaderWidget: { Component: HeaderWidget },
    MobileApplicationMenuWidget: { Component: MobileApplicationMenuWidget },
    ApplicationMenuWidget: { Component: ApplicationMenuWidget },
    ApplicationNavbarWidget: { Component: ApplicationNavbarWidget },
    MenuWidget: { Component: MenuWidget },

    NotFoundWidget: { Component: NotFoundWidget },
  },
};
