from django.db import models
from django.core.validators import RegexValidator
from django.contrib.auth.models import User
from .validators import validate_grade
from django.conf import settings

# Create your models here.


class Class(models.Model):
   

   
    class_grade = models.CharField(max_length=4, null=True)
    title = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
class Student(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    classes = models.ForeignKey(Class, on_delete=models.PROTECT)
    guardian_name_1 = models.CharField(max_length=255, null=True, blank=True)
    guardian_name_2 = models.CharField(max_length=255, null=True, blank=True)
    emergency_contact_number1 = models.CharField( max_length=10, validators=[RegexValidator(regex='^.{10}$', message='Phone number must have 10 digits', code='nomatch')], null=True, blank=True)
    emergency_contact_number2 = models.CharField( max_length=10, validators=[RegexValidator(regex='^.{10}$', message='Phone number must have 10 digits', code='nomatch')], null=True, blank=True)



