from django.db import models
from django.core.validators import RegexValidator
from .validators import validate_grade

# Create your models here.
class Student(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    # emergency_contact_number1 = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Emergency Number 1 must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    # emergency_contact_number2 = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Emergency Number 2 must be entered in the format: '+999999999'. Up to 15 digits allowed.")

class Subject(models.Model):
    title = models.CharField(max_length=255)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)

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


