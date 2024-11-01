CREATE TABLE ApplicationData (
	"id" INTEGER NOT NULL PRIMARY KEY,
	"name" varchar(1024) NOT NULL default "",
	"instanceName" varchar(1024) NOT NULL default "",
	"time" timestamp NOT NULL default CURRENT_TIMESTAMP,
	"lastActivity" timestamp NOT NULL DEFAULT 0,
	"metaDataSerialized" text
);
CREATE TABLE ClientData (
	"id" INTEGER NOT NULL PRIMARY KEY,
	"applicationId" INTEGER NOT NULL,
	"time" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"lastActivity" timestamp NOT NULL DEFAULT 0,
	"metaDataSerialized" text
);
CREATE TABLE MessageData (                                       
	"id" INTEGER unsigned NOT NULL PRIMARY KEY,
	"clientId" INTEGER,
	"applicationId" INTEGER NOT NULL DEFAULT "0",                       
	"time" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"type" text NOT NULL default "",
	"metaDataSerialized" text
);
