migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fz3bv0vnrfepvrh")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fz3bv0vnrfepvrh")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
