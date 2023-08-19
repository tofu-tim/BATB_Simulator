from flask_app.config.mysqlconnection import connectToMySQL
# from flask_app.models.dojo import Dojo

class Ninja:
    db = 'skaters_and_tricks'
    def __init__(self, data):
        self.id = data['id']
        self.trick_name = data['trick_name']
        self.difficulty = data['difficulty']
        self.skater_id = data['skater_id'] 

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM tricks;"
        results = connectToMySQL(db).query_db(query)
        tricks = []
        for trick in results:
            trick.append( cls(trick) )
        return tricks

    @classmethod
    def save(cls, data):
        query = "INSERT INTO tricks (trick_name,difficulty,skater_id) VALUES (%(trick_name)s,%(difficulty)s,%(skater_id)s);"
        result = connectToMySQL(db).query_db(query,data)
        return result

    @classmethod
    def get_trick(cls,data):
        query  = "SELECT * FROM tricks WHERE id = %(id)s;"
        result = connectToMySQL(db).query_db(query,data)
        return cls(result[0])

    @classmethod
    def update(cls,data):
        query = "UPDATE tricks SET trick_name=%(trick_name)s,difficulty=%(difficulty)s,skater_id=%(skater_id)s,updated_at=NOW() WHERE id = %(id)s;"
        return connectToMySQL(db).query_db(query,data)

    @classmethod
    def destroy(cls,data):
        query  = "DELETE FROM tricks WHERE id = %(id)s;"
        return connectToMySQL(db).query_db(query,data)