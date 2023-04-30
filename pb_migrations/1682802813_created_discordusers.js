migrate((db) => {
  const collection = new Collection({
    "id": "wlnnwxhuzd037ii",
    "created": "2023-04-29 21:13:33.473Z",
    "updated": "2023-04-29 21:13:33.473Z",
    "name": "discordusers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0ca6kejz",
        "name": "discordID",
        "type": "number",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "dgh9jgp0",
        "name": "deck",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "fz3bv0vnrfepvrh",
          "cascadeDelete": false,
          "maxSelect": null,
          "displayFields": [
            "name"
          ]
        }
      },
      {
        "system": false,
        "id": "rhlovkjg",
        "name": "library",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "fz3bv0vnrfepvrh",
          "cascadeDelete": false,
          "maxSelect": null,
          "displayFields": [
            "name"
          ]
        }
      },
      {
        "system": false,
        "id": "09vwseli",
        "name": "roll",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("wlnnwxhuzd037ii");

  return dao.deleteCollection(collection);
})
