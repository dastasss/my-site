from django.urls import path
from . import views

urlpatterns = [
    path('', views.escena, name='escena'),
    path('home/', views.home, name="home"),
]
