import { observable } from 'mobx';
import Router from '@simosol/router';

export type Page =
   { p: '' } |
   { p: 'adminTools' } |
   { p: 'myForest' } |
   { p: 'map' } |
   { p: 'createEstate' } |
   { p: 'createStand' } |
   { p: 'estate', p1: string } |
   { p: 'stand', p1: string } |
   { p: 'standMap', p1: string }

const pageStore: { page: Page } = observable({ page: { p: '' } });

export const router = new Router(pageStore);
