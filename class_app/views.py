from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .serializers import  StudentSerializer,  ClassSerializer

from .models import  Student, Class

# Create your views here.
# Student Views




class ClassDetail(APIView):
    permission_classes = [IsAuthenticated]
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
    permission_classes = [IsAuthenticated]
    def get(self, request):
        queryset = Class.objects.filter(user_id=request.user.id)
        print(queryset)
        serializer = ClassSerializer(queryset, many=True)
        return Response(serializer.data)
    def post(self, request):
        request.data["user"] = request.user.id
        serializer = ClassSerializer(data = request.data)
        serializer.is_valid(raise_exception=True) #
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)




class StudentDetail(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, pk):
        student = get_object_or_404(Student,pk=pk)
        serializer = StudentSerializer(student)
        return Response(serializer.data)
    def put(self, request, pk):
        student = get_object_or_404(Student,pk=pk)
      
        serializer = StudentSerializer(student, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    def delete(self, request, pk):
        student = get_object_or_404(Student,pk=pk)
        student.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class StudentDet(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        serializer = StudentSerializer(data = request.data)
        serializer.is_valid(raise_exception=True) #
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    


class StudentList(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, pk):
        print(pk)
        # trying to filter by param
        queryset = Student.objects.filter(classes_id=pk)
        serializer = StudentSerializer(queryset, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = StudentSerializer(data = request.data)
        serializer.is_valid(raise_exception=True) #
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)















