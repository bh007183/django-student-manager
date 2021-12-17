from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path("class/<int:pk>/", views.ClassDetail.as_view()),
    path("class/", views.ClassList.as_view()),
    path("assignment/<int:pk>/", views.AssignmentDetail.as_view()),
    path("assignment/", views.AssignmentList.as_view()),
    path("student/<int:pk>/", views.StudentDetail.as_view()),
    path("student/", views.StudentList.as_view()),
    path("subject/<int:pk>/", views.SubjectDetail.as_view()),
    path("subject/", views.SubjectList.as_view()),
    path("grade/", views.GradeList.as_view()),
    path("grade/<int:pk>/", views.GradeDetail.as_view()),
]
