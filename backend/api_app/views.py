from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse
import requests # <== import requests so we can utilize it within our CBV to make API calls
from requests_oauthlib import OAuth1 #<== import OAuth1 which will essentially authenticate our keys when we send a request
from dotenv import dotenv_values

def index(request):
    return HttpResponse("Index Page", status=200)

class Cat_Api(APIView):
    
    def get(self, request):

        env =   dotenv_values(".env")

        catkey = env.get('CATKEY')

        endpoint = f"https://api.thecatapi.com/v1/images/search?api_key={catkey}"

        # headers = {'x-api-key': env.get(CATKEY)}

        response = requests.get(endpoint)

        # print(response.content)

        responseJSON = response.json()

        print(responseJSON)

        return Response(responseJSON)

class Dog_Api(APIView):
    
    def get(self, request):

        env =   dotenv_values(".env")

        dogkey = env.get('DOGKEY')

        endpoint = f"https://api.thedogapi.com/v1/images/search?api_key={dogkey}"

        # headers = {'x-api-key': env.get(CATKEY)}

        response = requests.get(endpoint)

        # print(response.content)

        responseJSON = response.json()

        print(responseJSON)

        return Response(responseJSON)

class Jokes_Api(APIView):
    
    def get(self, request):

        endpoint = "https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes"

        headers = {
	        "X-RapidAPI-Key": "30259b44b5msh77c088796f8d551p165f73jsn186537819039",
	        "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com"
        }

        response = requests.get(endpoint, headers=headers)

        responseJSON = response.json()

        return Response(responseJSON)

class Fox_Api(APIView):
    
    def get(self, request):

        endpoint = "https://randomfox.ca/floof/"

        # headers = {'x-api-key': env.get(CATKEY)}

        response = requests.get(endpoint)

        # print(response.content)

        responseJSON = response.json()

        print(responseJSON)

        return Response(responseJSON)