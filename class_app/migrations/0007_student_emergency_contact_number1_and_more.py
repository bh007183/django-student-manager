# Generated by Django 4.0 on 2022-01-17 21:35

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('class_app', '0006_rename_teacher_class_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='emergency_contact_number1',
            field=models.CharField(max_length=10, null=True, validators=[django.core.validators.RegexValidator(code='nomatch', message='Phone number must have 10 digits', regex='^.{10}$')]),
        ),
        migrations.AddField(
            model_name='student',
            name='emergency_contact_number2',
            field=models.CharField(max_length=10, null=True, validators=[django.core.validators.RegexValidator(code='nomatch', message='Phone number must have 10 digits', regex='^.{10}$')]),
        ),
        migrations.AddField(
            model_name='student',
            name='guardian_name_1',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='guardian_name_2',
            field=models.CharField(max_length=255, null=True),
        ),
    ]