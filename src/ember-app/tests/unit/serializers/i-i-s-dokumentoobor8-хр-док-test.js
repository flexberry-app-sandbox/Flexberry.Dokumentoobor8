import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dokumentoobor8-хр-док', 'Unit | Serializer | i-i-s-dokumentoobor8-хр-док', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-dokumentoobor8-хр-док',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-dokumentoobor8-отделы',
    'transform:i-i-s-dokumentoobor8-пол',
    'transform:i-i-s-dokumentoobor8-права-пол',
    'transform:i-i-s-dokumentoobor8-утверждение',

    'model:i-i-s-dokumentoobor8-ав-пользователи',
    'model:i-i-s-dokumentoobor8-вход-в-систему',
    'model:i-i-s-dokumentoobor8-должность',
    'model:i-i-s-dokumentoobor8-сотрудники',
    'model:i-i-s-dokumentoobor8-т-ч-пользователь',
    'model:i-i-s-dokumentoobor8-т-ч-права',
    'model:i-i-s-dokumentoobor8-т-ч-созд-док',
    'model:i-i-s-dokumentoobor8-т-ч-утверж-док',
    'model:i-i-s-dokumentoobor8-утверждение-док',
    'model:i-i-s-dokumentoobor8-форма-документа',
    'model:i-i-s-dokumentoobor8-хр-док',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
