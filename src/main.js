// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
//
import * as d3 from 'd3'
import tippy from 'tippy.js'
import DefaultLayout from '~/layouts/Default.vue'
import font from './font'
import 'tippy.js/dist/tippy.css'

export default function (Vue, { router, head, isClient }) {
  Vue.prototype.$devMode = process.env.GRIDSOME_DEV_MODE === 'true'
  Vue.prototype.$isClient = isClient
  Vue.prototype.$d3 = d3
  Vue.prototype.$tippy = tippy
  Vue.component('Layout', DefaultLayout)

  // HEAD manipulation
  head.style.push({
    cssText: font,
    type: 'text/css'
  })
}
