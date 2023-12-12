import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  праваПол: DS.attr('i-i-s-dokumentoobor8-права-пол'),
  авПользователи: DS.belongsTo('i-i-s-dokumentoobor8-ав-пользователи', { inverse: 'тЧПрава', async: false })
});

export let ValidationRules = {
  праваПол: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-т-ч-права.validations.праваПол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  авПользователи: {
    descriptionKey: 'models.i-i-s-dokumentoobor8-т-ч-права.validations.авПользователи.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧПраваE', 'i-i-s-dokumentoobor8-т-ч-права', {
    праваПол: attr('Права пол', { index: 0 })
  });
};
