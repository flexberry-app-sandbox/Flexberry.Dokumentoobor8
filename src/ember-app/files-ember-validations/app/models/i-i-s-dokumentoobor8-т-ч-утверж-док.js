import {
  defineNamespace,
  defineProjections,
  Model as ТЧУтвержДокMixin
} from '../mixins/regenerated/models/i-i-s-dokumentoobor8-т-ч-утверж-док';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧУтвержДокMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
