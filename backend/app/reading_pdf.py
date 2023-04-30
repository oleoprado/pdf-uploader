import tabula
import os

pdf_path = os.path.join(os.path.dirname(__file__), "table_example.pdf")

# Read PDF tables using Tabula
pdf_file = tabula.read_pdf(pdf_path, pages="all")

# Iterate over each table found
for i, table in enumerate(pdf_file, start=1):
    # Print table number
    print(f"Table {i}:")
    # Print column names
    print((table.columns.tolist()))
    # Iterate over each row of the table
    for _, row in table.iterrows():
        item, description, unit, quantity = row.tolist()

        print(f"{item} - {description} - {unit} - {quantity}")
    # Add a blank line to separate tables
    print()
