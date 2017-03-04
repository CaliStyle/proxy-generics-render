'use strict'
/* global describe, it */
const assert = require('assert')
describe('Render Generic', () => {
  let RenderGenericService

  before((done) => {
    RenderGenericService = global.app.services.RenderGenericService
    done()
  })

  it('should exist', () => {
    assert(RenderGenericService)
  })

})
