import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  утверждениеДок: DS.belongsTo('i-i-s-dokumentoobor8-утверждение-док', { inverse: null, async: false }),
  хрДок: DS.belongsTo('i-i-s-dokumentoobor8-хр-док', { inverse: 'тЧУтвержДок', async: false })
});

export let ValidationRules = {
  утверждениеДок: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-т-ч-утверж-док.validations.утверждениеДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  хрДок: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-т-ч-утверж-док.validations.хрДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧУтвержДокE', 'i-i-s-dokumentoobor8-т-ч-утверж-док', {
    утверждениеДок: belongsTo('i-i-s-dokumentoobor8-утверждение-док', 'Утверждение док', {
      дата: attr('Дата', { index: 1, hidden: true }),
      формаДокумента: belongsTo('i-i-s-dokumentoobor8-форма-документа', '', {
        наименование: attr('Наименование', { index: 2 })
      }, { index: -1, hidden: true }),
      утверждение: attr('Статус', { index: 3 })
    }, { index: 0, displayMemberPath: 'дата' })
  });
};
