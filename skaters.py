from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.tricks import Tricks

class Skater:
    db = 'skaters_and_tricks'
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']    
        self.tricks = []

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM skaters;"
        results = connectToMySQL(cls.db).query_db(query)
        skaters = []
        for skater in results:
            skater.append( cls(skater) )
        return skaters

    @classmethod
    def save(cls, data):
        query = "INSERT INTO skaters (name) VALUES (%(name)s);"
        result = connectToMySQL(cls.db).query_db(query,data)
        return result

    @classmethod
    def get_one(cls,data):
        query  = "SELECT * FROM skaters WHERE id = %(id)s;"
        result = connectToMySQL(cls.db).query_db(query,data)
        return cls(result[0])

    @classmethod
    def update(cls,data):
        query = "UPDATE dojos SET name=%(name)s,updated_at=NOW() WHERE id = %(id)s;"
        return connectToMySQL(db).query_db(query,data)

    @classmethod
    def destroy(cls,data):
        query  = "DELETE FROM dojos WHERE id = %(id)s;"
        return connectToMySQL(db).query_db(query,data)
