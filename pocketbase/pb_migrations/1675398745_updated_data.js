migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("exqwqfijv2e38p3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y8lcgh15",
    "name": "data",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 10000,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("exqwqfijv2e38p3")

  // remove
  collection.schema.removeField("y8lcgh15")

  return dao.saveCollection(collection)
})
