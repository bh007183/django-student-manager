from rest_framework import serializers
from .models import Student, Subject, Assignment, Grade

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ["id", 'first_name', 'last_name']

   
    

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ["title", "assignment", "student"]
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


   

