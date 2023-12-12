import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ФормаДокументаMixin
} from '../mixins/regenerated/models/i-i-s-dokumentoobor8-форма-документа';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ФормаДокументаMixin, Validations, {
});

defineProjections(Model);

export default Model;
