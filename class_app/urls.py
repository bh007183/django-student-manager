from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path("student/<int:pk>/", views.StudentDetail.as_view()),
    path("student/", views.StudentList.as_view()),
    # path("subject/<int:pk>/", views.StudentDetail.as_view()),
    # path("assignment/<int:pk>/", views.StudentDetail.as_view()),
    # path("grade/<int:pk>/", views.StudentDetail.as_view()),
]
