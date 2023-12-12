import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDДолжности: DS.attr('number'),
  должность: DS.attr('string')
});

export let ValidationRules = {
  iDДолжности: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-должность.validations.iDДолжности.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-должность.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностьE', 'i-i-s-dokumentoobor8-должность', {
    iDДолжности: attr('I d должности', { index: 0 }),
    должность: attr('Должность', { index: 1 })
  });

  modelClass.defineProjection('ДолжностьL', 'i-i-s-dokumentoobor8-должность', {
    iDДолжности: attr('I d должности', { index: 0 }),
    должность: attr('Должность', { index: 1 })
  });
};
