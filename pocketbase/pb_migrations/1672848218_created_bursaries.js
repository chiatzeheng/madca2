migrate((db) => {
  const collection = new Collection({
    "id": "hfjtt6q12b3q1jz",
    "created": "2023-01-04 16:03:38.772Z",
    "updated": "2023-01-04 16:03:38.772Z",
    "name": "bursaries",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uunqnrmq",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "uyzqo3xu",
        "name": "body",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 100,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hfjtt6q12b3q1jz");

  return dao.deleteCollection(collection);
})
