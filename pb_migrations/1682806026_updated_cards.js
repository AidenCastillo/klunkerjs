migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fz3bv0vnrfepvrh")

  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fz3bv0vnrfepvrh")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
