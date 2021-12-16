from django.core.exceptions import ValidationError

def validate_grade(value):
    if value > 100:
        raise ValidationError(
            _('Grade can not be more than 100!'),
            params={'value': value},
        )
    elif value < 0:
        raise ValidationError(
            _('Grade can not be less than 0!'),
            params={'value': value},
        )
