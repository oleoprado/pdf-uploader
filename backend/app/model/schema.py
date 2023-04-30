from peewee import Model, CharField, IntegerField
import connection


# db = MySQLDatabase(
#     "db_test", host="localhost", port=3306, user="root", password="root"
# )


class BaseModel(Model):
    class Meta:
        database = connection.db


class User(BaseModel):
    name = CharField()
    email = CharField()
    age = IntegerField()


if __name__ == "__main__":
    connection.db.create_tables([User])
