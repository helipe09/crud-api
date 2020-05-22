'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UnitSchema extends Schema {
  up () {
    this.create('units', (table) => {
      table.increments()
      table.string('cnpj')
      table.string('name')
      table.string('address')
      table.string('city')
      table.string('uf')
      table.string('cep')
      table.string('phone')
      table.string('url_logo')
      table.string('type')
      table.timestamps()
    })
  }

  down () {
    this.drop('units')
  }
}

module.exports = UnitSchema
