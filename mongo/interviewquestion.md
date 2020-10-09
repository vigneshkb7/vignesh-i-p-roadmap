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

11. _id is field in mongo

which act as primary key
