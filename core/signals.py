from django.contrib.auth import get_user_model
from django.db.models.signals import post_migrate
from django.dispatch import receiver
import os

User = get_user_model()

@receiver(post_migrate)
def create_superuser(sender, **kwargs):
    if User.objects.filter(username="admin").exists():
        return

    User.objects.create_superuser(
        username="diwakarsingh",
        email="rajputdiwakar2002@gmail.com",
        password="Sungoddiwakar@2002"
    )
