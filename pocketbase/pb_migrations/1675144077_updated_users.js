migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8ye4vfjg",
    "name": "gpa",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 4
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yaehdgrv",
    "name": "class",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 98,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9cmdcd54",
    "name": "studentNumber",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 100,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "crd4hig0",
    "name": "citizenship",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "International",
        "Citizen",
        "Permanent Resident"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("8ye4vfjg")

  // remove
  collection.schema.removeField("yaehdgrv")

  // remove
  collection.schema.removeField("9cmdcd54")

  // remove
  collection.schema.removeField("crd4hig0")

  return dao.saveCollection(collection)
})
