from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware

from server import init_server
from schema import create_tables
from controller import search_description, read_and_save_pdf


create_tables()

app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/files")
async def save_file(file: UploadFile):
    try:
        if not file:
            return {"message": "No upload file sent"}
        else:
            await read_and_save_pdf(file)
            return {"message": "Upload ok"}
    except Exception as e:
        print(f"Error processing file upload: {str(e)}")
        return {"message": f"Error processing file upload: {str(e)}"}


@app.get("/files")
async def search(search: str):
    result = search_description(search)
    return result


if __name__ == "__main__":
    init_server()
