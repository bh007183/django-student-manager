# Generated by Django 4.0 on 2021-12-17 18:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('class_app', '0002_rename_subject_assignment_subject_id_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='assignment',
            old_name='subject_id',
            new_name='subject',
        ),
        migrations.RenameField(
            model_name='grade',
            old_name='assignment_id',
            new_name='assignment',
        ),
        migrations.RenameField(
            model_name='student',
            old_name='classes_id',
            new_name='classes',
        ),
        migrations.RenameField(
            model_name='subject',
            old_name='classes_id',
            new_name='classes',
        ),
        migrations.RenameField(
            model_name='subject',
            old_name='student_id',
            new_name='student',
        ),
    ]