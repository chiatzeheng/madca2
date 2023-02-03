migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("exqwqfijv2e38p3")

  // remove
  collection.schema.removeField("y8lcgh15")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xaiujqy5",
    "name": "data",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lok6rk2q",
    "name": "link",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 1000,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
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

  // remove
  collection.schema.removeField("xaiujqy5")

  // remove
  collection.schema.removeField("lok6rk2q")

  return dao.saveCollection(collection)
})
