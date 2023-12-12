import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  утверждение: DS.attr('i-i-s-dokumentoobor8-утверждение'),
  авПользователи: DS.belongsTo('i-i-s-dokumentoobor8-ав-пользователи', { inverse: null, async: false }),
  формаДокумента: DS.belongsTo('i-i-s-dokumentoobor8-форма-документа', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-утверждение-док.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  утверждение: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-утверждение-док.validations.утверждение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  авПользователи: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-утверждение-док.validations.авПользователи.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  формаДокумента: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-утверждение-док.validations.формаДокумента.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УтверждениеДокE', 'i-i-s-dokumentoobor8-утверждение-док', {
    дата: attr('Дата утверждения', { index: 0 }),
    утверждение: attr('Статус', { index: 1 }),
    формаДокумента: belongsTo('i-i-s-dokumentoobor8-форма-документа', 'Форма документа', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' }),
    авПользователи: belongsTo('i-i-s-dokumentoobor8-ав-пользователи', 'Ав пользователи', {
      iDПользователя: attr('ID Пользователя', { index: 5 }),
      сотрудники: belongsTo('i-i-s-dokumentoobor8-сотрудники', '', {
        фИОСотрудника: attr('ФИО Сотрудника', { index: 6 })
      }, { index: -1, hidden: true })
    }, { index: 4, displayMemberPath: 'iDПользователя' })
  });

  modelClass.defineProjection('УтверждениеДокL', 'i-i-s-dokumentoobor8-утверждение-док', {
    дата: attr('Дата утверждения', { index: 0 }),
    утверждение: attr('Статус', { index: 1 }),
    формаДокумента: belongsTo('i-i-s-dokumentoobor8-форма-документа', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true }),
    авПользователи: belongsTo('i-i-s-dokumentoobor8-ав-пользователи', 'ID Пользователя', {
      iDПользователя: attr('ID Пользователя', { index: 3 }),
      сотрудники: belongsTo('i-i-s-dokumentoobor8-сотрудники', '', {
        фИОСотрудника: attr('ФИО Сотрудника', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
