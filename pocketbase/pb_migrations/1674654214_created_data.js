migrate((db) => {
  const collection = new Collection({
    "id": "exqwqfijv2e38p3",
    "created": "2023-01-25 13:43:34.466Z",
    "updated": "2023-01-25 13:43:34.466Z",
    "name": "data",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "31wp5p3l",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 0,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nvaja3jo",
        "name": "body",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 0,
          "max": 100,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("exqwqfijv2e38p3");

  return dao.deleteCollection(collection);
})
