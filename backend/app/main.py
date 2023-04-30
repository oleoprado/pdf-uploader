from fastapi import FastAPI
import uvicorn
from typing import Union
from database import get_files

app = FastAPI()


@app.get("/")
def read():
    return get_files()


@app.get("/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


if __name__ == "__main__":
    uvicorn.run("main:app", port=3333, reload=True)
