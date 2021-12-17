from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import StudentSerializer, SubjectSerializer, ClassSerializer, AssignmentSerializer

from .models import Student, Subject, Assignment, Grade, Class

# Create your views here.
# Student Views

class ClassDetail(APIView):
    def get(self, request, pk):
        classes = get_object_or_404(Class,pk=pk)
        serializer = ClassSerializer(classes)
        # data = classserial.data, studentserial.data
        return Response(serializer.data)
    def put(self, request, pk):
        classes = get_object_or_404(Class,pk=pk)
        serializer = ClassSerializer(classes, data = request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    def delete(self, request, pk):
        classes = get_object_or_404(Class,pk=pk)
        classes.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ClassList(APIView):
    def get(self, request):
        queryset = Class.objects.all()
        serializer = ClassSerializer(queryset, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = ClassSerializer(data = request.data)
        serializer.is_valid(raise_exception=True) #
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class StudentDetail(APIView):
    def get(self, request, pk):
        student = get_object_or_404(Student,pk=pk)
        serializer = StudentSerializer(student)
        return Response(serializer.data)
    def put(self, request, pk):
        student = get_object_or_404(Student,pk=pk)
        serializer = StudentSerializer(student, data = request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
    def delete(self, request, pk):
        student = get_object_or_404(Student,pk=pk)
        student.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class StudentList(APIView):
    def get(self, request):
        queryset = Student.objects.all()
        serializer = StudentSerializer(queryset, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = StudentSerializer(data = request.data)
        serializer.is_valid(raise_exception=True) #
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)



class SubjectDetail(APIView):
    def get(self, request, pk):
        subject = get_object_or_404(Subject,pk=pk)
        serializer = SubjectSerializer(subject)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def put(self, request, pk):
        subject = get_object_or_404(Subject,pk=pk)
        serializer = SubjectSerializer(subject, data = request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    def delete(self, request, pk):
        subject = get_object_or_404(Subject,pk=pk)
        subject.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class SubjectList(APIView):
    def get(self, request):
        queryset = Subject.objects.all()
        serializer = SubjectSerializer(queryset, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = SubjectSerializer(data = request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)





class AssignmentDetail(APIView):
    def get(self, request, pk):
        assignment = get_object_or_404(Assignment, pk=pk)
        serializer = AssignmentSerializer(assignment)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def put(self, request, pk):
        assignment = get_object_or_404(Assignment, pk=pk)
        serializer = AssignmentSerializer(assignment, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    def delete(self, request, pk):
         assignment = get_object_or_404(Assignment, pk=pk)
         assignment.delete()
         return Response(status=status.HTTP_204_NO_CONTENT)

class AssignmentList(APIView):
    def get(self, request):
        queryset = Assignment.objects.all()
        serializer = AssignmentSerialiser(queryset, many=True)
        return Response(serializer.data())
    def post(self, request):
        serializer = AssignmentSerialiser(data = request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)





class GradeDetail(APIView):
    def get(self, request, pk):
        grade = get_object_or_404(Grade, pk=pk)
        serializer = GradeSerializer(grade)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def put(self, request, pk):
        grade = get_object_or_404(Grade, pk=pk)
        serializer = GradeSerializer(grade, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    def delete(self, request, pk):
        grade = get_object_or_404(Grade, pk=pk)
        grade.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class GradeList(APIView):
    def get(self, request):
        queryset = Grade.objects.all()
        serializer = GradeSerialiser(queryset, many=True)
        return Response(serializer.data())
    def post(self, request):
        serializer = GradeSerialiser(data = request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
