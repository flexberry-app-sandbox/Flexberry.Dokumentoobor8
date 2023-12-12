import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаСохранения: DS.attr('date', { defaultValue() { return new Date(); } }),
  тЧСоздДок: DS.hasMany('i-i-s-dokumentoobor8-т-ч-созд-док', { inverse: 'хрДок', async: false }),
  тЧУтвержДок: DS.hasMany('i-i-s-dokumentoobor8-т-ч-утверж-док', { inverse: 'хрДок', async: false })
});

export let ValidationRules = {
  датаСохранения: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-хр-док.validations.датаСохранения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  тЧСоздДок: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-хр-док.validations.тЧСоздДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  тЧУтвержДок: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-хр-док.validations.тЧУтвержДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокументНеУтE', 'i-i-s-dokumentoobor8-хр-док', {
    датаСохранения: attr('Дата сохранения', { index: 0 }),
    тЧСоздДок: hasMany('i-i-s-dokumentoobor8-т-ч-созд-док', 'Т ч созд док', {
      формаДокумента: belongsTo('i-i-s-dokumentoobor8-форма-документа', 'Форма документа', {
        дата: attr('Дата заполнения', { index: 1 }),
        наименование: attr('Наименование', { index: 2, hidden: true })
      }, { index: 0, displayMemberPath: 'наименование' })
    }),
    тЧУтвержДок: hasMany('i-i-s-dokumentoobor8-т-ч-утверж-док', 'Т ч утверж док', {
      утверждениеДок: belongsTo('i-i-s-dokumentoobor8-утверждение-док', 'Утверждение док', {
        дата: attr('Дата', { index: 1, hidden: true }),
        формаДокумента: belongsTo('i-i-s-dokumentoobor8-форма-документа', '', {
          наименование: attr('Наименование', { index: 2 })
        }, { index: -1, hidden: true }),
        утверждение: attr('Статус', { index: 3 })
      }, { index: 0, displayMemberPath: 'дата' })
    })
  });

  modelClass.defineProjection('ДокументНеУтL', 'i-i-s-dokumentoobor8-хр-док', {
    датаСохранения: attr('Дата сохранения', { index: 0 })
  });
};
