# import sys
# import os

# sys.path.insert(
#     0, os.path.abspath(os.path.join(os.path.dirname(__file__), "../model"))
# )
from schema import User


def create_user():
    leonardo = User(name="leonardo", email="NameError@example", age=30)
    leonardo.save()


create_user()
