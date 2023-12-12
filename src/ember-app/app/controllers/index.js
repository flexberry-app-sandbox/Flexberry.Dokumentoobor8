import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.dokumentoobor8.caption'),
          title: i18n.t('forms.application.sitemap.dokumentoobor8.title'),
          children: [{
            link: 'i-i-s-dokumentoobor8-форма-документа-l',
            caption: i18n.t('forms.application.sitemap.dokumentoobor8.i-i-s-dokumentoobor8-форма-документа-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentoobor8.i-i-s-dokumentoobor8-форма-документа-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-dokumentoobor8-утверждение-док-l',
            caption: i18n.t('forms.application.sitemap.dokumentoobor8.i-i-s-dokumentoobor8-утверждение-док-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentoobor8.i-i-s-dokumentoobor8-утверждение-док-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-dokumentoobor8-документ-не-ут-l',
            caption: i18n.t('forms.application.sitemap.dokumentoobor8.i-i-s-dokumentoobor8-документ-не-ут-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentoobor8.i-i-s-dokumentoobor8-документ-не-ут-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-dokumentoobor8-ав-пользователи-l',
            caption: i18n.t('forms.application.sitemap.dokumentoobor8.i-i-s-dokumentoobor8-ав-пользователи-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentoobor8.i-i-s-dokumentoobor8-ав-пользователи-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-dokumentoobor8-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.dokumentoobor8.i-i-s-dokumentoobor8-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentoobor8.i-i-s-dokumentoobor8-сотрудники-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-dokumentoobor8-должность-l',
            caption: i18n.t('forms.application.sitemap.dokumentoobor8.i-i-s-dokumentoobor8-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentoobor8.i-i-s-dokumentoobor8-должность-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-dokumentoobor8-вход-в-систему-l',
            caption: i18n.t('forms.application.sitemap.dokumentoobor8.i-i-s-dokumentoobor8-вход-в-систему-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentoobor8.i-i-s-dokumentoobor8-вход-в-систему-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})