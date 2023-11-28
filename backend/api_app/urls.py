from django.urls import path
from .views import index, Cat_Api, Dog_Api, Jokes_Api, Fox_Api

urlpatterns = [
    path('', index, name="index"), 
    path('cats', Cat_Api.as_view(), name="cat_api"),
    path('dogs', Dog_Api.as_view(), name="dog_api"),
    path('jokes', Jokes_Api.as_view(), name="jokes_api"),
    path('fox', Fox_Api.as_view(), name="fox_api")
]