migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wlnnwxhuzd037ii")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g7qvrrce",
    "name": "discord_username",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0ca6kejz",
    "name": "discord_ID",
    "type": "number",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wlnnwxhuzd037ii")

  // remove
  collection.schema.removeField("g7qvrrce")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
