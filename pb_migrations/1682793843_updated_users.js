migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ggnf1nyh",
    "name": "library",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "fz3bv0vnrfepvrh",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": [
        "name"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qa2ouk9i",
    "name": "deck",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "thidxora",
    "name": "roll",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("ggnf1nyh")

  // remove
  collection.schema.removeField("qa2ouk9i")

  // remove
  collection.schema.removeField("thidxora")

  return dao.saveCollection(collection)
})
