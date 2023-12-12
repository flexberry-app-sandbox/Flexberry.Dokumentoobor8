import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISDokumentoobor8АвПользователиLForm from './forms/i-i-s-dokumentoobor8-ав-пользователи-l';
import IISDokumentoobor8ВходВСистемуLForm from './forms/i-i-s-dokumentoobor8-вход-в-систему-l';
import IISDokumentoobor8ДокументНеУтLForm from './forms/i-i-s-dokumentoobor8-документ-не-ут-l';
import IISDokumentoobor8ДолжностьLForm from './forms/i-i-s-dokumentoobor8-должность-l';
import IISDokumentoobor8СотрудникиLForm from './forms/i-i-s-dokumentoobor8-сотрудники-l';
import IISDokumentoobor8УтверждениеДокLForm from './forms/i-i-s-dokumentoobor8-утверждение-док-l';
import IISDokumentoobor8ФормаДокументаLForm from './forms/i-i-s-dokumentoobor8-форма-документа-l';
import IISDokumentoobor8АвПользователиEForm from './forms/i-i-s-dokumentoobor8-ав-пользователи-e';
import IISDokumentoobor8ВходВСистемуEForm from './forms/i-i-s-dokumentoobor8-вход-в-систему-e';
import IISDokumentoobor8ДокументНеУтEForm from './forms/i-i-s-dokumentoobor8-документ-не-ут-e';
import IISDokumentoobor8ДолжностьEForm from './forms/i-i-s-dokumentoobor8-должность-e';
import IISDokumentoobor8СотрудникиEForm from './forms/i-i-s-dokumentoobor8-сотрудники-e';
import IISDokumentoobor8УтверждениеДокEForm from './forms/i-i-s-dokumentoobor8-утверждение-док-e';
import IISDokumentoobor8ФормаДокументаEForm from './forms/i-i-s-dokumentoobor8-форма-документа-e';
import IISDokumentoobor8АвПользователиModel from './models/i-i-s-dokumentoobor8-ав-пользователи';
import IISDokumentoobor8ВходВСистемуModel from './models/i-i-s-dokumentoobor8-вход-в-систему';
import IISDokumentoobor8ДолжностьModel from './models/i-i-s-dokumentoobor8-должность';
import IISDokumentoobor8СотрудникиModel from './models/i-i-s-dokumentoobor8-сотрудники';
import IISDokumentoobor8ТЧПользовательModel from './models/i-i-s-dokumentoobor8-т-ч-пользователь';
import IISDokumentoobor8ТЧПраваModel from './models/i-i-s-dokumentoobor8-т-ч-права';
import IISDokumentoobor8ТЧСоздДокModel from './models/i-i-s-dokumentoobor8-т-ч-созд-док';
import IISDokumentoobor8ТЧУтвержДокModel from './models/i-i-s-dokumentoobor8-т-ч-утверж-док';
import IISDokumentoobor8УтверждениеДокModel from './models/i-i-s-dokumentoobor8-утверждение-док';
import IISDokumentoobor8ФормаДокументаModel from './models/i-i-s-dokumentoobor8-форма-документа';
import IISDokumentoobor8ХрДокModel from './models/i-i-s-dokumentoobor8-хр-док';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-dokumentoobor8-ав-пользователи': IISDokumentoobor8АвПользователиModel,
    'i-i-s-dokumentoobor8-вход-в-систему': IISDokumentoobor8ВходВСистемуModel,
    'i-i-s-dokumentoobor8-должность': IISDokumentoobor8ДолжностьModel,
    'i-i-s-dokumentoobor8-сотрудники': IISDokumentoobor8СотрудникиModel,
    'i-i-s-dokumentoobor8-т-ч-пользователь': IISDokumentoobor8ТЧПользовательModel,
    'i-i-s-dokumentoobor8-т-ч-права': IISDokumentoobor8ТЧПраваModel,
    'i-i-s-dokumentoobor8-т-ч-созд-док': IISDokumentoobor8ТЧСоздДокModel,
    'i-i-s-dokumentoobor8-т-ч-утверж-док': IISDokumentoobor8ТЧУтвержДокModel,
    'i-i-s-dokumentoobor8-утверждение-док': IISDokumentoobor8УтверждениеДокModel,
    'i-i-s-dokumentoobor8-форма-документа': IISDokumentoobor8ФормаДокументаModel,
    'i-i-s-dokumentoobor8-хр-док': IISDokumentoobor8ХрДокModel
  },

  'application-name': 'Dokumentoobor8',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Dokumentoobor8',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Dokumentoobor8',
          title: 'Dokumentoobor8'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        dokumentoobor8: {
          caption: 'Dokumentoobor8',
          title: 'Dokumentoobor8',
          'i-i-s-dokumentoobor8-форма-документа-l': {
            caption: 'Форма документа',
            title: ''
          },
          'i-i-s-dokumentoobor8-утверждение-док-l': {
            caption: 'Утверждение док',
            title: ''
          },
          'i-i-s-dokumentoobor8-документ-не-ут-l': {
            caption: 'Документ не ут',
            title: ''
          },
          'i-i-s-dokumentoobor8-ав-пользователи-l': {
            caption: 'Ав пользователи',
            title: ''
          },
          'i-i-s-dokumentoobor8-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-dokumentoobor8-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-dokumentoobor8-вход-в-систему-l': {
            caption: 'Вход в систему',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-dokumentoobor8-ав-пользователи-l': IISDokumentoobor8АвПользователиLForm,
    'i-i-s-dokumentoobor8-вход-в-систему-l': IISDokumentoobor8ВходВСистемуLForm,
    'i-i-s-dokumentoobor8-документ-не-ут-l': IISDokumentoobor8ДокументНеУтLForm,
    'i-i-s-dokumentoobor8-должность-l': IISDokumentoobor8ДолжностьLForm,
    'i-i-s-dokumentoobor8-сотрудники-l': IISDokumentoobor8СотрудникиLForm,
    'i-i-s-dokumentoobor8-утверждение-док-l': IISDokumentoobor8УтверждениеДокLForm,
    'i-i-s-dokumentoobor8-форма-документа-l': IISDokumentoobor8ФормаДокументаLForm,
    'i-i-s-dokumentoobor8-ав-пользователи-e': IISDokumentoobor8АвПользователиEForm,
    'i-i-s-dokumentoobor8-вход-в-систему-e': IISDokumentoobor8ВходВСистемуEForm,
    'i-i-s-dokumentoobor8-документ-не-ут-e': IISDokumentoobor8ДокументНеУтEForm,
    'i-i-s-dokumentoobor8-должность-e': IISDokumentoobor8ДолжностьEForm,
    'i-i-s-dokumentoobor8-сотрудники-e': IISDokumentoobor8СотрудникиEForm,
    'i-i-s-dokumentoobor8-утверждение-док-e': IISDokumentoobor8УтверждениеДокEForm,
    'i-i-s-dokumentoobor8-форма-документа-e': IISDokumentoobor8ФормаДокументаEForm
  },

});

export default translations;
