import { Serializer as АвПользователиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-dokumentoobor8-ав-пользователи';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(АвПользователиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
