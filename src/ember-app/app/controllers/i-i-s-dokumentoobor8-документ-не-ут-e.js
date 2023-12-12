import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-dokumentoobor8-документ-не-ут-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-dokumentoobor8-т-ч-созд-док+формаДокумента':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'формаДокумента',
            projection: 'ФормаДокументаL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-dokumentoobor8-т-ч-утверж-док+утверждениеДок':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'дата',
            required: true,
            relationName: 'утверждениеДок',
            projection: 'УтверждениеДокL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
