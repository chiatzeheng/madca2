migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("exqwqfijv2e38p3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uwzo0zbq",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uwzo0zbq",
    "name": "link",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 100,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
