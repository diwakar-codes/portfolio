
from django.apps import AppConfig
from django.contrib.auth import get_user_model
from django.db.utils import OperationalError

class CoreConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'core'

    def ready(self):
        try:
            User = get_user_model()
            if not User.objects.filter(username="diwakar").exists():
                User.objects.create_superuser(
                    username="diwakar",
                    email="rajputdiwakar2002@gmail.com",
                    password="Sungoddiwakar@2002"
                )
        except OperationalError:
            pass
