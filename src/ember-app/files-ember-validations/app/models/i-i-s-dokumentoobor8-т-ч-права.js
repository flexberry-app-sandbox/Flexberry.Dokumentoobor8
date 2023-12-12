import {
  defineNamespace,
  defineProjections,
  Model as ТЧПраваMixin
} from '../mixins/regenerated/models/i-i-s-dokumentoobor8-т-ч-права';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧПраваMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
