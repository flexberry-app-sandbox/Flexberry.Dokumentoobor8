import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  формаДокумента: DS.belongsTo('i-i-s-dokumentoobor8-форма-документа', { inverse: null, async: false }),
  хрДок: DS.belongsTo('i-i-s-dokumentoobor8-хр-док', { inverse: 'тЧСоздДок', async: false })
});

export let ValidationRules = {
  формаДокумента: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-т-ч-созд-док.validations.формаДокумента.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  хрДок: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-т-ч-созд-док.validations.хрДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧСоздДокE', 'i-i-s-dokumentoobor8-т-ч-созд-док', {
    формаДокумента: belongsTo('i-i-s-dokumentoobor8-форма-документа', 'Форма документа', {
      дата: attr('Дата заполнения', { index: 1 }),
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 0, displayMemberPath: 'наименование' })
  });
};
