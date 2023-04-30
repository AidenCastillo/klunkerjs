migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wlnnwxhuzd037ii")

  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wlnnwxhuzd037ii")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
