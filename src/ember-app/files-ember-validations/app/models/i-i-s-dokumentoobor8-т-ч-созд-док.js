import {
  defineNamespace,
  defineProjections,
  Model as ТЧСоздДокMixin
} from '../mixins/regenerated/models/i-i-s-dokumentoobor8-т-ч-созд-док';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧСоздДокMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
