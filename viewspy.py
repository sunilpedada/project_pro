from rest_framework.generics import CreateAPIView
from.serializing import emp
from rest_framework.generics import ListAPIView
from django.contrib.auth.models import User
from django.views.generic import View
import json
import psycopg2
from rest_framework.parsers import JSONParser,renderers
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse
class Registrations(CreateAPIView):
    serializer_class = emp
    print (serializer_class)
class Login(View):
    def post(self,request):
        body=request.body
        data=json.loads(body)
        try:
            connection = psycopg2.connect(user="postgres",
                                          password="sunil1995",
                                          host="127.0.0.1",
                                          port="5432",
                                          database="project3")
            cursor = connection.cursor()

            cursor.execute('SELECT * from auth_user where password=%s and email=%s;',
                           [data["password"],data["email"]])
            # row_headers = [x[0] for x in cursor.description]
            desc = cursor.description
            record = [
                dict(zip([col[0] for col in desc], row))
                for row in cursor.fetchall()
            ]
            json_data = json.dumps(record)
            #record = cursor.fetchall()
            print("You are connected to - ", record, "\n")
        except (Exception, psycopg2.Error) as error:
            print("Error while connecting to PostgreSQL", error)
        finally:
            # closing database connection.
            if (connection):
                cursor.close()
                connection.close()
                print("PostgreSQL connection is closed")
        # json_data = []
        # for result in record:
        #     json_data.append(dict(zip(row_headers, result)))
        # return json.dump(json_data)
        return HttpResponse(json_data, content_type='application/json')



class registration(View):
    def post(self,request):
        body=request.body
        data=json.loads(body)
        print(data)
        return HttpResponse(request,status=200
                            )