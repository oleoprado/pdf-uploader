import tabula
import tempfile
import math
from typing import Optional
from schema import PDF_File, PDF_Content


def save_pdf_file(pdf_name: str, pdf_file: bytes) -> int:
    pdf_file_id = PDF_File.create(name=pdf_name, file=pdf_file)
    return pdf_file_id


def save_pdf_content(
    item: str,
    description: str,
    unit: Optional[str],
    quantity: Optional[str],
    pdf_id: int,
) -> None:
    if isinstance(unit, float):
        unit = None
    if math.isnan(quantity):
        quantity = None

    PDF_Content.create(
        item=item,
        description=description,
        unit=unit,
        quantity=quantity,
        pdf_id=pdf_id,
    )


async def read_and_save_pdf(file):

    with tempfile.NamedTemporaryFile(suffix=".pdf") as tmp:
        tmp.write(await file.read())
        file_path = tmp.name

        pdf_name = file.filename
        pdf_tables = tabula.read_pdf(file_path, pages="all")

        pdf_id = save_pdf_file(pdf_name, open(file_path, "rb").read())

        for _, table in enumerate(pdf_tables, start=1):
            for _, row in table.iterrows():
                item, description, unit, quantity = row.tolist()
                save_pdf_content(item, description, unit, quantity, pdf_id)


def search_description(query_params):
    query = (
        PDF_Content.select(
            PDF_File.name,
            PDF_Content.description,
            PDF_Content.unit,
            PDF_Content.quantity,
            PDF_Content.pdf_id
        )
        .where(
            (PDF_Content.description.contains(query_params)) |
            (PDF_Content.unit.contains(query_params)) |
            (PDF_Content.quantity.contains(query_params))
        )
        .join(PDF_File, on=(PDF_Content.pdf_id == PDF_File.id))
        .dicts()
    )
    result_list = []
    for row in query:
        result_list.append(row)
    return result_list
