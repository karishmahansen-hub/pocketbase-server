/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2256469611")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "number2282447225",
    "max": null,
    "min": null,
    "name": "Likes",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "number3565542471",
    "max": null,
    "min": null,
    "name": "Dislikes",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2256469611")

  // remove field
  collection.fields.removeById("number2282447225")

  // remove field
  collection.fields.removeById("number3565542471")

  return app.save(collection)
})
