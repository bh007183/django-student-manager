# Generated by Django 4.0 on 2022-01-17 21:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('class_app', '0005_remove_grade_assignment_remove_subject_classes_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='class',
            old_name='teacher',
            new_name='title',
        ),
    ]
