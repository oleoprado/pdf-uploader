from peewee import Model, TextField, IntegerField, BlobField, ForeignKeyField
from conn_db import db


class BaseModel(Model):
    class Meta:
        database = db


class PDF_File(BaseModel):
    id = IntegerField(primary_key=True)
    name = TextField()
    file = BlobField()

    class Meta:
        database = db


class PDF_Content(BaseModel):
    id = IntegerField(primary_key=True)
    item = TextField()
    description = TextField()
    unit = TextField(null=True)
    quantity = IntegerField(null=True)
    pdf_id = ForeignKeyField(PDF_File, backref="pdf_content")


if __name__ == "__main__":
    db.create_tables([PDF_File, PDF_Content])
