import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧУтвержДокMixin
} from '../mixins/regenerated/models/i-i-s-dokumentoobor8-т-ч-утверж-док';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧУтвержДокMixin, Validations, {
});

defineProjections(Model);

export default Model;
