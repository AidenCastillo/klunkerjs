migrate((db) => {
  const collection = new Collection({
    "id": "3jj2122knubfsva",
    "created": "2023-04-29 18:26:27.702Z",
    "updated": "2023-04-29 18:26:27.702Z",
    "name": "abilities",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "scfbmugq",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ixxpirvu",
        "name": "description",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
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
  const collection = dao.findCollectionByNameOrId("3jj2122knubfsva");

  return dao.deleteCollection(collection);
})
