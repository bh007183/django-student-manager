from django.db import models
from django.core.validators import RegexValidator
from django.contrib.auth.models import User
from .validators import validate_grade
from django.conf import settings

# Create your models here.


class Class(models.Model):
    FIRST = "1"
    SECOND = "2"
    THIRD = "3"
    FOURTH = "4"
    FIFTH = "5"
    SIXTH = "6"
    SEVENTH = "7"
    EIGHTTH = "8"
    NINETH = "9"
    TENTH = "10"
    ELEVENTH = "11"
    TWELFTH = "12"

    GRADE_OPTIONS=[
        (FIRST, "1st"),
        (SECOND, "2nd"),
        (THIRD, "3rd"),
        (FOURTH, "4th"),
        (FIFTH, "5th"),
        (SIXTH, "6th"),
        (SEVENTH, "7th"),
        (EIGHTTH, "8th"),
        (NINETH, "9th"),
        (TENTH, "10th"),
        (ELEVENTH, "11th"),
        (TWELFTH, "12th")
    ]
    class_grade = models.CharField(max_length=4, choices=GRADE_OPTIONS, null=True)
    teacher = models.CharField(max_length=255)
    user = models.OneToOneField(User, related_name="classes", on_delete=models.CASCADE)
class Student(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    classes = models.ForeignKey(Class, on_delete=models.PROTECT)
    # emergency_contact_number1 = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Emergency Number 1 must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    # emergency_contact_number2 = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Emergency Number 2 must be entered in the format: '+999999999'. Up to 15 digits allowed.")

class Subject(models.Model):
    title = models.CharField(max_length=255)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    classes = models.ForeignKey(Class, on_delete=models.CASCADE)

class Assignment(models.Model):
    title = models.CharField(max_length=255)
    module = models.DecimalField(max_digits=3, decimal_places=1)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)

class Grade(models.Model):
    GRADED = "GR"
    NOT_GRADED = "NG"
    GRADE_OPTIONS = [
        (GRADED, "Graded"),
        (NOT_GRADED, "Not Graded")
    ]
    grade_status = models.CharField(max_length=255, choices=GRADE_OPTIONS, default=NOT_GRADED)
    grade = models.IntegerField( default=0, validators=[validate_grade])
    assignment = models.OneToOneField(Assignment, on_delete=models.CASCADE, primary_key=True)


