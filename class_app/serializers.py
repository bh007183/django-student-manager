from rest_framework import serializers
from .models import Student, Class
from djoser.serializers import UserCreateSerializer as BaseUserCreateSerializer

class UserCreateSerializer(BaseUserCreateSerializer):
    class Meta(BaseUserCreateSerializer.Meta):
        fields = ["id", "username", "password", "email", "first_name", "last_name"]



class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = ["id", "class_grade", "title", "user"]

    
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ["id", 'first_name', 'last_name', "classes", "guardian_name_1", "guardian_name_2", "emergency_contact_number1", "emergency_contact_number2" ]


  

   

