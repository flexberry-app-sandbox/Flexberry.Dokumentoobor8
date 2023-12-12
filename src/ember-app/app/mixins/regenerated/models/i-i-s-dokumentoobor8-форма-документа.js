import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  наименование: DS.attr('string'),
  отделы: DS.attr('i-i-s-dokumentoobor8-отделы'),
  содержание: DS.attr('string'),
  авПользователи: DS.belongsTo('i-i-s-dokumentoobor8-ав-пользователи', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-форма-документа.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-форма-документа.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отделы: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-форма-документа.validations.отделы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  содержание: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-форма-документа.validations.содержание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  авПользователи: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-форма-документа.validations.авПользователи.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормаДокументаE', 'i-i-s-dokumentoobor8-форма-документа', {
    дата: attr('Дата составления', { index: 0 }),
    наименование: attr('Наименование документа', { index: 1 }),
    содержание: attr('Содержание документа', { index: 2 }),
    отделы: attr('Получаемый отдел', { index: 3 }),
    авПользователи: belongsTo('i-i-s-dokumentoobor8-ав-пользователи', 'Ав пользователи', {
      iDПользователя: attr('ID пользователя', { index: 5 }),
      сотрудники: belongsTo('i-i-s-dokumentoobor8-сотрудники', '', {
        фИОСотрудника: attr('ФИО Сотрудника', { index: 6 })
      }, { index: -1, hidden: true })
    }, { index: 4, displayMemberPath: 'iDПользователя' })
  });

  modelClass.defineProjection('ФормаДокументаL', 'i-i-s-dokumentoobor8-форма-документа', {
    дата: attr('Дата составления', { index: 0 }),
    наименование: attr('Наименование документа', { index: 1 }),
    содержание: attr('Содержание документа', { index: 2 }),
    отделы: attr('Получаемый отдел', { index: 3 }),
    авПользователи: belongsTo('i-i-s-dokumentoobor8-ав-пользователи', 'ID пользователя', {
      iDПользователя: attr('ID пользователя', { index: 4 }),
      сотрудники: belongsTo('i-i-s-dokumentoobor8-сотрудники', '', {
        фИОСотрудника: attr('ФИО сотрудника', { index: 5 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
