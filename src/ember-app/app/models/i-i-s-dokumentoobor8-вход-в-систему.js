import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ВходВСистемуMixin
} from '../mixins/regenerated/models/i-i-s-dokumentoobor8-вход-в-систему';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ВходВСистемуMixin, Validations, {
});

defineProjections(Model);

export default Model;
