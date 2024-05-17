from django.urls import path
from blg import views

urlpatterns = [
    path('blg/', views.blog_list, name='blog'),
    path('blg/<int:pk>/', views.blog_detail, name='blog_detail'),
]