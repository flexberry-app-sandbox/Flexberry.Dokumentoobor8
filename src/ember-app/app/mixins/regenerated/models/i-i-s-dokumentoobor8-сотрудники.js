import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDСотрудника: DS.attr('number'),
  датаПриема: DS.attr('date'),
  зарплата: DS.attr('decimal'),
  номерТелефона: DS.attr('number'),
  отделы: DS.attr('i-i-s-dokumentoobor8-отделы'),
  пол: DS.attr('i-i-s-dokumentoobor8-пол'),
  фИОСотрудника: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-dokumentoobor8-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  iDСотрудника: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-сотрудники.validations.iDСотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  датаПриема: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-сотрудники.validations.датаПриема.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  зарплата: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-сотрудники.validations.зарплата.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-сотрудники.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отделы: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-сотрудники.validations.отделы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пол: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-сотрудники.validations.пол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИОСотрудника: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-сотрудники.validations.фИОСотрудника.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-сотрудники.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-dokumentoobor8-сотрудники', {
    iDСотрудника: attr('ID сотрудника', { index: 0 }),
    фИОСотрудника: attr('ФИО сотрудника', { index: 1 }),
    отделы: attr('Отдел', { index: 2 }),
    датаПриема: attr('Дата приема', { index: 3 }),
    зарплата: attr('Зарплата', { index: 4 }),
    номерТелефона: attr('Номер телефона', { index: 5 }),
    пол: attr('Пол', { index: 6 }),
    должность: belongsTo('i-i-s-dokumentoobor8-должность', 'Должность', {
      должность: attr('Должность', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'должность' })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-dokumentoobor8-сотрудники', {
    iDСотрудника: attr('ID сотрудника', { index: 0 }),
    фИОСотрудника: attr('ФИО сотрудника', { index: 1 }),
    пол: attr('Пол', { index: 2 }),
    номерТелефона: attr('Номер телефона', { index: 3 }),
    должность: belongsTo('i-i-s-dokumentoobor8-должность', 'Должность', {
      должность: attr('Должность', { index: 4 })
    }, { index: -1, hidden: true }),
    отделы: attr('Отдел', { index: 5 }),
    датаПриема: attr('Дата приема', { index: 6 }),
    зарплата: attr('Зарплата', { index: 7 })
  });
};
