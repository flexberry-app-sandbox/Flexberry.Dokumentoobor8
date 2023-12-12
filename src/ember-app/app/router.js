import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-dokumentoobor8-ав-пользователи-l');
  this.route('i-i-s-dokumentoobor8-ав-пользователи-e',
  { path: 'i-i-s-dokumentoobor8-ав-пользователи-e/:id' });
  this.route('i-i-s-dokumentoobor8-ав-пользователи-e.new',
  { path: 'i-i-s-dokumentoobor8-ав-пользователи-e/new' });
  this.route('i-i-s-dokumentoobor8-вход-в-систему-l');
  this.route('i-i-s-dokumentoobor8-вход-в-систему-e',
  { path: 'i-i-s-dokumentoobor8-вход-в-систему-e/:id' });
  this.route('i-i-s-dokumentoobor8-вход-в-систему-e.new',
  { path: 'i-i-s-dokumentoobor8-вход-в-систему-e/new' });
  this.route('i-i-s-dokumentoobor8-документ-не-ут-l');
  this.route('i-i-s-dokumentoobor8-документ-не-ут-e',
  { path: 'i-i-s-dokumentoobor8-документ-не-ут-e/:id' });
  this.route('i-i-s-dokumentoobor8-документ-не-ут-e.new',
  { path: 'i-i-s-dokumentoobor8-документ-не-ут-e/new' });
  this.route('i-i-s-dokumentoobor8-должность-l');
  this.route('i-i-s-dokumentoobor8-должность-e',
  { path: 'i-i-s-dokumentoobor8-должность-e/:id' });
  this.route('i-i-s-dokumentoobor8-должность-e.new',
  { path: 'i-i-s-dokumentoobor8-должность-e/new' });
  this.route('i-i-s-dokumentoobor8-сотрудники-l');
  this.route('i-i-s-dokumentoobor8-сотрудники-e',
  { path: 'i-i-s-dokumentoobor8-сотрудники-e/:id' });
  this.route('i-i-s-dokumentoobor8-сотрудники-e.new',
  { path: 'i-i-s-dokumentoobor8-сотрудники-e/new' });
  this.route('i-i-s-dokumentoobor8-утверждение-док-l');
  this.route('i-i-s-dokumentoobor8-утверждение-док-e',
  { path: 'i-i-s-dokumentoobor8-утверждение-док-e/:id' });
  this.route('i-i-s-dokumentoobor8-утверждение-док-e.new',
  { path: 'i-i-s-dokumentoobor8-утверждение-док-e/new' });
  this.route('i-i-s-dokumentoobor8-форма-документа-l');
  this.route('i-i-s-dokumentoobor8-форма-документа-e',
  { path: 'i-i-s-dokumentoobor8-форма-документа-e/:id' });
  this.route('i-i-s-dokumentoobor8-форма-документа-e.new',
  { path: 'i-i-s-dokumentoobor8-форма-документа-e/new' });
});

export default Router;
