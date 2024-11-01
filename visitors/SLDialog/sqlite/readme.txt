SQLITE read me file

Requires sqlite2 (also simply called sqlite) php extension, not sqlite3

In order to use SLDialog.sqlite instead of mySQL in the samples:
In the server config, set dbHost to the sqlite file name, e.g. ../sqlite/SLDialog.sqlite2
And all other db settings to null or undefined (do not specify them)
