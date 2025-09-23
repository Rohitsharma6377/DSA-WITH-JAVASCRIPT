# MongoDB Practice

## Getting Started
- Start MongoDB shell (mongosh) and select a DB:
```js
use practice_db
```

## Create and Insert
```js
// Create collection and insert docs
use practice_db

db.users.insertMany([
  { name: "Alice", age: 25, city: "Delhi", skills: ["js", "sql"] },
  { name: "Bob", age: 30, city: "Mumbai", skills: ["python"] },
  { name: "Cathy", age: 28, city: "Delhi", skills: ["js", "mongo"] }
])
```

## Basic Queries
```js
// Find all
db.users.find({})

// Projections
db.users.find({}, { name: 1, city: 1, _id: 0 })

// Filters
db.users.find({ city: "Delhi", age: { $gte: 26 } })

// Array contains
db.users.find({ skills: "js" })
```

## Updates
```js
// Update one
db.users.updateOne({ name: "Alice" }, { $set: { age: 26 } })

// Update many
db.users.updateMany({ city: "Delhi" }, { $addToSet: { skills: "node" } })
```

## Deletes
```js
db.users.deleteOne({ name: "Bob" })
db.users.deleteMany({ age: { $gte: 29 } })
```

## Aggregation Basics
```js
// Count users per city
db.users.aggregate([
  { $group: { _id: "$city", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
])

// Unwind skills and count
db.users.aggregate([
  { $unwind: "$skills" },
  { $group: { _id: "$skills", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
])
```

## Practice Tasks
1) Insert 5 more users with various ages and cities.
2) Find users who have both "js" and "mongo" skills.
3) Increment age of all Delhi users by 1.
4) Remove users younger than 20.
5) Using aggregation, find average age per city.
