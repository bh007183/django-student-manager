from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path("class/<int:pk>/", views.ClassDetail.as_view()),
    path("class/", views.ClassList.as_view()),
    path("student/<int:pk>/", views.StudentDetail.as_view()),
    path("student/byclass/<int:pk>/", views.StudentList.as_view()),
    path("student/", views.StudentDet.as_view()),
   
]
