migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("exqwqfijv2e38p3")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("exqwqfijv2e38p3")

  collection.listRule = null

  return dao.saveCollection(collection)
})
