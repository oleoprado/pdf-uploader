from fastapi import FastAPI
from typing import Union
from database import get_files
from server import init_server

app = FastAPI()


@app.get("/")
def read():
    return get_files()


@app.get("/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


if __name__ == "__main__":
    init_server()
