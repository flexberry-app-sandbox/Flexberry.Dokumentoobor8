import {
  defineNamespace,
  defineProjections,
  Model as ХрДокMixin
} from '../mixins/regenerated/models/i-i-s-dokumentoobor8-хр-док';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ХрДокMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
