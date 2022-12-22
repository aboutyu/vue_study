import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () => import(/* webpackChunkName: "databindingString" */ '../views/1_databinding/DataBindingStringView.vue')
  },
  {
    path: '/databinding/html',
    name: 'DataBindinghtmlView',
    component: () => import(/* webpackChunkName: "databindingHtml" */ '../views/1_databinding/DataBindingHtmlView.vue')
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () => import(/* webpackChunkName: "databindingInput" */ '../views/1_databinding/DataBindingInputView.vue')
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    component: () => import(/* webpackChunkName: "databindingSelect */ '../views/1_databinding/DataBindingSelectView.vue')
  },
  {
    path: '/databinding/checkbox',
    name: 'DataBindingCheckboxView',
    component: () => import(/* webpackChunkName: "databindingCheckbox */ '../views/1_databinding/DataBindingCheckboxView.vue')
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadioView',
    component: () => import(/* webpackChunkName: "databindingRadio */ '../views/1_databinding/DataBindingRadioView.vue')
  },
  {
    path: '/databinding/attribute',
    name: 'DataBindingAttributeView',
    component: () => import(/* webpackChunkName: "databindingAttribute */ '../views/1_databinding/DataBindingAttributeView.vue')
  },
  {
    path: '/databinding/list',
    name: 'DataBindingListView',
    component: () => import(/* webpackChunkName: "databindingList */ '../views/1_databinding/DataBindingListView.vue')
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClassView',
    component: () => import(/* webpackChunkName: "databindingClass */ '../views/1_databinding/DataBindingClassView.vue')
  },
  {
    path: '/databinding/style',
    name: 'DataBindingStyleView',
    component: () => import(/* webpackChunkName: "databindingStyle */ '../views/1_databinding/DataBindingStyleView.vue')
  },
  {
    path: '/event/click',
    name: 'EventClickView',
    component: () => import(/* webpackChunkName: "eventClick */ '../views/2_event/EventClickView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
