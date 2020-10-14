1. What is mongo DB

MongoDB is a document database which provides high scalability,high performance and avilability

Cassandra,couchDB,redis are the alternative of the mongoDB

tables are called as collection, rows are called as document, columns are called as field, joins are called as linking.

2. difference between SQL and No-SQL

SQL

---

sql is a relational database
sql is very structured you have define the table structure and its difficult to add column and constraints to it over the time. data is stored in form of rows and column
SQL is vertically scalable
SQL follows ACID(atomicity,consistency,isolation,durability)
SQL suits for complex queries

## NOSQL

nosql is a nonn relational database
nosql is suitable for unstructured data
nosql has zero downtime
nosql has a feature of dynamic schema for unstructured data. data is stored in document oriented,column oriented and graph oriented.
nosql is horizontally scalable
nosql follows CAP(consistency,availability,partition tolerance)
nosql is not suitable complex queries

NOSQL data architecture

1. Key-Value Store Database
2. Column Store Database
3. Document Database
4. Graph Database

5. GridFS in mongoDB

it is used for storing the large files,images,audio and video files

3. command to check mongo is using link

db.\_adminCommand(“connPoolStats.”)

4. check this is master server

Db.isMaster()

5. ObjectID() is composed of

timestamp, client machine ID, client process ID and 3 byte counter

6. backup the database

Journaling is the feature in MongoDB that you can use to do safe backups.

7. create and drop collection

Syntax to create collection in MongoDB is db.createCollection(name,options)
Syntax to drop collection in MongoDB is db.collection.drop()

8. replication

Across multiple servers, the process of synchronizing data is known as replication. It provides redundancy and increase data availability with multiple copies of data on different database server. Replication helps in protecting the database from the loss of a single server.

9. replica-set

A replica set is a group of mongo instances that host the same data set. In replica set, one node is primary, and another is secondary. From primary to the secondary node all data replicates.

10. BSON format

MongoDB stores data as BSON documents. BSON is a binary representation of JSON documents, though it contains more data types than JSON. Some of the supported data types are: Double, String, Object, Array, Binary Data, RegEx, Boolean, Date, Null, JavaScript, Timestamp. ObjectId.

11. \_id is field in mongo

which act as primary key

12. Advantages of nosql

- dynamic schemas
- large db is partitioned into multiple servers. fetch data from the fastest server which is free
- auto replication is also supported in server when one server goes down it can be pulled
- integrated cache mechanism.

13. datatype

```
Double	1	Used to stored floating point values
String	2	Commonly used datatype and it is UTF-8 valid
Object	3	Used for storing embedded objects
Array	4	Used for storing embedded objects
Binary Data	5	Used to store binary data
Undefined	6	Used to store undefined value
Object Id	7	Used to store document's ID
Boolean	9	Used to store Boolean value
Date	10	Used to store current date time in UNIX format.
Null	11	Used to store null value
Regular Expression	12	Used to store regex
Javascript	13	Used to store JavaScript data without scope
Symbol	14	Basically used to store string, but reserved for languages that use specific symbol
Javascript with scope	15	Used to store JavaScript data with scope
Integer	16 & 18	Used to store numerical value
Timestamp	10	Used to track when a document is modified.
Min/Max Key	255/127	Used to compare value against lowest and highest BSON elements
```

14. create DB

use <dbname>

15. drop db

db.dropdatabase()

16. create collection

```
db.student.insert({
	name: "Viraj"
})

```

```
db.createCollection(name, options)
```

```
db.createCollection("student", { capped : true, size : 5242880, max : 5000 } )
```

17. drop collection

```
db.collection_name.drop()
```

18. find like a select in sql

```
db.collection_name.find()

```

```
db.collection_name.find({name:'xyc'})
```

19. update the collection

```
db.student.update({
	"regNo": "3014"
},
$set:
{
	"name":"Viraj"
})
```

20. removing entry

```
db.collection_name.remove({"fieldname":"value"})
```

21. crud commands.

insert single document ---> insertOne({ item:'canvas'});
insert many documents ---> insertMany([{},{}])

you can also insert with methods like update,updateOne,save,findAndModify with upsert set to true.

## querying

db.collection_name.find({ status : { $in ['A','D']}});   IN operator
db.collection_name.find({ status :'A', qty:{$lt:30}}); AND and < operator
db.collection_name.find({ $or: [{ status:'A'},{ qty:{ $gt: 30 }}]}) OR and > operator

## querying nested documents

db.collection_name.find({ size: { w:21,h:14} });

or

db.collection_name.find({ 'size.w' :21});

## query and array inside the document

{
item:'paper',
qty: 50,
tags:['red','blank','blue'],
dim_cm: [13,21]
}

db.collection_name.find({ tags: ['red','blank']}); ===> retrieve the document with exact match of values in array with order specified

db.collection*name.find({ tags: { *\$all\_ :['red','blank']}}); ===> retrieve the document that contains both the elements "red", "black"

db.collection_name.find({ tags: 'red' })

db.collection_name.find({ dim_cm: { \$gt : 25}}); ===> retrievs the array which atleast one match this condition

db.collection*name.find({ dim_cm: { *\$gt\_ : 25, \$lt:12 }}); ===> retrievs the array which atleast one match this condition or both

db.collection*name.find({ dim_cm: { *\$elemMatch\_ : {$gt : 25, \$lt:12} }}); ===> retrievs the array which strictly match the condition

db.collection*name.find({ tags: { *\$size\_: 3} }) ===> retrievs the document where the array size is 3

## query for array of embedded documents

db.collection_name.find({ instock : { \$elemMatch :{ qty: 5, warehouse: 'A'}}})

## project fields to return from query

## project is like retrieving the specific fields only

db.collection_name.find({ status: 'A'}).project({item:1,status:1});

## return all but exclude certain fields by specifying 0

db.collection_name.find({ status: 'A'}).project({item:0,status:0});

db.collection_name.find({ status: 'A'}).project({'size.uom',0});

## specific element in array while projection

.project({ item: 1, instock : { \$slice: -1}}) ==> retrieves the last value in array

## retrieving the null values

db.collection_name.find({ item: null })

db.collection_name.find({ item: {\$type: 10 }) BSON type of null is 10

db.collection_name.find({ item: {\$exits: false } });

# update

```
await db.collection('inventory').updateOne( ===> similar to updateMany
  { item: 'paper' },
  {
    $set: { 'size.uom': 'cm', status: 'P' },
    $currentDate: { lastModified: true }
  }
);
```

replacing the entire document for particular \_id

```
await db.collection('inventory').replaceOne(
  { item: 'paper' },
  {
    item: 'paper',
    instock: [
      { warehouse: 'A', qty: 60 },
      { warehouse: 'B', qty: 40 }
    ]
  }
);
```

# delete

deleteOne() ==> deleteOne document
deleteMany() ==> deleteMany based on the condition

# bulk write

performs

bulkWrite() supports the following write operations:

insertOne
updateOne
updateMany
replaceOne
deleteOne
deleteMany
