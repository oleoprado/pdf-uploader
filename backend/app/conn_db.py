from peewee import MySQLDatabase


db = MySQLDatabase(
    "db_test", host="localhost", port=3306, user="root", password="root"
)
