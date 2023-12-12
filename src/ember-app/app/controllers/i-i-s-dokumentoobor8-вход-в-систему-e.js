import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-dokumentoobor8-вход-в-систему-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-dokumentoobor8-т-ч-пользователь+авПользователи':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'логин',
            required: true,
            relationName: 'авПользователи',
            projection: 'АвПользователиL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
