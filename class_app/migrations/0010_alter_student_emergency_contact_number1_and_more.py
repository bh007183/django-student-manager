# Generated by Django 4.0 on 2022-01-26 00:15

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('class_app', '0009_alter_class_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='emergency_contact_number1',
            field=models.CharField(blank=True, max_length=10, null=True, validators=[django.core.validators.RegexValidator(code='nomatch', message='Phone number must have 10 digits', regex='^.{10}$')]),
        ),
        migrations.AlterField(
            model_name='student',
            name='emergency_contact_number2',
            field=models.CharField(blank=True, max_length=10, null=True, validators=[django.core.validators.RegexValidator(code='nomatch', message='Phone number must have 10 digits', regex='^.{10}$')]),
        ),
        migrations.AlterField(
            model_name='student',
            name='guardian_name_1',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='student',
            name='guardian_name_2',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
