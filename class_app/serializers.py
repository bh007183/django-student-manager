from rest_framework import serializers
from .models import Student, Subject, Assignment, Grade, Class



class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = ["id", "class_grade", "teacher"]
    
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ["id", 'first_name', 'last_name', "classes"]

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ["title", "student"]
    # student = StudentSerializer()

class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = ["title", "module", "subject"]
    # subject = SubjectSerializer()

class GradeSerializer(serializers.ModelSerializer):
    class Meta:
        model   = Grade
        fields = ["grade_status", "grade", "assignment"]
    # assignment = AssignmentSerializer()


   

