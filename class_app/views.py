from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import StudentSerializer

from .models import Student, Subject, Assignment, Grade

# Create your views here.

class StudentDetail(APIView):
    def get(self, request, pk):
        student = Studnet.object.get_object_or_404(pk=id)
        serializer = StudentSerializer(student)

        return Response("ok")
    # def put(self, request, pk):
    
    # def delete(self, request, pk):

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



# class SubjectDetail(APIView):
#     def get(self, request, pk):
#         return Response("ok")
#     def put(self, request, pk):
    
#     def delete(self, request, pk):




# class AssignmentDetail(APIView):
#     def get(self, request, pk):
#         return Response("ok")
#     def put(self, request, pk):
    
#     def delete(self, request, pk):




# class GradeDetail(APIView):
#     def get(self, request, pk):
#         return Response("ok")
#     def put(self, request, pk):
    
#     def delete(self, request, pk):
