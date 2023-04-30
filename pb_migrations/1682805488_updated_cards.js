migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fz3bv0vnrfepvrh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h63we3q6",
    "name": "available",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fz3bv0vnrfepvrh")

  // remove
  collection.schema.removeField("h63we3q6")

  return dao.saveCollection(collection)
})
