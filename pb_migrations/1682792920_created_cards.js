migrate((db) => {
  const collection = new Collection({
    "id": "fz3bv0vnrfepvrh",
    "created": "2023-04-29 18:28:40.924Z",
    "updated": "2023-04-29 18:28:40.924Z",
    "name": "cards",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "iflj2r7u",
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
        "id": "c6on4xtm",
        "name": "picture",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "comh86y2",
        "name": "mana",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "jyd4wogo",
        "name": "type",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "grxhynmp",
        "name": "power",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "659atex9",
        "name": "toughness",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "x6dwust1",
        "name": "abilities",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "3jj2122knubfsva",
          "cascadeDelete": false,
          "maxSelect": null,
          "displayFields": [
            "name"
          ]
        }
      },
      {
        "system": false,
        "id": "yox3zko0",
        "name": "lore",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("fz3bv0vnrfepvrh");

  return dao.deleteCollection(collection);
})
