import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПраваПолEnum from '../enums/i-i-s-dokumentoobor8-права-пол';

export default FlexberryEnum.extend({
  enum: ПраваПолEnum,
  sourceType: 'IIS.Dokumentoobor8.ПраваПол'
});
