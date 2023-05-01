import tabula
import os
from controller import save_pdf_file, save_pdf_content

pdf_path = os.path.join(os.path.dirname(__file__), "table_example.pdf")


def read_and_save_pdf(pdf_path):
    pdf_name = os.path.basename(pdf_path)
    pdf_tables = tabula.read_pdf(pdf_path, pages="all")

    pdf_id = save_pdf_file(pdf_name, open(pdf_path, "rb").read())

    for _, table in enumerate(pdf_tables, start=1):
        for _, row in table.iterrows():
            item, description, unit, quantity = row.tolist()
            save_pdf_content(item, description, unit, quantity, pdf_id)


read_and_save_pdf(pdf_path)
