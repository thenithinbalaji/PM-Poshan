from datetime import date, datetime
from werkzeug.datastructures import ImmutableMultiDict
import psycopg2
import pandas as pd
import json
from sqlalchemy import create_engine

engine = create_engine("postgresql://postgres:0309@localhost:5432/postgres")
def calorie_chk(menu, sch_type):

    df = pd.read_sql_query(
        "select * from calorie where type='%s'" % (sch_type), con=engine)
    cal = 0
    pro = 0
    for i in range(len(menu)):
        for j in range(len(df)):
            if df["food"][j] == menu[i][0]:
                cal += menu[i][1] * df["calorie"][j]
                pro += menu[i][1] * df["gm_protein"][j]
    if cal >= 450 and pro >= 12 and sch_type == "Primary":
        return True
    if cal >= 700 and pro >= 20 and sch_type == "Secondary":
        return True
    return False

print(calorie_chk([("Pepper Egg", 2), ("Rice", 2)], "Secondary"))
