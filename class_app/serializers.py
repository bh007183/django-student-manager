from rest_framework import serializers
from .models import Student, Subject, Assignment, Grade, Class, UserProfile
from djoser.serializers import UserCreateSerializer as BaseUserCreateSerializer

class UserCreateSerializer(BaseUserCreateSerializer):
    class Meta(BaseUserCreateSerializer.Meta):
        fields = ["id", "username", "password", "email", "first_name", "last_name"]


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ["id", "user"]

class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = ["id", "class_grade", "teacher", "user"]

    
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ["id", 'first_name', 'last_name', "classes"]

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ["title", "student"]
  

class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = ["title", "module", "subject"]
  

class GradeSerializer(serializers.ModelSerializer):
    class Meta:
        model   = Grade
        fields = ["grade_status", "grade", "assignment"]
  

   

