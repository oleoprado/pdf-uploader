from fastapi import FastAPI, File, UploadFile
# from typing import List, Union
# from database import get_files
from server import init_server
from schema import create_tables
from controller import search_description


create_tables()

app = FastAPI()


@app.post("/files")
async def save_file(file: UploadFile = File(...)):
    # file_content = await file.read()
    if not file:
        return {"message": "No upload file sent"}
    else:
        return {"message": "Upload ok"}


@app.get("/files")
async def search(search: str):
    print(search)
    result = search_description(search)
    return result


# @app.get("/")
# def read():
#     return get_files()


# @app.get("/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}


if __name__ == "__main__":
    init_server()
