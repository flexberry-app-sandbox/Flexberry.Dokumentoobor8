import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ОтделыEnum from '../enums/i-i-s-dokumentoobor8-отделы';

export default FlexberryEnum.extend({
  enum: ОтделыEnum,
  sourceType: 'IIS.Dokumentoobor8.Отделы'
});
