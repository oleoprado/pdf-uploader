from peewee import Model, TextField, IntegerField, BlobField, ForeignKeyField
from conn_db import db


class BaseModel(Model):
    class Meta:
        database = db


class PDF_File(BaseModel):
    name = TextField()
    file = BlobField()

    class Meta:
        database = db


class PDF_Content(BaseModel):
    pdf_id = ForeignKeyField(PDF_File, backref="pdf_content")
    item = TextField()
    description = TextField()
    unit = TextField(null=True)
    quantity = IntegerField(null=True)

    class Meta:
        primary_key = False


def create_tables():
    db.create_tables([PDF_File, PDF_Content])


# if __name__ == "__main__":
#     db.create_tables([PDF_File, PDF_Content])
